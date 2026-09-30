(function(){
"use strict";
const DEFAULT_FRENTES=["Bocatoma","Alcantarilla Los Macos","Canal Los Macos","Derivador","Tomas laterales Antiguo Magdalena","Alcantarilla","Rehabilitación paños Nuevo Magdalena","Caídas La Variante","Canoas y entregas"];
const DEFAULT_ESTR=[{frente:"Tomas laterales Antiguo Magdalena",etiqueta:"Toma lateral (Adicional 09)",items:["TL. Guayaquil II – Km 1+080","TL. Guayaquil I – Km 1+290","TL. La Madrid – Km 1+290","TL. Los Aguilares – Km 1+520","TL. La Esperanza – Km 1+705","TL. Llaguento – Km 2+060","TL. Céspedes – Km 2+062","TL. El Mango – Km 3+660","TL. Señor de los Milagros – Km 3+730"]}];
const ACT_SUG=["Excavación","Perfilado y compactación","Encofrado","Colocación de acero","Vaciado de concreto","Curado","Desencofrado","Juntas / sellado","Relleno compactado"];
const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pad=n=>String(n).padStart(2,"0");
const hoy=()=>{const d=new Date();return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())};
const ahora=()=>{const d=new Date();return pad(d.getHours())+":"+pad(d.getMinutes())};
const fmtDia=f=>{try{const [y,m,d]=f.split("-").map(Number);return new Date(y,m-1,d).toLocaleDateString("es-PE",{weekday:"long",day:"numeric",month:"long"})}catch(e){return f}};
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);

/* ================= base de datos en el celular (IndexedDB) ================= */
const IDB={
  db:null,
  open(){return new Promise((res,rej)=>{
    const r=indexedDB.open("mizul_partes",1);
    r.onupgradeneeded=()=>{const d=r.result;
      if(!d.objectStoreNames.contains("registros"))d.createObjectStore("registros",{keyPath:"id"});
      if(!d.objectStoreNames.contains("fotos"))d.createObjectStore("fotos",{keyPath:"id"});
      if(!d.objectStoreNames.contains("config"))d.createObjectStore("config",{keyPath:"k"});};
    r.onsuccess=()=>{this.db=r.result;res(this.db)};
    r.onerror=()=>rej(r.error);
  })},
  req(store,mode,fn){return new Promise((res,rej)=>{
    const t=this.db.transaction(store,mode);const q=fn(t.objectStore(store));
    t.oncomplete=()=>res(q?q.result:undefined);t.onerror=()=>rej(t.error);t.onabort=()=>rej(t.error);
  })},
  all(s){return this.req(s,"readonly",o=>o.getAll())},
  get(s,k){return this.req(s,"readonly",o=>o.get(k))},
  put(s,v){return this.req(s,"readwrite",o=>o.put(v))},
  del(s,k){return this.req(s,"readwrite",o=>o.delete(k))},
};

let frentes=DEFAULT_FRENTES.slice();
let estructuras=DEFAULT_ESTR.slice();
let registros=[];
const fotoUrl={};           // id -> objectURL
let dia=hoy();
let editId=null, curFrente=null, photos=[], nuevasFotos=[], est="Normal", saving=false, gps=null;
const grupoDe=f=>estructuras.find(g=>g.frente===f);

function toast(t,ms){const el=$("toast");el.textContent=t;el.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>el.hidden=true,ms||2600)}

/* ================= render ================= */
function delDia(){return registros.filter(r=>r.fecha===dia)}
function renderFronts(){
  const d=delDia();const box=$("fronts");box.innerHTML="";
  frentes.forEach(f=>{
    const rs=d.filter(r=>r.frente===f);
    const last=rs.length?rs.map(r=>r.hora).sort().pop():"";
    const b=document.createElement("button");
    b.className="front"+(rs.length?" has":"");
    b.innerHTML=`<b>${esc(f)}</b><div class="meta"><span>${rs.length?rs.length+" parte"+(rs.length>1?"s":""):"Sin parte"}</span><span>${last?"últ. "+last:""}</span></div>`;
    b.onclick=()=>openForm(f);
    box.appendChild(b);
  });
  const a=document.createElement("button");a.className="front add";a.textContent="+ Agregar frente";
  a.onclick=()=>{$("addrow").hidden=false;$("nuevoFrente").focus()};
  box.appendChild(a);
  const sel=$("filtro"),v=sel.value;
  sel.innerHTML='<option value="">Todos los frentes</option>'+frentes.map(f=>`<option ${f===v?"selected":""}>${esc(f)}</option>`).join("");
}
function mapsLink(r){return r.lat!=null?`https://maps.google.com/?q=${r.lat},${r.lon}`:""}
function renderList(){
  const f=$("filtro").value;
  const d=delDia().filter(r=>!f||r.frente===f).sort((a,b)=>(b.hora||"").localeCompare(a.hora||"")||(b.ts||0)-(a.ts||0));
  const all=delDia();
  $("sPartes").textContent=all.length;
  $("sFrentes").textContent=new Set(all.map(r=>r.frente)).size;
  $("sPersonal").textContent=all.reduce((s,r)=>s+(Number(r.personal)||0),0);
  $("diaTxt").textContent=fmtDia(dia);
  const list=$("list");
  if(!d.length){list.innerHTML=`<div class="empty">No hay partes ${f?"de "+esc(f)+" ":""}para este día. Toca un frente arriba para registrar el primero.</div>`;return}
  list.innerHTML=d.map(r=>{
    const prog=(r.progIni||r.progFin)?`<span>Prog. <b>${esc(r.progIni||"—")} → ${esc(r.progFin||"—")}</b></span>`:"";
    const ops=r.operarios||[];
    const cap=ops.length?`<span>Operario${ops.length>1?"s":""} <b>${esc(ops.join(", "))}</b></span>`:"";
    const pers=`<span>Cuadrilla <b>${ops.length} Op · ${Number(r.oficiales)||0} Of · ${Number(r.peones)||0} Pe = ${esc(r.personal)}</b></span>`;
    const loc=r.lat!=null?`<span>GPS <a href="${mapsLink(r)}" target="_blank" rel="noopener"><b>${r.lat.toFixed(5)}, ${r.lon.toFixed(5)}</b></a></span>`:"";
    const th=(r.fotos||[]).length?`<div class="thumbs">${r.fotos.map(p=>fotoUrl[p.id]?`<img src="${fotoUrl[p.id]}" alt="Foto del frente" loading="lazy">`:"").join("")}</div>`:"";
    return `<article class="rec ${esc(r.estado||"Normal")}">
      <div class="r1"><span class="fr">${esc(r.frente)}</span>${r.estructura?`<span class="pill">${esc(r.estructura)}</span>`:""}<span class="pill ${esc(r.estado||"Normal")}">${esc(r.estado||"Normal")}</span><span class="hr">${esc(r.hora||"")}</span></div>
      <div class="act">${esc(r.actividad)}</div>
      ${r.descripcion?`<div class="obs">${esc(r.descripcion)}</div>`:""}
      <div class="kv">${cap}${pers}${prog}${loc}</div>
      ${r.obs?`<div class="obs" style="color:var(--muted)"><b>Obs.:</b> ${esc(r.obs)}</div>`:""}
      ${th}
      <div class="acts"><button class="btn" data-ed="${esc(r.id)}">Editar</button><button class="btn danger" data-del="${esc(r.id)}">Eliminar</button></div>
    </article>`}).join("");
  list.querySelectorAll("[data-ed]").forEach(b=>b.onclick=()=>openForm(null,b.dataset.ed));
  list.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{
    if(b.dataset.armed){delRec(b.dataset.del);return}
    b.dataset.armed="1";b.textContent="¿Seguro? Toca otra vez";
    setTimeout(()=>{if(b.isConnected){delete b.dataset.armed;b.textContent="Eliminar"}},3500);
  });
}
function renderAll(){renderFronts();renderList()}

/* ================= GPS ================= */
function pintarGps(){
  const el=$("gpsTxt");
  if(!gps){el.textContent="Sin ubicación";return}
  if(gps.cargando){el.textContent="Obteniendo ubicación…";return}
  if(gps.error){el.textContent=gps.error;return}
  el.innerHTML=`<a href="https://maps.google.com/?q=${gps.lat},${gps.lon}" target="_blank" rel="noopener">${gps.lat.toFixed(5)}, ${gps.lon.toFixed(5)}</a> · ±${Math.round(gps.acc)} m`;
}
function leerGps(){
  if(!("geolocation" in navigator)){gps={error:"Este celular no da ubicación"};pintarGps();return}
  gps={cargando:true};pintarGps();
  navigator.geolocation.getCurrentPosition(
    p=>{gps={lat:p.coords.latitude,lon:p.coords.longitude,acc:p.coords.accuracy};pintarGps()},
    e=>{gps={error:e.code===1?"Ubicación bloqueada: actívala para esta app":"No se obtuvo la ubicación. Toca Actualizar"};pintarGps()},
    {enableHighAccuracy:true,timeout:20000,maximumAge:30000});
}
$("gpsBtn").onclick=leerGps;

/* ================= formulario ================= */
function setSeg(id,v){$(id).querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===v?"true":"false"))}
function fillSuggestions(){
  const acts=[...new Set(registros.map(r=>r.actividad).filter(Boolean).concat(ACT_SUG))].slice(0,40);
  $("actList").innerHTML=acts.map(a=>`<option value="${esc(a)}">`).join("");
  $("capList").innerHTML=[...new Set(registros.flatMap(r=>r.operarios||[]).filter(Boolean))].map(a=>`<option value="${esc(a)}">`).join("");
  const recent=[...new Set(registros.filter(r=>r.frente===curFrente).sort((a,b)=>(b.ts||0)-(a.ts||0)).map(r=>r.actividad))].slice(0,3);
  const q=(recent.length?recent:ACT_SUG.slice(0,5));
  $("actQuick").innerHTML=q.map(a=>`<button type="button">${esc(a)}</button>`).join("");
  $("actQuick").querySelectorAll("button").forEach(b=>b.onclick=()=>{$("fAct").value=b.textContent});
}
function openForm(frente,id){
  editId=id||null;nuevasFotos=[];
  const r=id?registros.find(x=>x.id===id):null;
  curFrente=r?r.frente:frente;
  const prev=registros.filter(x=>x.frente===curFrente).sort((a,b)=>(b.ts||0)-(a.ts||0))[0];
  $("fTitle").textContent=curFrente;
  $("fStamp").textContent=r?"Editando":"Nuevo";
  $("fFecha").value=r?r.fecha:dia;
  $("fHora").value=r?r.hora:ahora();
  $("fAct").value=r?r.actividad:"";
  $("fDesc").value=r?(r.descripcion||""):"";
  $("fPi").value=r?(r.progIni||""):"";
  $("fPf").value=r?(r.progFin||""):"";
  const g=grupoDe(curFrente);
  $("estWrap").hidden=!g;
  $("progWrap").hidden=!!g;
  if(g){
    $("estLbl").textContent=g.etiqueta||"Estructura";
    const cur=r?(r.estructura||""):"";
    const opts=g.items.slice(); if(cur&&!opts.includes(cur))opts.push(cur);
    $("fEstr").innerHTML='<option value="">— Elige —</option>'+opts.map(o=>`<option ${o===cur?"selected":""}>${esc(o)}</option>`).join("");
  }
  $("fObs").value=r?(r.obs||""):"";
  const src=r||prev;
  setOps(src&&src.operarios&&src.operarios.length?src.operarios:[""]);
  $("fOfi").value=src?(Number(src.oficiales)||0):0;
  $("fPeo").value=src?(Number(src.peones)||0):0;
  updTot();
  est=r?(r.estado||"Normal"):"Normal"; setSeg("fEst",est);
  photos=r?(r.fotos||[]).slice():[];
  if(r){gps=r.lat!=null?{lat:r.lat,lon:r.lon,acc:r.acc||0}:null;pintarGps()} else leerGps();
  renderPhotos(); fillSuggestions();
  $("scrim").hidden=false;$("sheet").hidden=false;
  history.pushState({sheet:1},"");
}
async function closeForm(fromBack){
  if($("sheet").hidden)return;
  // fotos agregadas y no guardadas: se borran
  for(const id of nuevasFotos){try{await IDB.del("fotos",id)}catch(e){} if(fotoUrl[id]){URL.revokeObjectURL(fotoUrl[id]);delete fotoUrl[id]}}
  nuevasFotos=[];
  $("scrim").hidden=true;$("sheet").hidden=true;editId=null;
  if(!fromBack&&history.state&&history.state.sheet)history.back();
}
window.addEventListener("popstate",()=>{if(!$("sheet").hidden)closeForm(true)});

function readOps(){return [...$("opList").querySelectorAll("input")].map(i=>i.value.trim())}
function setOps(list){
  const box=$("opList");
  box.innerHTML=list.map((n,i)=>`<div class="op-row"><span class="n">${i+1}.</span><input list="capList" placeholder="Nombre del operario" maxlength="60" value="${esc(n)}" aria-label="Operario ${i+1}"><button type="button" aria-label="Quitar operario" data-rm="${i}">×</button></div>`).join("");
  box.querySelectorAll("input").forEach(i=>i.oninput=updTot);
  box.querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>{const l=readOps();l.splice(+b.dataset.rm,1);setOps(l.length?l:[""]);updTot()});
}
function cuenta(){return readOps().filter(Boolean).length+Math.max(0,parseInt($("fOfi").value)||0)+Math.max(0,parseInt($("fPeo").value)||0)}
function updTot(){$("fTot").textContent=cuenta()}
$("addOp").onclick=()=>{const l=readOps();l.push("");setOps(l);updTot();const ins=$("opList").querySelectorAll("input");ins[ins.length-1].focus()};
document.querySelectorAll("[data-step]").forEach(b=>b.onclick=()=>{const i=$(b.dataset.step);i.value=Math.max(0,(parseInt(i.value)||0)+Number(b.dataset.d));updTot()});
["fOfi","fPeo"].forEach(id=>$(id).addEventListener("input",updTot));

function renderPhotos(){
  const box=$("fPhotos");
  box.innerHTML=photos.map((p,i)=>`<div class="ph"><img src="${fotoUrl[p.id]||""}" alt="Foto ${i+1}"><button type="button" data-i="${i}" aria-label="Quitar foto">×</button></div>`).join("")
    +`<div class="photo-btn">Galería<input type="file" accept="image/*" multiple id="fFile" aria-label="Elegir fotos de la galería"></div>`
    +`<div class="photo-btn">Cámara<input type="file" accept="image/*" capture="environment" id="fCam" aria-label="Tomar foto con la cámara"></div>`;
  box.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{photos.splice(+b.dataset.i,1);renderPhotos()});
  ["fFile","fCam"].forEach(id=>$(id).onchange=e=>{const f=[...e.target.files];e.target.value="";addPhotos(f)});
}
function shrink(file){return new Promise((res,rej)=>{
  const img=new Image(),u=URL.createObjectURL(file);
  img.onload=()=>{const M=1600;let w=img.naturalWidth,h=img.naturalHeight;const k=Math.min(1,M/Math.max(w,h));w=Math.round(w*k);h=Math.round(h*k);
    const c=document.createElement("canvas");c.width=w;c.height=h;c.getContext("2d").drawImage(img,0,0,w,h);URL.revokeObjectURL(u);
    c.toBlob(b=>b?res(b):rej(new Error("no se pudo procesar")),"image/jpeg",.78)};
  img.onerror=()=>{URL.revokeObjectURL(u);rej(new Error("imagen no válida"))};img.src=u})}
async function addPhotos(files){
  for(const f of files){
    try{
      const blob=await shrink(f);const id="f"+uid();
      await IDB.put("fotos",{id,blob,nombre:f.name||""});
      fotoUrl[id]=URL.createObjectURL(blob);
      photos.push({id});nuevasFotos.push(id);
      renderPhotos();
    }catch(e){toast("No se pudo agregar la foto: "+(e.message||"error"))}
  }
}
$("fEst").onclick=e=>{const b=e.target.closest("button");if(b){est=b.dataset.v;setSeg("fEst",est)}};
$("fClose").onclick=()=>closeForm();$("fCancel").onclick=()=>closeForm();$("scrim").onclick=()=>closeForm();

$("form").addEventListener("submit",async e=>{
  e.preventDefault(); if(saving)return;
  const g=grupoDe(curFrente);
  const estr=g?$("fEstr").value:"";
  if(g&&!estr){toast("Elige la "+(g.etiqueta||"estructura").toLowerCase());$("fEstr").focus();return}
  const actividad=$("fAct").value.trim();
  if(!actividad){toast("Escribe la actividad");$("fAct").focus();return}
  const old=editId?registros.find(x=>x.id===editId):null;
  const r={
    id:old?old.id:"p"+uid(),
    frente:curFrente, estructura:estr, fecha:$("fFecha").value, hora:$("fHora").value,
    actividad, operarios:readOps().filter(Boolean),
    oficiales:Math.max(0,parseInt($("fOfi").value)||0), peones:Math.max(0,parseInt($("fPeo").value)||0),
    personal:cuenta(), descripcion:$("fDesc").value.trim(),
    progIni:g?"":$("fPi").value.trim(), progFin:g?"":$("fPf").value.trim(),
    estado:est, obs:$("fObs").value.trim(), fotos:photos.map(p=>({id:p.id})),
    lat:gps&&gps.lat!=null?gps.lat:null, lon:gps&&gps.lon!=null?gps.lon:null, acc:gps&&gps.acc!=null?Math.round(gps.acc):null,
    ts:old?old.ts:Date.now(), editado:old?Date.now():null
  };
  saving=true;$("fSave").disabled=true;$("fSave").textContent="Guardando…";
  try{
    await IDB.put("registros",r);
    // fotos quitadas al editar: se borran del celular
    if(old){const keep=new Set(r.fotos.map(p=>p.id));for(const p of old.fotos||[])if(!keep.has(p.id)){await IDB.del("fotos",p.id);if(fotoUrl[p.id]){URL.revokeObjectURL(fotoUrl[p.id]);delete fotoUrl[p.id]}}}
    registros=registros.filter(x=>x.id!==r.id).concat(r);
    nuevasFotos=[];
    if(r.fecha!==dia){dia=r.fecha;$("dia").value=dia}
    await closeForm();renderAll();
    toast("Parte guardado · "+r.frente+" "+r.hora);
    marcarCambios();
  }catch(err){toast("No se guardó: "+(err&&err.message||"error"))}
  finally{saving=false;$("fSave").disabled=false;$("fSave").textContent="Guardar parte"}
});

async function delRec(id){
  const r=registros.find(x=>x.id===id);if(!r)return;
  try{
    await IDB.del("registros",id);
    for(const p of r.fotos||[]){await IDB.del("fotos",p.id);if(fotoUrl[p.id]){URL.revokeObjectURL(fotoUrl[p.id]);delete fotoUrl[p.id]}}
    registros=registros.filter(x=>x.id!==id);renderAll();toast("Parte eliminado");marcarCambios();
  }catch(e){toast("No se eliminó: "+(e.message||"error"))}
}

/* ================= frentes ================= */
$("addOk").onclick=async()=>{
  const n=$("nuevoFrente").value.trim(); if(!n)return;
  if(!frentes.includes(n)){frentes.push(n);await IDB.put("config",{k:"frentes",v:frentes})}
  $("nuevoFrente").value="";$("addrow").hidden=true;renderAll();
};
$("addCancel").onclick=()=>{$("addrow").hidden=true};
$("nuevoFrente").addEventListener("keydown",e=>{if(e.key==="Enter")$("addOk").click()});

/* ================= Excel ================= */
function rows(list){
  return list.slice().sort((a,b)=>(a.fecha+a.hora).localeCompare(b.fecha+b.hora)).map(r=>{
    const ops=r.operarios||[];
    return {
      "Fecha":r.fecha,"Hora":r.hora,"Frente":r.frente,"Estructura":r.estructura||"","Actividad / partida":r.actividad,
      "Operarios (nombres)":ops.join(", "),"N.º operarios":ops.length,
      "Oficiales":Number(r.oficiales)||0,"Peones":Number(r.peones)||0,"Total cuadrilla":Number(r.personal)||0,
      "Descripción del avance":r.descripcion||"",
      "Progresiva inicio":r.progIni||"","Progresiva fin":r.progFin||"",
      "Estado":r.estado||"Normal","Observaciones":r.obs||"","N.º fotos":(r.fotos||[]).length,
      "Latitud":r.lat??"","Longitud":r.lon??"","Precisión GPS (m)":r.acc??"","Ubicación (Google Maps)":mapsLink(r)
    }});
}
function libro(list){
  const ws=XLSX.utils.json_to_sheet(rows(list));
  ws["!cols"]=[{wch:11},{wch:6},{wch:26},{wch:30},{wch:30},{wch:30},{wch:10},{wch:9},{wch:8},{wch:12},{wch:50},{wch:11},{wch:11},{wch:12},{wch:45},{wch:8},{wch:11},{wch:11},{wch:10},{wch:42}];
  const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,"Partes");
  const res={};list.forEach(r=>{const k=r.fecha+"|"+r.frente;res[k]=res[k]||{Fecha:r.fecha,Frente:r.frente,Partes:0,"Operarios (máx.)":0,"Oficiales (máx.)":0,"Peones (máx.)":0,"Total (máx.)":0};const x=res[k];x.Partes++;x["Operarios (máx.)"]=Math.max(x["Operarios (máx.)"],(r.operarios||[]).length);x["Oficiales (máx.)"]=Math.max(x["Oficiales (máx.)"],Number(r.oficiales)||0);x["Peones (máx.)"]=Math.max(x["Peones (máx.)"],Number(r.peones)||0);x["Total (máx.)"]=Math.max(x["Total (máx.)"],Number(r.personal)||0)});
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(Object.values(res).sort((a,b)=>(a.Fecha+a.Frente).localeCompare(b.Fecha+b.Frente))),"Resumen");
  return wb;
}
function descargar(blob,nombre){const u=URL.createObjectURL(blob);const a=document.createElement("a");a.href=u;a.download=nombre;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000)}
async function compartirODescargar(blob,nombre,titulo,compartir){
  const file=new File([blob],nombre,{type:blob.type});
  if(compartir&&navigator.canShare&&navigator.canShare({files:[file]})){
    try{await navigator.share({files:[file],title:titulo});return}catch(e){if(e.name==="AbortError")return}
  }
  descargar(blob,nombre);toast("Guardado en Descargas: "+nombre,3500);
}
async function exportar(list,nombre,compartir){
  if(!list.length){toast("No hay partes para exportar");return}
  const buf=XLSX.write(libro(list),{bookType:"xlsx",type:"array"});
  const blob=new Blob([buf],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
  await compartirODescargar(blob,nombre+".xlsx","Partes de frente",compartir);
}
$("expDia").onclick=()=>exportar(delDia(),"Partes_"+dia,false);
$("expTodo").onclick=()=>exportar(registros,"Partes_completo_"+hoy(),false);
$("shareDia").onclick=()=>exportar(delDia(),"Partes_"+dia,true);
if(!(navigator.canShare))$("shareDia").hidden=true;

/* ================= respaldo ================= */
const b64=blob=>new Promise(r=>{const fr=new FileReader();fr.onload=()=>r(String(fr.result).split(",")[1]);fr.readAsDataURL(blob)});
const deb64=(s,t)=>{const bin=atob(s);const u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new Blob([u],{type:t||"image/jpeg"})};
function marcarCambios(){IDB.put("config",{k:"cambios",v:Date.now()}).then(pintarRespaldo).catch(()=>{})}
async function pintarRespaldo(){
  try{
    const u=await IDB.get("config","ultimoRespaldo"),c=await IDB.get("config","cambios");
    const el=$("bkTxt");
    if(!u){el.textContent=registros.length?"Aún no has guardado ningún respaldo.":"Sin datos todavía.";$("bkBadge").hidden=!registros.length;return}
    const d=new Date(u.v);
    el.textContent="Último respaldo: "+d.toLocaleDateString("es-PE")+" "+pad(d.getHours())+":"+pad(d.getMinutes());
    $("bkBadge").hidden=!(c&&c.v>u.v&&Date.now()-u.v>3*864e5);
  }catch(e){}
}
$("bkSave").onclick=async()=>{
  $("bkSave").disabled=true;toast("Preparando respaldo…");
  try{
    const fotos=await IDB.all("fotos");
    const out={app:"mizul-partes",version:1,creado:new Date().toISOString(),frentes,estructuras,registros,fotos:[]};
    for(const f of fotos)out.fotos.push({id:f.id,tipo:f.blob.type,datos:await b64(f.blob)});
    const blob=new Blob([JSON.stringify(out)],{type:"application/json"});
    await compartirODescargar(blob,"Respaldo_Partes_MIZUL_"+hoy()+".json","Respaldo partes MIZUL",true);
    await IDB.put("config",{k:"ultimoRespaldo",v:Date.now()});pintarRespaldo();
  }catch(e){toast("No se pudo crear el respaldo: "+(e.message||"error"))}
  finally{$("bkSave").disabled=false}
};
$("bkFile").onchange=async e=>{
  const f=e.target.files[0];e.target.value="";if(!f)return;
  try{
    const data=JSON.parse(await f.text());
    if(data.app!=="mizul-partes")throw new Error("no es un respaldo de esta app");
    let n=0;
    for(const p of data.fotos||[]){await IDB.put("fotos",{id:p.id,blob:deb64(p.datos,p.tipo)})}
    for(const r of data.registros||[]){if(!registros.find(x=>x.id===r.id)){await IDB.put("registros",r);n++}}
    if(Array.isArray(data.frentes)){frentes=[...new Set(frentes.concat(data.frentes))];await IDB.put("config",{k:"frentes",v:frentes})}
    if(Array.isArray(data.estructuras)&&data.estructuras.length){estructuras=data.estructuras;await IDB.put("config",{k:"estructuras",v:estructuras})}
    await cargar();toast("Respaldo restaurado: "+n+" partes nuevos",3500);
  }catch(err){toast("No se pudo restaurar: "+(err.message||"archivo dañado"),4000)}
};

/* ================= arranque ================= */
$("dia").value=dia;
$("dia").onchange=e=>{dia=e.target.value||hoy();renderAll()};
$("filtro").onchange=renderList;

async function cargar(){
  const cfg=await IDB.all("config");const get=k=>(cfg.find(c=>c.k===k)||{}).v;
  frentes=get("frentes")||DEFAULT_FRENTES.slice();
  estructuras=get("estructuras")||DEFAULT_ESTR.slice();
  registros=await IDB.all("registros");
  for(const f of await IDB.all("fotos"))if(!fotoUrl[f.id])fotoUrl[f.id]=URL.createObjectURL(f.blob);
  renderAll();pintarRespaldo();
}
(async()=>{
  renderAll();
  try{await IDB.open();await cargar();$("mode").hidden=true}
  catch(e){$("mode").hidden=false;$("mode").textContent="No se pudo abrir el almacenamiento del celular. Revisa que no estés en modo incógnito."}
  try{if(navigator.storage&&navigator.storage.persist)await navigator.storage.persist()}catch(e){}
  if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("sw.js").catch(()=>{});
})();
})();

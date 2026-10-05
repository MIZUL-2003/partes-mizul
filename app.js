(function(){
"use strict";
const DEFAULT_FRENTES=["REHABILITACION CANAL LOS MACOS", "REHABILITACION CANAL DERIVADOR", "REHABILITACION CANAL ANTIGUO MAGDALENA", "REHABILITACION CANAL NUEVO MAGDALENA", "REHABILITACION CANAL SEÑOR DE LOS MILAGROS", "REHABILITACION CANAL LA VARIANTE", "ADICIONAL 15 \"(REHABILITACIÒN PAÑOS CANAL NUEVO MAGDALENA)\"", "ADICIONAL 08 \"CANAL VARIANTE/TL. EMPALME/ACUEDUCTO\""];
const DEFAULT_ESTR=[{"frente": "REHABILITACION CANAL SEÑOR DE LOS MILAGROS", "etiqueta": "Toma lateral (Adicional 09)", "items": ["TL. Guayaquil II – Km 1+080", "TL. Guayaquil I – Km 1+290", "TL. La Madrid – Km 1+290", "TL. Los Aguilares – Km 1+520", "TL. La Esperanza – Km 1+705", "TL. Llaguento – Km 2+060", "TL. Céspedes – Km 2+062", "TL. El Mango – Km 3+660", "TL. Señor de los Milagros – Km 3+730"]}];
const DEFAULT_PARTIDAS=[{"id": "tmutinrzhrblh37", "nivel": 2, "nombre": "MOVIMIENTO DE TIERRAS", "padre": null, "orden": 1, "frente": "REHABILITACION CANAL DERIVADOR"}, {"id": "tmutip45vcv4utq", "nivel": 2, "nombre": "OBRAS DE CONCRETO", "padre": null, "orden": 2, "frente": "REHABILITACION CANAL DERIVADOR"}, {"id": "tmutiqxts5syxrb", "nivel": 2, "nombre": "TRABAJOS PRELIMINARES", "padre": null, "orden": 0, "frente": "REHABILITACION CANAL DERIVADOR"}, {"id": "tmutisv87ckwkvr", "nivel": 2, "nombre": "OBRAS DE ARTE", "padre": null, "orden": 3, "frente": "REHABILITACION CANAL DERIVADOR"}, {"id": "tmutivu0lzpy3ed", "nivel": 3, "nombre": "REPOSICIÓN DE MURO Y LOSA DE MANIOBRA EN DESGRABADOR (PROG: 0+058.45)", "padre": "tmutisv87ckwkvr", "orden": 0}, {"id": "tmutj3s1xcld5tm", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmutivu0lzpy3ed", "orden": 0}, {"id": "tmutj4ih0xvsgcm", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmutivu0lzpy3ed", "orden": 1}, {"id": "tmutj4w407n6sqk", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmutivu0lzpy3ed", "orden": 2}, {"id": "tmutj57d3hcrmr8", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmutivu0lzpy3ed", "orden": 3}, {"id": "tmutj5ixivbuwzx", "nivel": 4, "nombre": "Suministro e Instalación de Compuerta Metálica b=1.20xh=1.55m", "padre": "tmutivu0lzpy3ed", "orden": 4}, {"id": "tmutj5rk52aeneh", "nivel": 4, "nombre": "Baranda de Protección", "padre": "tmutivu0lzpy3ed", "orden": 5}, {"id": "tmutj6sv0bc43g6", "nivel": 3, "nombre": "PONTON VEHICULAR (PROG: 0+239.60)", "padre": "tmutisv87ckwkvr", "orden": 1}, {"id": "tmutj78ge0hjmmm", "nivel": 4, "nombre": "Excavación Manual para Estructura", "padre": "tmutj6sv0bc43g6", "orden": 0}, {"id": "tmutj7g3j7k7lhz", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmutj6sv0bc43g6", "orden": 1}, {"id": "tmutj7p5uxc29px", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmutj6sv0bc43g6", "orden": 3}, {"id": "tmutj7yzeqgnj65", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmutj6sv0bc43g6", "orden": 4}, {"id": "tmutj8y6tlpa3hn", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmutj6sv0bc43g6", "orden": 5}, {"id": "tmutj95ipmeup3o", "nivel": 4, "nombre": "Concreto Ciclopeo F'c=210 Kg/cm2+30%P.M", "padre": "tmutj6sv0bc43g6", "orden": 2}, {"id": "tmutjbqpfflmpz6", "nivel": 3, "nombre": "AFORADOR RBC (PROG: 0+262.60)", "padre": "tmutisv87ckwkvr", "orden": 2}, {"id": "tmutjdv89e0mfe5", "nivel": 4, "nombre": "Excavación Manual para Estructuras", "padre": "tmutjbqpfflmpz6", "orden": 0}, {"id": "tmutje4tv2z2ec8", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmutjbqpfflmpz6", "orden": 1}, {"id": "tmutjgxvwsoq8be", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmutjbqpfflmpz6", "orden": 2}, {"id": "tmutjh7s00xphfj", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmutjbqpfflmpz6", "orden": 3}, {"id": "tmutjhetuh01qjz", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmutjbqpfflmpz6", "orden": 4}, {"id": "tmutjhotcnf13yl", "nivel": 4, "nombre": "Suministro e Instalacion de Regla Metalica Graduada", "padre": "tmutjbqpfflmpz6", "orden": 5}, {"id": "tmutjinojppvz48", "nivel": 3, "nombre": "TRANSICIÓN (04)", "padre": "tmutisv87ckwkvr", "orden": 3}, {"id": "tmutjj7x76famt7", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmutjinojppvz48", "orden": 0}, {"id": "tmutjjh86zkha6o", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmutjinojppvz48", "orden": 1}, {"id": "tmutjjoyg7gz3kf", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmutjinojppvz48", "orden": 2}, {"id": "tmutjk39mffx4pk", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmutjinojppvz48", "orden": 3}, {"id": "tmutjl9dn81u05w", "nivel": 3, "nombre": "JUNTAS", "padre": "tmutisv87ckwkvr", "orden": 4}, {"id": "tmutjlgeibpfa2m", "nivel": 4, "nombre": "Junta de Dilatación e=1\"", "padre": "tmutjl9dn81u05w", "orden": 0}, {"id": "tmutjlm8ip4kjbg", "nivel": 4, "nombre": "Juntas de contracción e=1/2\"", "padre": "tmutjl9dn81u05w", "orden": 1}, {"id": "tmutjlwyosq69db", "nivel": 4, "nombre": "Junta de Water Stop 6\"", "padre": "tmutjl9dn81u05w", "orden": 2}, {"id": "tmutk1qmg2ec8w9", "nivel": 3, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmutip45vcv4utq", "orden": 0}, {"id": "tmutk2750bfd5xn", "nivel": 3, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmutip45vcv4utq", "orden": 1}, {"id": "tmutk2nzvgf2xaa", "nivel": 3, "nombre": "Concreto F'c= 175 Kg/cm2", "padre": "tmutip45vcv4utq", "orden": 2}, {"id": "tmutk2tc79soe3v", "nivel": 3, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmutip45vcv4utq", "orden": 3}, {"id": "tmutk3aerey5oqh", "nivel": 3, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmutip45vcv4utq", "orden": 4}, {"id": "tmutk3hq27y9bof", "nivel": 3, "nombre": "Encofrado y Desencofrado con Cerchas - Tipo II", "padre": "tmutip45vcv4utq", "orden": 5}, {"id": "tmutn48mj9bdom3", "nivel": 2, "nombre": "OBRAS DE CONCRETO", "padre": null, "frente": "REHABILITACION CANAL NUEVO MAGDALENA", "orden": 0}, {"id": "tmutn50wudp828g", "nivel": 3, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm.", "padre": "tmutn48mj9bdom3", "orden": 0}, {"id": "tmutn5dmphoybay", "nivel": 3, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmutn48mj9bdom3", "orden": 1}, {"id": "tmutn62dmql93bj", "nivel": 3, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmutn48mj9bdom3", "orden": 2}, {"id": "tmutn6bdki7wpbp", "nivel": 3, "nombre": "Concreto F'c= 175 Kg/cm2.", "padre": "tmutn48mj9bdom3", "orden": 3}, {"id": "tmutn6jfvebgvq9", "nivel": 3, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmutn48mj9bdom3", "orden": 4}, {"id": "tmutn6prile9onh", "nivel": 3, "nombre": "Encofrado y Desencofrado con Cerchas - Tipo I", "padre": "tmutn48mj9bdom3", "orden": 5}, {"id": "tmutnbkwpzekctc", "nivel": 2, "nombre": "OBRAS DE ARTE", "padre": null, "frente": "REHABILITACION CANAL NUEVO MAGDALENA", "orden": 1}, {"id": "tmutnz0ty8zt80g", "nivel": 3, "nombre": "CANOA 02", "padre": "tmutnbkwpzekctc", "orden": 0}, {"id": "tmutnze3rkcamgw", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmutnz0ty8zt80g", "orden": 0}, {"id": "tmuto0bkoqyvc0f", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmutnz0ty8zt80g", "orden": 1}, {"id": "tmuto0j6sf1ynhh", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmutnz0ty8zt80g", "orden": 2}, {"id": "tmuto0t4a09g9ai", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmutnz0ty8zt80g", "orden": 3}, {"id": "tmuto14sg5ots43", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmutnz0ty8zt80g", "orden": 4}, {"id": "tmuto1sswrk1t2t", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmutnz0ty8zt80g", "orden": 5}, {"id": "tmuuovn9h5yyob7", "nivel": 3, "nombre": "CANOA 07", "padre": "tmutnbkwpzekctc", "orden": 1}, {"id": "tmuuowu6pmf8zur", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuuovn9h5yyob7", "orden": 0}, {"id": "tmuuox2iyziwr5y", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuuovn9h5yyob7", "orden": 1}, {"id": "tmuuox9vhzi6w9e", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuuovn9h5yyob7", "orden": 2}, {"id": "tmuuoxicv8fpv6f", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuuovn9h5yyob7", "orden": 3}, {"id": "tmuuoy16jsck723", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuuovn9h5yyob7", "orden": 4}, {"id": "tmuuoy9w7xednd0", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuuovn9h5yyob7", "orden": 5}, {"id": "tmuup3qjfio2ezk", "nivel": 3, "nombre": "CANOA 09", "padre": "tmutnbkwpzekctc", "orden": 2}, {"id": "tmuup4cdxkju40m", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuup3qjfio2ezk", "orden": 0}, {"id": "tmuup4hgp5fudxh", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuup3qjfio2ezk", "orden": 1}, {"id": "tmuup4nutgcu2w9", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuup3qjfio2ezk", "orden": 2}, {"id": "tmuup4t573kg1aa", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuup3qjfio2ezk", "orden": 3}, {"id": "tmuup4y3nsz6fpc", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuup3qjfio2ezk", "orden": 4}, {"id": "tmuup5885i9tnmt", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuup3qjfio2ezk", "orden": 5}, {"id": "tmuup5dbnf2dhjh", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuup3qjfio2ezk", "orden": 6}, {"id": "tmuup5qn6a4yzll", "nivel": 3, "nombre": "ENTREGA 07", "padre": "tmutnbkwpzekctc", "orden": 3}, {"id": "tmuup6ncwsydtys", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuup5qn6a4yzll", "orden": 0}, {"id": "tmuup6xf142nui6", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuup5qn6a4yzll", "orden": 1}, {"id": "tmuup73c9z54hua", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuup5qn6a4yzll", "orden": 2}, {"id": "tmuup79zohibxs9", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuup5qn6a4yzll", "orden": 3}, {"id": "tmuup7f1rospklw", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuup5qn6a4yzll", "orden": 4}, {"id": "tmuup7s0f9ew7lb", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuup5qn6a4yzll", "orden": 5}, {"id": "tmuup7wyf008mdc", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuup5qn6a4yzll", "orden": 6}, {"id": "tmuup8w85mwk830", "nivel": 3, "nombre": "CANOA 10", "padre": "tmutnbkwpzekctc", "orden": 4}, {"id": "tmuup9rrdrp29f0", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuup8w85mwk830", "orden": 0}, {"id": "tmuup9x3u53hmok", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuup8w85mwk830", "orden": 1}, {"id": "tmuupa2yh7qrp5q", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuup8w85mwk830", "orden": 2}, {"id": "tmuupa8ona946hv", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuup8w85mwk830", "orden": 3}, {"id": "tmuupae8wy2gjel", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuup8w85mwk830", "orden": 4}, {"id": "tmuupakp5wc6ois", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuup8w85mwk830", "orden": 5}, {"id": "tmuupbm2q81w6qh", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuup8w85mwk830", "orden": 6}, {"id": "tmuupc087bn0552", "nivel": 3, "nombre": "CANOA 11", "padre": "tmutnbkwpzekctc", "orden": 5}, {"id": "tmuupchtcaeupsv", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuupc087bn0552", "orden": 0}, {"id": "tmuupcndibeeib8", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuupc087bn0552", "orden": 1}, {"id": "tmuupcx4cb3xuwk", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuupc087bn0552", "orden": 2}, {"id": "tmuupd3lu1ounhc", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuupc087bn0552", "orden": 3}, {"id": "tmuupdci08kl4z9", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuupc087bn0552", "orden": 4}, {"id": "tmuupdivvzs2arm", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuupc087bn0552", "orden": 5}, {"id": "tmuupdr0v6bt136", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuupc087bn0552", "orden": 6}, {"id": "tmuupe5loyurb1q", "nivel": 3, "nombre": "CANOA 12", "padre": "tmutnbkwpzekctc", "orden": 6}, {"id": "tmuupee78d9nr8e", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuupe5loyurb1q", "orden": 0}, {"id": "tmuupekd6zvnynw", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuupe5loyurb1q", "orden": 1}, {"id": "tmuupepu2hzod2t", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuupe5loyurb1q", "orden": 2}, {"id": "tmuupeypni1tdh8", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuupe5loyurb1q", "orden": 3}, {"id": "tmuupfuue91m1w6", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuupe5loyurb1q", "orden": 4}, {"id": "tmuupg11m4ofxur", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuupe5loyurb1q", "orden": 5}, {"id": "tmuupgcj6xr17w1", "nivel": 3, "nombre": "ENTREGA 04", "padre": "tmutnbkwpzekctc", "orden": 7}, {"id": "tmuupgo6bqyfwnq", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuupgcj6xr17w1", "orden": 0}, {"id": "tmuupgyo03x00x1", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuupgcj6xr17w1", "orden": 1}, {"id": "tmuuph5gifanxxt", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuupgcj6xr17w1", "orden": 2}, {"id": "tmuuphbb0dgq8vu", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuupgcj6xr17w1", "orden": 3}, {"id": "tmuuphilsvh0j50", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuupgcj6xr17w1", "orden": 4}, {"id": "tmuuphqi7jgfa0b", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuupgcj6xr17w1", "orden": 5}, {"id": "tmuuphwgqk9dftl", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuupgcj6xr17w1", "orden": 6}, {"id": "tmuupm1tdvo52cr", "nivel": 3, "nombre": "ALCANTARILLA PARA CRUCE DE QUEBRADA", "padre": "tmutnbkwpzekctc", "orden": 8}, {"id": "tmuupm876ozxvvi", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuupm1tdvo52cr", "orden": 0}, {"id": "tmuupmdobsu55hv", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuupm1tdvo52cr", "orden": 1}, {"id": "tmuupmwvz0ctb3j", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuupm1tdvo52cr", "orden": 2}, {"id": "tmuupn58y5nljoo", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuupm1tdvo52cr", "orden": 3}, {"id": "tmuupnz5izzpqh3", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuupm1tdvo52cr", "orden": 4}, {"id": "tmuupo70rfz5fiw", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuupm1tdvo52cr", "orden": 5}, {"id": "tmuupohz13aztzf", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuupm1tdvo52cr", "orden": 6}, {"id": "tmuupshd1lbncw4", "nivel": 3, "nombre": "CANOA 15", "padre": "tmutnbkwpzekctc", "orden": 9}, {"id": "tmuuqd1pnrn1gdm", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuupshd1lbncw4", "orden": 0}, {"id": "tmuuqd6vn6lopky", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuupshd1lbncw4", "orden": 1}, {"id": "tmuuqdc5hwswejt", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuupshd1lbncw4", "orden": 2}, {"id": "tmuuqdomshmbccb", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuupshd1lbncw4", "orden": 4}, {"id": "tmuuqdw71mrfv3h", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuupshd1lbncw4", "orden": 3}, {"id": "tmuuqe9oxwvi34m", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuupshd1lbncw4", "orden": 5}, {"id": "tmuuqefkoqezuj8", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuupshd1lbncw4", "orden": 6}, {"id": "tmuuqevdyh2ulff", "nivel": 3, "nombre": "ENTREGA 06", "padre": "tmutnbkwpzekctc", "orden": 10}, {"id": "tmuuqf5trk11wle", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuuqevdyh2ulff", "orden": 0}, {"id": "tmuuqfagji8f6i1", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuuqevdyh2ulff", "orden": 1}, {"id": "tmuuqfi97vkzypr", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuuqevdyh2ulff", "orden": 2}, {"id": "tmuuqfnm079ewkk", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuuqevdyh2ulff", "orden": 3}, {"id": "tmuuqfudwaf4302", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuuqevdyh2ulff", "orden": 4}, {"id": "tmuuqg2318ezvvn", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuuqevdyh2ulff", "orden": 5}, {"id": "tmuuqgbb30awh7x", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuuqevdyh2ulff", "orden": 6}, {"id": "tmuuqgz1to2zwod", "nivel": 3, "nombre": "CANOA 16", "padre": "tmutnbkwpzekctc", "orden": 11}, {"id": "tmuuqhi072zdhzk", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuuqgz1to2zwod", "orden": 0}, {"id": "tmuuqhn4s81vc96", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuuqgz1to2zwod", "orden": 1}, {"id": "tmuuqht7gj9zr15", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuuqgz1to2zwod", "orden": 2}, {"id": "tmuuqi00gnh72z5", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuuqgz1to2zwod", "orden": 3}, {"id": "tmuuqi5065ntgew", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuuqgz1to2zwod", "orden": 4}, {"id": "tmuuqidmp5azkw6", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuuqgz1to2zwod", "orden": 5}, {"id": "tmuuqsum0sx9chl", "nivel": 3, "nombre": "CANOA 20", "padre": "tmutnbkwpzekctc", "orden": 12}, {"id": "tmuuqt2eobn6b7z", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuuqsum0sx9chl", "orden": 0}, {"id": "tmuuqt7ujrt3tnv", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuuqsum0sx9chl", "orden": 1}, {"id": "tmuuqtdjiyh27ve", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuuqsum0sx9chl", "orden": 2}, {"id": "tmuuqtmrru5orzx", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuuqsum0sx9chl", "orden": 3}, {"id": "tmuuqttx6k8mzvd", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuuqsum0sx9chl", "orden": 4}, {"id": "tmuuqtyvgmy9n31", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuuqsum0sx9chl", "orden": 5}, {"id": "tmuuqu44i2nttcc", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuuqsum0sx9chl", "orden": 6}, {"id": "tmuuque2kxmaako", "nivel": 3, "nombre": "CANOA 23", "padre": "tmutnbkwpzekctc", "orden": 13}, {"id": "tmuuqvlkug5n9lp", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuuque2kxmaako", "orden": 0}, {"id": "tmuuqvrly364zmu", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuuque2kxmaako", "orden": 1}, {"id": "tmuuqvyckluy3am", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuuque2kxmaako", "orden": 2}, {"id": "tmuuqw4dvid1jk6", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuuque2kxmaako", "orden": 3}, {"id": "tmuuqwbx3vtdkei", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuuque2kxmaako", "orden": 4}, {"id": "tmuuqwi3uvo3ply", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuuque2kxmaako", "orden": 5}, {"id": "tmuuqwo5qvf9140", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuuque2kxmaako", "orden": 6}, {"id": "tmuuqx3bgjpwqd2", "nivel": 3, "nombre": "CANOA 04", "padre": "tmutnbkwpzekctc", "orden": 14}, {"id": "tmuuqyoroy6tqvx", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuuqx3bgjpwqd2", "orden": 0}, {"id": "tmuuqyukkauixjp", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuuqx3bgjpwqd2", "orden": 1}, {"id": "tmuuqz3kv7iwwd2", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuuqx3bgjpwqd2", "orden": 2}, {"id": "tmuuqz9ltfjlnat", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuuqx3bgjpwqd2", "orden": 3}, {"id": "tmuuqzge90wk2fy", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuuqx3bgjpwqd2", "orden": 4}, {"id": "tmuuqzl927bavsx", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuuqx3bgjpwqd2", "orden": 5}, {"id": "tmuuqzq9bdnivgs", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuuqx3bgjpwqd2", "orden": 6}, {"id": "tmuuqzweja5xz8s", "nivel": 3, "nombre": "CANOA 24", "padre": "tmutnbkwpzekctc", "orden": 15}, {"id": "tmuur0az9vwe9y1", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuuqzweja5xz8s", "orden": 0}, {"id": "tmuur0geip80k4a", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuuqzweja5xz8s", "orden": 1}, {"id": "tmuur0li0b3lzvo", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuuqzweja5xz8s", "orden": 2}, {"id": "tmuur0qthvgleve", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuuqzweja5xz8s", "orden": 3}, {"id": "tmuur0vwma3e80v", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuuqzweja5xz8s", "orden": 4}, {"id": "tmuur10tq0up951", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuuqzweja5xz8s", "orden": 5}, {"id": "tmuur15qjfpin1r", "nivel": 4, "nombre": "Emboquillado de Piedra D=0.20m, asentada con Concreto F'c= 175Kg/cm2", "padre": "tmuuqzweja5xz8s", "orden": 6}, {"id": "tmuuruz1xz57ths", "nivel": 2, "nombre": "MOVIMIENTO DE TIERRAS", "padre": null, "frente": "ADICIONAL 15 \"(REHABILITACIÒN PAÑOS CANAL NUEVO MAGDALENA)\"", "orden": 0}, {"id": "tmuurv8qjegbdcw", "nivel": 3, "nombre": "Demolición de Estructuras Dañadas", "padre": "tmuuruz1xz57ths", "orden": 0}, {"id": "tmuurvfqlxtnda8", "nivel": 3, "nombre": "Corte en material No Clasificado con Maquinaria", "padre": "tmuuruz1xz57ths", "orden": 1}, {"id": "tmuurww9rjsrdam", "nivel": 3, "nombre": "Relleno y Compactación de solera y berma de canal con material de prestamo", "padre": "tmuuruz1xz57ths", "orden": 2}, {"id": "tmuurx4o8oclhzj", "nivel": 3, "nombre": "Relleno y Compactación de talud de canal con material de prestamo", "padre": "tmuuruz1xz57ths", "orden": 3}, {"id": "tmuurxl72c9yuv5", "nivel": 3, "nombre": "Perfilado y Refine de Caja en Canal Existente", "padre": "tmuuruz1xz57ths", "orden": 4}, {"id": "tmuuryad45yzoll", "nivel": 3, "nombre": "Eliminación de Material excedente a Botadero N°01", "padre": "tmuuruz1xz57ths", "orden": 5}, {"id": "tmuus1c09rl6ljh", "nivel": 2, "nombre": "OBRAS DE CONCRETO", "padre": null, "frente": "ADICIONAL 15 \"(REHABILITACIÒN PAÑOS CANAL NUEVO MAGDALENA)\"", "orden": 1}, {"id": "tmuus1imffheava", "nivel": 3, "nombre": "Encofrado y Desencofrado con Cerchas - Tipo I", "padre": "tmuus1c09rl6ljh", "orden": 0}, {"id": "tmuus1or5jjcmf4", "nivel": 3, "nombre": "Concreto F'c= 175 Kg/cm2", "padre": "tmuus1c09rl6ljh", "orden": 1}, {"id": "tmuut4ja2n820a6", "nivel": 2, "nombre": "MOVIMIENTO DE TIERRAS", "padre": null, "frente": "REHABILITACION CANAL LOS MACOS", "orden": 0}, {"id": "tmuut4sm1sehwhs", "nivel": 2, "nombre": "OBRAS DE CONCRETO", "padre": null, "frente": "REHABILITACION CANAL LOS MACOS", "orden": 1}, {"id": "tmuut513d45teo8", "nivel": 2, "nombre": "OBRAS DE ARTE", "padre": null, "frente": "REHABILITACION CANAL LOS MACOS", "orden": 2}, {"id": "tmuut5fxco5a8n7", "nivel": 3, "nombre": "Corte en material No clasificado con Maquinaria Liviana", "padre": "tmuut4ja2n820a6", "orden": 0}, {"id": "tmuut5msj8lvo8j", "nivel": 3, "nombre": "Relleno y Compactación con Material Propio Seleccionado en Canal Existente", "padre": "tmuut4ja2n820a6", "orden": 1}, {"id": "tmuut5srkmm4odo", "nivel": 3, "nombre": "Perfilado y Refine de Caja en Canal Existente", "padre": "tmuut4ja2n820a6", "orden": 2}, {"id": "tmuut5y6ur4jc7w", "nivel": 3, "nombre": "Eliminación de Material excedente", "padre": "tmuut4ja2n820a6", "orden": 3}, {"id": "tmuut67r2x13b2m", "nivel": 3, "nombre": "Encofrado y Desencofrado con Cerchas - Tipo I", "padre": "tmuut4sm1sehwhs", "orden": 0}, {"id": "tmuut6jgr3c1wcx", "nivel": 3, "nombre": "Concreto F'c= 175 Kg/cm2", "padre": "tmuut4sm1sehwhs", "orden": 1}, {"id": "tmuut6ugcw7bc7o", "nivel": 3, "nombre": "TOMAS LATERALES", "padre": "tmuut513d45teo8", "orden": 0}, {"id": "tmuut70i0fhnkcx", "nivel": 4, "nombre": "Excavación Manual para Estructuras", "padre": "tmuut6ugcw7bc7o", "orden": 0}, {"id": "tmuut7ctohhtvf9", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuut6ugcw7bc7o", "orden": 1}, {"id": "tmuut7iuiydklmk", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuut6ugcw7bc7o", "orden": 2}, {"id": "tmuut7sv5iiije6", "nivel": 4, "nombre": "Concreto F'c= 175 Kg/cm2", "padre": "tmuut6ugcw7bc7o", "orden": 3}, {"id": "tmuut8ly9pkfy18", "nivel": 4, "nombre": "COMPUERTA METALICA 0.40x0.50 DE 1/8\" CON VOLANTE", "padre": "tmuut6ugcw7bc7o", "orden": 4}, {"id": "tmuuwys5fk42v9x", "nivel": 2, "nombre": "OBRAS DE ARTE", "padre": null, "frente": "REHABILITACION CANAL LA VARIANTE", "orden": 2}, {"id": "tmuuwzml0qo2pq2", "nivel": 3, "nombre": "CAIDA VERTICAL 01", "padre": "tmuuwys5fk42v9x", "orden": 0}, {"id": "tmuux03ceu1f780", "nivel": 3, "nombre": "CAIDA VERTICAL 02", "padre": "tmuuwys5fk42v9x", "orden": 1}, {"id": "tmuux06uiv5s89a", "nivel": 3, "nombre": "CAIDA VERTICAL 03", "padre": "tmuuwys5fk42v9x", "orden": 2}, {"id": "tmuux0akzf06n02", "nivel": 3, "nombre": "CAIDA VERTICAL 04", "padre": "tmuuwys5fk42v9x", "orden": 3}, {"id": "tmuux0dxy8w71vi", "nivel": 3, "nombre": "CAIDA VERTICAL 05", "padre": "tmuuwys5fk42v9x", "orden": 4}, {"id": "tmuux0hhwtsne37", "nivel": 3, "nombre": "CAIDA VERTICAL 06", "padre": "tmuuwys5fk42v9x", "orden": 5}, {"id": "tmuux0lgr0zc8f2", "nivel": 3, "nombre": "CAIDA VERTICAL 07", "padre": "tmuuwys5fk42v9x", "orden": 6}, {"id": "tmuux0q0jk9qpuy", "nivel": 3, "nombre": "CAIDA VERTICAL 08", "padre": "tmuuwys5fk42v9x", "orden": 7}, {"id": "tmuux513ouq3zhy", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuuwzml0qo2pq2", "orden": 0}, {"id": "tmuux5761ey2025", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuuwzml0qo2pq2", "orden": 1}, {"id": "tmuux5ofx0jc3r6", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuuwzml0qo2pq2", "orden": 2}, {"id": "tmuux5wv0r6olwp", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuuwzml0qo2pq2", "orden": 3}, {"id": "tmuux639gahrkp0", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuuwzml0qo2pq2", "orden": 4}, {"id": "tmuux69nvcntnz2", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuuwzml0qo2pq2", "orden": 5}, {"id": "tmuux6sfkjl4tdm", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuux03ceu1f780", "orden": 0}, {"id": "tmuux6xjexqoejn", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuux03ceu1f780", "orden": 1}, {"id": "tmuux74fh72azef", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuux03ceu1f780", "orden": 2}, {"id": "tmuux7c21a2bc6i", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuux03ceu1f780", "orden": 3}, {"id": "tmuux7ipf9l1ahf", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuux03ceu1f780", "orden": 4}, {"id": "tmuux7ox2m0cfy5", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuux03ceu1f780", "orden": 5}, {"id": "tmuuxdmlf0b5520", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuux06uiv5s89a", "orden": 0}, {"id": "tmuuxdrw4o8v9be", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuux06uiv5s89a", "orden": 1}, {"id": "tmuuxdxnlhcfefs", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuux06uiv5s89a", "orden": 2}, {"id": "tmuuxe45tn8r5he", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuux06uiv5s89a", "orden": 3}, {"id": "tmuuxe9dln6w3ka", "nivel": 4, "nombre": "Encofrado y Desencofrado Norma", "padre": "tmuux06uiv5s89a", "orden": 4}, {"id": "tmuuxeer1mavtyl", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuux06uiv5s89a", "orden": 5}, {"id": "tmuuxf55vsruwap", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuux0akzf06n02", "orden": 0}, {"id": "tmuuxfap1qu3o2v", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuux0akzf06n02", "orden": 1}, {"id": "tmuuxfg1boaxltr", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuux0akzf06n02", "orden": 2}, {"id": "tmuuxfldjksfg2l", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuux0akzf06n02", "orden": 3}, {"id": "tmuuxfrqo7jdz60", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuux0akzf06n02", "orden": 4}, {"id": "tmuuxfxc5vackxi", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuux0akzf06n02", "orden": 5}, {"id": "tmuuxg5z6jyxak2", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuux0dxy8w71vi", "orden": 0}, {"id": "tmuuxgf1az2c03v", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuux0dxy8w71vi", "orden": 1}, {"id": "tmuuxgky5136gwy", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuux0dxy8w71vi", "orden": 2}, {"id": "tmuuxgrg6ebbkh5", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuux0dxy8w71vi", "orden": 3}, {"id": "tmuuxgx3wlbsfoi", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuux0dxy8w71vi", "orden": 4}, {"id": "tmuuxh2kef70hn0", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuux0dxy8w71vi", "orden": 5}, {"id": "tmuuxhct6o61f5b", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuux0hhwtsne37", "orden": 0}, {"id": "tmuuxhlzxy6ktkv", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuux0hhwtsne37", "orden": 1}, {"id": "tmuuxhs18c519h2", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuux0hhwtsne37", "orden": 2}, {"id": "tmuuxhxcoj4oyp2", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuux0hhwtsne37", "orden": 3}, {"id": "tmuuxi33cw5u71l", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuux0hhwtsne37", "orden": 4}, {"id": "tmuuxj0z5exkd1n", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuux0hhwtsne37", "orden": 5}, {"id": "tmuuxjbxrihmx1x", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuux0lgr0zc8f2", "orden": 0}, {"id": "tmuuxjgwspgglrn", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuux0lgr0zc8f2", "orden": 1}, {"id": "tmuuxjlgltd5a7c", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuux0lgr0zc8f2", "orden": 2}, {"id": "tmuuxjrwbv23frj", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuux0lgr0zc8f2", "orden": 3}, {"id": "tmuuxjyg9mup47i", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuux0lgr0zc8f2", "orden": 4}, {"id": "tmuuxk3epq6h6rw", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuux0lgr0zc8f2", "orden": 5}, {"id": "tmuuxlqk7cmm8jo", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuux0q0jk9qpuy", "orden": 0}, {"id": "tmuuxluxlaekk82", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuux0q0jk9qpuy", "orden": 1}, {"id": "tmuuxlzszwjmwnm", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuux0q0jk9qpuy", "orden": 2}, {"id": "tmuuxm85c3rvu12", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuux0q0jk9qpuy", "orden": 3}, {"id": "tmuuxmeaz147exg", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuux0q0jk9qpuy", "orden": 4}, {"id": "tmuuxmkzdwp3ih2", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuux0q0jk9qpuy", "orden": 5}, {"id": "tmuuy60fx58t0ex", "nivel": 2, "nombre": "MOVIMIENTO DE TIERRAS", "padre": null, "frente": "REHABILITACION CANAL LA VARIANTE", "orden": 0}, {"id": "tmuuy6d1vmdndjj", "nivel": 3, "nombre": "Perfilado y Refine de Caja en Canal Existente", "padre": "tmuuy60fx58t0ex", "orden": 0}, {"id": "tmuuy6wynk1d62v", "nivel": 2, "nombre": "OBRAS DE CONCRETO", "padre": null, "frente": "REHABILITACION CANAL LA VARIANTE", "orden": 1}, {"id": "tmuuy7h7kezqpyt", "nivel": 3, "nombre": "Encofrado y Desencofrado con Cerchas - Tipo I", "padre": "tmuuy6wynk1d62v", "orden": 0}, {"id": "tmuuy7opijbrmmq", "nivel": 3, "nombre": "Concreto F'c= 175 Kg/cm2", "padre": "tmuuy6wynk1d62v", "orden": 1}, {"id": "tmuuycyf3o7hlhv", "nivel": 2, "nombre": "MOVIMIENTO DE TIERRA", "padre": null, "frente": "ADICIONAL 08 \"CANAL VARIANTE/TL. EMPALME/ACUEDUCTO\"", "orden": 0}, {"id": "tmuuye43uffcaf6", "nivel": 3, "nombre": "RELLENO COMPACTADO CON PIEDRA CHANCADA DE 1/2\"", "padre": "tmuuycyf3o7hlhv", "orden": 0}, {"id": "tmuuyfstoj32sie", "nivel": 3, "nombre": "SUMINISTRO E INSTALACIÒN DE LLORADORES DE PVC 3\"", "padre": "tmuuycyf3o7hlhv", "orden": 1}, {"id": "tmuuz13qaemnf7w", "nivel": 3, "nombre": "RAPIDA", "padre": "tmuuwys5fk42v9x", "orden": 8}, {"id": "tmuuz1a90sqdz38", "nivel": 4, "nombre": "Excavación No Clasificado para Estructuras", "padre": "tmuuz13qaemnf7w", "orden": 0}, {"id": "tmuuz1eydb3g17j", "nivel": 4, "nombre": "Relleno y Compactación con Material Propio Seleccionado", "padre": "tmuuz13qaemnf7w", "orden": 1}, {"id": "tmuuz1ozgx63qrp", "nivel": 4, "nombre": "Solado Concreto F'c=100 Kg/cm2, e=10cm", "padre": "tmuuz13qaemnf7w", "orden": 2}, {"id": "tmuuz1w2w02jvbe", "nivel": 4, "nombre": "Acero Fy=4,200 Kg/cm2", "padre": "tmuuz13qaemnf7w", "orden": 3}, {"id": "tmuuz2878it23fl", "nivel": 4, "nombre": "Encofrado y Desencofrado Normal", "padre": "tmuuz13qaemnf7w", "orden": 4}, {"id": "tmuuz2f2bkk3imt", "nivel": 4, "nombre": "Concreto F'c= 210 Kg/cm2", "padre": "tmuuz13qaemnf7w", "orden": 5}];
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
let editId=null, curFrente=null, photos=[], nuevasFotos=[], saving=false;
let partidas=[]; // catálogo {id,nivel:2|3|4,nombre,padre}
const ELEM_SUG=["Losa","Muro","Zapata","Viga","Columna","Solado","Uña","Dentellón","Cuneta","Aleta","Tapa","Losa de fondo"];
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
    const ops=r.operarios||[];
    const cap=ops.length?`<span>Operario${ops.length>1?"s":""} <b>${esc(ops.join(", "))}</b></span>`:"";
    const pers=`<span>Cuadrilla <b>${ops.length} Op · ${Number(r.oficiales)||0} Of · ${Number(r.peones)||0} Pe = ${esc(r.personal)}</b></span>`;
    const th=(r.fotos||[]).length?`<div class="thumbs">${r.fotos.map(p=>fotoUrl[p.id]?`<img src="${fotoUrl[p.id]}" alt="Foto del frente" loading="lazy">`:"").join("")}</div>`:"";
    const chain=[pn(r,2),pn(r,3),pn(r,4)].filter(Boolean).join(" › ");
    const extra=[r.materiales?`<span>Materiales <b>${esc(r.materiales)}</b></span>`:"",r.equipos?`<span>Equipos <b>${esc(r.equipos)}</b></span>`:""].join("");
    return `<article class="rec">
      <div class="r1"><span class="fr">${esc(r.frente)}</span>${r.estructura?`<span class="pill">${esc(r.estructura)}</span>`:""}<span class="hr">${esc(r.hora||"")}</span></div>
      ${chain?`<div class="chain">${esc(chain)}</div>`:""}
      <div class="act">${esc(r.actividad)}${r.elemento?` · ${esc(r.elemento)}`:""}</div>
      ${r.descripcion?`<div class="obs">${esc(r.descripcion)}</div>`:""}
      <div class="kv">${cap}${pers}${extra}</div>
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

/* ================= formulario ================= */
function setSeg(id,v){$(id).querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===v?"true":"false"))}
function fillSuggestions(){
  const acts=[...new Set(registros.map(r=>r.actividad).filter(Boolean).concat(ACT_SUG))].slice(0,40);
  $("actList").innerHTML=acts.map(a=>`<option value="${esc(a)}">`).join("");
  const dl=(id,arr)=>$(id).innerHTML=[...new Set(arr.filter(Boolean))].slice(0,60).map(a=>`<option value="${esc(a)}">`).join("");
  dl("elemList",registros.map(r=>r.elemento).concat(ELEM_SUG));
  dl("matList",registros.map(r=>r.materiales));
  dl("equList",registros.map(r=>r.equipos));
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
  $("fTitle").textContent=curFrente;
  $("fStamp").textContent=r?"Editando":"Nuevo";
  $("fFecha").value=r?r.fecha:dia;
  $("fHora").value=r?r.hora:ahora();
  $("fAct").value=r?r.actividad:"";
  $("fDesc").value=r?(r.descripcion||""):"";
  const g=grupoDe(curFrente);
  $("estWrap").hidden=!g;
  if(g){
    $("estLbl").textContent=g.etiqueta||"Estructura";
    const cur=r?(r.estructura||""):"";
    const opts=g.items.slice(); if(cur&&!opts.includes(cur))opts.push(cur);
    $("fEstr").innerHTML='<option value="">— Elige —</option>'+opts.map(o=>`<option ${o===cur?"selected":""}>${esc(o)}</option>`).join("");
  }
  $("fElem").value=r?(r.elemento||""):"";
  $("fMat").value=r?(r.materiales||""):"";
  $("fEqu").value=r?(r.equipos||""):"";
  cerrarEdP();
  const ps=r; // parte nuevo: empieza limpio
  sel2=ps?vivo(ps.p2id):"";sel3=ps?vivo(ps.p3id):"";sel4=ps?vivo(ps.p4id):"";
  pintarPartidas();
  const src=r;
  setOps(src&&src.operarios&&src.operarios.length?src.operarios:[""]);
  $("fOfi").value=src?(Number(src.oficiales)||0):0;
  $("fPeo").value=src?(Number(src.peones)||0):0;
  updTot();
  photos=r?(r.fotos||[]).slice():[];
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
    p2id:sel2||"",p2:nombreP(sel2),p3id:sel3||"",p3:nombreP(sel3),p4id:sel4||"",p4:nombreP(sel4),
    actividad, elemento:$("fElem").value.trim(), operarios:readOps().filter(Boolean),
    oficiales:Math.max(0,parseInt($("fOfi").value)||0), peones:Math.max(0,parseInt($("fPeo").value)||0),
    personal:cuenta(), descripcion:$("fDesc").value.trim(),
    materiales:$("fMat").value.trim(), equipos:$("fEqu").value.trim(), fotos:photos.map(p=>({id:p.id})),
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


/* ================= partidas 3er / 4to / 5to orden (internamente nivel 2/3/4) ================= */
let sel2="",sel3="",sel4="";
const pById=id=>partidas.find(p=>p.id===id);
const vivo=id=>id&&pById(id)?id:"";
const nombreP=id=>{const p=pById(id);return p?p.nombre:""};
function pn(r,n){const id=r["p"+n+"id"];return nombreP(id)||r["p"+n]||""}
const selDe=n=>n===2?sel2:n===3?sel3:sel4;
function setSel(n,v){if(n===2){sel2=v;sel3="";sel4=""}else if(n===3){sel3=v;sel4=""}else sel4=v}
const padreDe=n=>n===2?null:selDe(n-1);
const hijos=n=>{const pa=padreDe(n);return partidas.filter(p=>p.nivel===n&&(n===2?p.frente===curFrente:p.padre===pa)).sort((a,b)=>(a.orden??1e9)-(b.orden??1e9))};
async function guardarCatalogo(){await IDB.put("config",{k:"partidas",v:partidas})}
function pintarPartidas(){
  [2,3,4].forEach(n=>{
    const s=$("fP"+n),pa=padreDe(n),bloq=n>2&&!pa;
    const items=bloq?[]:hijos(n);
    s.innerHTML=bloq?`<option value="">Elige primero la de ${n===3?"3er":"4to"} orden</option>`
      :`<option value="">— Sin elegir —</option>`+items.map(p=>`<option value="${esc(p.id)}" ${p.id===selDe(n)?"selected":""}>${esc(p.nombre)}</option>`).join("")+`<option value="__new">+ Nueva partida…</option>`;
    s.disabled=bloq;
    document.querySelector(`[data-edp="${n}"]`).disabled=bloq||!items.length;
  });
}
function lvl(n){return document.querySelector(`.pt-lvl[data-n="${n}"]`)}
[2,3,4].forEach(n=>{
  const s=$("fP"+n),box=lvl(n),nw=box.querySelector(".pt-new"),inp=nw.querySelector("input"),[ok,cx]=nw.querySelectorAll("button");
  s.onchange=()=>{
    if(s.value==="__new"){nw.hidden=false;inp.value="";inp.focus();s.value=selDe(n);return}
    setSel(n,s.value);pintarPartidas();
  };
  const crear=async()=>{
    const nombre=inp.value.trim();if(!nombre){inp.focus();return}
    const pa=padreDe(n);
    let p=partidas.find(x=>x.nivel===n&&(n===2?x.frente===curFrente:(x.padre||null)===(pa||null))&&x.nombre.toLowerCase()===nombre.toLowerCase());
    if(!p){const her=hijos(n);p={id:"t"+uid(),nivel:n,nombre,padre:pa||null,frente:n===2?curFrente:undefined,orden:her.length?Math.max(...her.map(x=>x.orden??0))+1:0};partidas.push(p);await guardarCatalogo()}
    nw.hidden=true;setSel(n,p.id);pintarPartidas();toast("Partida guardada: "+nombre);
  };
  ok.onclick=crear;cx.onclick=()=>{nw.hidden=true};
  inp.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();crear()}});
});
/* editor de partidas de un nivel */
function cerrarEdP(){document.querySelectorAll(".pt-ed").forEach(e=>{e.hidden=true;e.innerHTML=""});document.querySelectorAll(".pt-new").forEach(e=>e.hidden=true)}
function abrirEdP(n){
  const ed=lvl(n).querySelector(".pt-ed");
  if(!ed.hidden){cerrarEdP();return}
  cerrarEdP();
  const items=hijos(n).map(p=>({id:p.id,nombre:p.nombre,del:false}));
  const pinta=()=>{
    ed.innerHTML=`<span class="hint">Corrige el nombre, ordena con ↑ ↓ o elimina con ✕. ${n<4?"Al eliminar una partida también se quitan las de orden inferior que tiene dentro.":""} Los partes ya guardados conservan su texto.</span>`
      +(()=>{const vis=items.map((x,i)=>i).filter(i=>!items[i].del);return items.map((it,i)=>{if(it.del)return"";const k=vis.indexOf(i);
        return `<div class="row"><input value="${esc(it.nombre)}" data-i="${i}" maxlength="120" aria-label="Nombre de partida"><button type="button" class="mv" data-u="${i}" ${k===0?"disabled":""} aria-label="Subir">↑</button><button type="button" class="mv" data-d="${i}" ${k===vis.length-1?"disabled":""} aria-label="Bajar">↓</button><button type="button" data-x="${i}" aria-label="Eliminar partida">✕</button></div>`}).join("")})()
      +`<div class="f"><button type="button" class="btn" data-c>Cancelar</button><button type="button" class="btn dark" data-s>Guardar</button></div>`;
    ed.querySelectorAll("input").forEach(i=>i.oninput=()=>{items[+i.dataset.i].nombre=i.value});
    const mover=(i,d)=>{const vis=items.map((x,j)=>j).filter(j=>!items[j].del);const j=vis[vis.indexOf(i)+d];if(j==null)return;[items[i],items[j]]=[items[j],items[i]];pinta()};
    ed.querySelectorAll("[data-u]").forEach(b=>b.onclick=()=>mover(+b.dataset.u,-1));
    ed.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>mover(+b.dataset.d,1));
    ed.querySelectorAll("[data-x]").forEach(b=>b.onclick=()=>{
      if(b.dataset.armed){items[+b.dataset.x].del=true;pinta();return}
      b.dataset.armed="1";b.textContent="¿Eliminar?";setTimeout(()=>{if(b.isConnected){delete b.dataset.armed;b.textContent="✕"}},3500);
    });
    ed.querySelector("[data-c]").onclick=cerrarEdP;
    ed.querySelector("[data-s]").onclick=async()=>{
      const vivos=items.filter(x=>!x.del);
      if(vivos.some(x=>!x.nombre.trim())){toast("Hay una partida sin nombre");return}
      const ns=vivos.map(x=>x.nombre.trim().toLowerCase());if(new Set(ns).size!==ns.length){toast("Hay dos partidas con el mismo nombre");return}
      // borrar con descendientes
      const borrar=new Set(items.filter(x=>x.del).map(x=>x.id));
      let crece=true;while(crece){crece=false;for(const p of partidas)if(p.padre&&borrar.has(p.padre)&&!borrar.has(p.id)){borrar.add(p.id);crece=true}}
      partidas=partidas.filter(p=>!borrar.has(p.id));
      // renombrar y actualizar el texto guardado en los partes
      let cambiados=0;
      vivos.forEach((it,k)=>{const p=pById(it.id);if(p)p.orden=k});
      for(const it of vivos){const p=pById(it.id);const nom=it.nombre.trim();if(p&&p.nombre!==nom){p.nombre=nom;
        for(const r of registros)if(r["p"+n+"id"]===p.id){r["p"+n]=nom;await IDB.put("registros",r);cambiados++}}}
      await guardarCatalogo();
      if(borrar.has(sel2))setSel(2,"");else if(borrar.has(sel3))setSel(3,"");else if(borrar.has(sel4))setSel(4,"");
      cerrarEdP();pintarPartidas();renderList();toast("Partidas guardadas"+(cambiados?" · "+cambiados+" partes actualizados":""));
    };
  };
  pinta();ed.hidden=false;
}
document.querySelectorAll("[data-edp]").forEach(b=>b.onclick=()=>abrirEdP(+b.dataset.edp));

/* ================= frentes ================= */
$("addOk").onclick=async()=>{
  const n=$("nuevoFrente").value.trim(); if(!n)return;
  if(!frentes.includes(n)){frentes.push(n);await IDB.put("config",{k:"frentes",v:frentes})}
  $("nuevoFrente").value="";$("addrow").hidden=true;renderAll();
};
$("addCancel").onclick=()=>{$("addrow").hidden=true};

/* ---- editar / borrar / ordenar frentes ---- */
let edRows=[];
function abrirEditor(){
  edRows=frentes.map(f=>({orig:f,name:f,del:false}));
  $("fronts").hidden=true;$("addrow").hidden=true;$("frEd").hidden=false;$("edFr").hidden=true;
  $("frHint").textContent="Cambia nombres, ordena con ↑ ↓ o elimina";
  pintarEditor();
}
function cerrarEditor(){$("frEd").hidden=true;$("fronts").hidden=false;$("edFr").hidden=false;$("frHint").textContent=""}
function pintarEditor(){
  const vis=edRows.map((r,i)=>i).filter(i=>!edRows[i].del);
  $("frEdList").innerHTML=edRows.map((r,i)=>{
    if(r.del)return"";
    const k=vis.indexOf(i);
    const n=r.orig?registros.filter(x=>x.frente===r.orig).length:0;
    return `<div><div class="fr-row"><span class="n">${k+1}.</span><input value="${esc(r.name)}" data-i="${i}" maxlength="60" aria-label="Nombre del frente ${k+1}">
      <button type="button" class="ib" data-up="${i}" ${k===0?"disabled":""} aria-label="Subir">↑</button>
      <button type="button" class="ib" data-dn="${i}" ${k===vis.length-1?"disabled":""} aria-label="Bajar">↓</button>
      <button type="button" class="ib del" data-del="${i}" aria-label="Eliminar frente">✕</button></div>
      ${n?`<div class="fr-note">${n} parte${n>1?"s":""} registrado${n>1?"s":""}${r.orig!==r.name.trim()?" · se pasarán al nuevo nombre":""}</div>`:""}</div>`}).join("");
  const box=$("frEdList");
  box.querySelectorAll("input").forEach(i=>i.oninput=()=>{edRows[+i.dataset.i].name=i.value});
  box.querySelectorAll("input").forEach(i=>i.onchange=pintarEditor);
  const mover=(i,d)=>{const vis=edRows.map((r,j)=>j).filter(j=>!edRows[j].del);const k=vis.indexOf(i),j=vis[k+d];if(j==null)return;[edRows[i],edRows[j]]=[edRows[j],edRows[i]];pintarEditor()};
  box.querySelectorAll("[data-up]").forEach(b=>b.onclick=()=>mover(+b.dataset.up,-1));
  box.querySelectorAll("[data-dn]").forEach(b=>b.onclick=()=>mover(+b.dataset.dn,1));
  box.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{
    const i=+b.dataset.del;
    if(b.dataset.armed){edRows[i].del=true;pintarEditor();return}
    b.dataset.armed="1";b.textContent="¿Eliminar?";
    setTimeout(()=>{if(b.isConnected){delete b.dataset.armed;b.textContent="✕"}},3500);
  });
}
$("edFr").onclick=abrirEditor;
$("frEdCancel").onclick=cerrarEditor;
$("frEdAdd").onclick=()=>{edRows.push({orig:null,name:"",del:false});pintarEditor();const ins=$("frEdList").querySelectorAll("input");ins[ins.length-1].focus()};
$("frEdSave").onclick=async()=>{
  const vivos=edRows.filter(r=>!r.del).map(r=>({...r,name:r.name.trim()})).filter(r=>r.name||r.orig);
  if(vivos.some(r=>!r.name)){toast("Hay un frente sin nombre");return}
  const nombres=vivos.map(r=>r.name.toLowerCase());
  if(new Set(nombres).size!==nombres.length){toast("Hay dos frentes con el mismo nombre");return}
  if(!vivos.length){toast("Deja al menos un frente");return}
  try{
    let movidos=0;
    for(const r of vivos){
      if(r.orig&&r.orig!==r.name){
        for(const p of registros.filter(x=>x.frente===r.orig)){p.frente=r.name;await IDB.put("registros",p);movidos++}
        for(const g of estructuras)if(g.frente===r.orig)g.frente=r.name;
        for(const p of partidas)if(p.nivel===2&&p.frente===r.orig)p.frente=r.name;
      }
    }
    frentes=vivos.map(r=>r.name);
    await IDB.put("config",{k:"frentes",v:frentes});
    await IDB.put("config",{k:"estructuras",v:estructuras});
    await IDB.put("config",{k:"partidas",v:partidas});
    cerrarEditor();renderAll();
    toast("Frentes guardados"+(movidos?" · "+movidos+" partes actualizados":""));
    if(movidos)marcarCambios();
  }catch(e){toast("No se guardaron los cambios: "+(e.message||"error"))}
};
$("nuevoFrente").addEventListener("keydown",e=>{if(e.key==="Enter")$("addOk").click()});

/* ================= Excel ================= */
/* ===== Excel con formato (ExcelJS): centrado, medio, ajustar texto, bordes y fotos ===== */
const COLS=[["FECHA",11],["HORA",8],["LUGAR",26],["PARTIDA 3ER ORDEN",20],["PARTIDA 4TO ORDEN",24],["PARTIDA 5TO ORDEN",24],["ACTIVIDAD",18],["ELEMENTO ESTRUCTURAL",18],["APODO O NOMBRE",20],["Nº DE OPERARIOS",12],["Nº DE OFICIALES",12],["Nº DE PEONES",11],["MATERIALES",22],["EQUIPOS",22],["DESCRIPCIÓN DEL AVANCE",34],["FOTO",30]];
const FOTO_H=150; // alto de cada foto en el Excel (px)
function valores(r){
  const ops=r.operarios||[];const [y,m,d]=String(r.fecha||"").split("-").map(Number);
  return [y?new Date(Date.UTC(y,m-1,d)):r.fecha,r.hora||"",r.frente+(r.estructura?" – "+r.estructura:""),pn(r,2),pn(r,3),pn(r,4),r.actividad||"",r.elemento||"",
    ops.join("\n"),ops.length,Number(r.oficiales)||0,Number(r.peones)||0,r.materiales||"",r.equipos||"",r.descripcion||"",""];
}
function lineas(txt,ancho){ // líneas que ocupa un texto en una celda de "ancho" caracteres
  const cap=Math.max(4,Math.floor(ancho*1.05));
  return String(txt??"").split("\n").reduce((n,l)=>n+Math.max(1,Math.ceil(l.length/cap)),0);
}
async function collageFila(ids){ // todas las fotos del parte en una sola imagen, una al lado de otra
  const bmps=[];for(const id of ids){try{const rec=await IDB.get("fotos",id);if(rec)bmps.push(await createImageBitmap(rec.blob))}catch(e){}}
  if(!bmps.length)return null;
  const H=FOTO_H*2,G=12; // doble resolución para que se vea nítida
  const ws=bmps.map(b=>Math.round(b.width*H/b.height));
  const c=document.createElement("canvas");c.width=ws.reduce((s,w)=>s+w,0)+G*(bmps.length-1);c.height=H;
  const g=c.getContext("2d");g.fillStyle="#fff";g.fillRect(0,0,c.width,c.height);
  let x=0;bmps.forEach((b,i)=>{g.drawImage(b,x,0,ws[i],H);x+=ws[i]+G});
  return {b64:c.toDataURL("image/jpeg",.82).split(",")[1],w:Math.round(c.width/2),h:FOTO_H};
}
const borde={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}};
const alin={vertical:"middle",horizontal:"center",wrapText:true};
async function libro(list){
  const wb=new ExcelJS.Workbook();wb.creator="MIZUL Partes de Frente";
  const ws=wb.addWorksheet("Partes",{views:[{state:"frozen",ySplit:1}],pageSetup:{paperSize:9,orientation:"landscape",fitToPage:true,fitToWidth:1,fitToHeight:0,horizontalCentered:true}});
  const filas=list.slice().sort((a,b)=>(a.fecha+a.hora).localeCompare(b.fecha+b.hora));
  // fotos primero, para saber el ancho de la columna FOTO
  const fotosFila=[];for(const r of filas)fotosFila.push(await collageFila((r.fotos||[]).map(p=>p.id)));
  const anchoFotoPx=Math.max(160,...fotosFila.map(f=>f?f.w+14:0));
  ws.columns=COLS.map(([h,w],i)=>({header:h,width:i===15?Math.ceil((anchoFotoPx-5)/7):w}));
  const hd=ws.getRow(1);hd.height=Math.max(...COLS.map(([h,w])=>lineas(h,w)))*15+8;
  hd.eachCell(c=>{c.font={bold:true,color:{argb:"FFFFFFFF"}};c.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FF1F4D3A"}};c.alignment=alin;c.border=borde});
  filas.forEach((r,i)=>{
    const row=ws.addRow(valores(r));
    row.getCell(1).numFmt="d/mm/yyyy";
    row.eachCell({includeEmpty:true},c=>{c.alignment=alin;c.border=borde});
    const txtH=Math.max(...valores(r).map((v,k)=>k===15?1:lineas(v instanceof Date?"00/00/0000":v,COLS[k][1])))*15+8;
    const f=fotosFila[i];row.height=Math.max(txtH,f?(f.h+14)*0.75:0);
    if(f){ // centrada dentro de la celda FOTO (el desplazamiento es fracción de la celda)
      const colPx=ws.getColumn(16).width*7+5,rowPx=row.height/0.75;
      const dx=Math.max(2,(colPx-f.w)/2),dy=Math.max(2,(rowPx-f.h)/2);
      const img=wb.addImage({base64:f.b64,extension:"jpeg"});
      ws.addImage(img,{tl:{col:15+Math.min(.95,dx/colPx),row:row.number-1+Math.min(.95,dy/rowPx)},ext:{width:f.w,height:f.h},editAs:"oneCell"});
    }
  });
  // Resumen por frente
  const rs=wb.addWorksheet("Resumen");
  rs.columns=[["FECHA",11],["LUGAR",30],["PARTES",9],["OPERARIOS (MÁX.)",12],["OFICIALES (MÁX.)",12],["PEONES (MÁX.)",12],["TOTAL (MÁX.)",11]].map(([h,w])=>({header:h,width:w}));
  rs.getRow(1).height=32;rs.getRow(1).eachCell(c=>{c.font={bold:true,color:{argb:"FFFFFFFF"}};c.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FF1F4D3A"}};c.alignment=alin;c.border=borde});
  const res={};filas.forEach(r=>{const k=r.fecha+"|"+r.frente;const x=res[k]=res[k]||{f:r.fecha,l:r.frente,n:0,o:0,of:0,p:0,t:0};x.n++;x.o=Math.max(x.o,(r.operarios||[]).length);x.of=Math.max(x.of,Number(r.oficiales)||0);x.p=Math.max(x.p,Number(r.peones)||0);x.t=Math.max(x.t,Number(r.personal)||0)});
  Object.values(res).forEach(x=>{const [y,m,d]=x.f.split("-").map(Number);const row=rs.addRow([new Date(Date.UTC(y,m-1,d)),x.l,x.n,x.o,x.of,x.p,x.t]);row.getCell(1).numFmt="d/mm/yyyy";row.height=Math.max(lineas(x.l,30)*15+8,20);row.eachCell(c=>{c.alignment=alin;c.border=borde})});
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
  if(!window.ExcelJS){toast("No se cargó el generador de Excel. Abre la app con internet una vez y vuelve a intentar.",4000);return}
  toast("Preparando Excel…",8000);
  const buf=await (await libro(list)).xlsx.writeBuffer();
  const blob=new Blob([buf],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
  await compartirODescargar(blob,nombre+".xlsx","Partes de frente",compartir);
}

/* ===== Word (docx): tabla horizontal A4 con fotos en alta calidad ===== */
const WCOLS=[["FECHA",1.5],["HORA",1.0],["LUGAR",2.4],["PARTIDA 3ER ORDEN",1.5],["PARTIDA 4TO ORDEN",1.8],["PARTIDA 5TO ORDEN",1.8],["ACTIVIDAD",1.5],["ELEMENTO ESTRUCTURAL",1.6],["APODO O NOMBRE",1.8],["Nº DE OPERARIOS",1.2],["Nº DE OFICIALES",1.2],["Nº DE PEONES",1.2],["MATERIALES",1.5],["EQUIPOS",1.4],["DESCRIPCIÓN DEL AVANCE",2.0],["FOTO",4.0]];
const CM=567; // twips por cm
function fechaTxt(f){const [y,m,d]=String(f||"").split("-");return y?`${+d}/${m}/${y}`:f}
async function documentoWord(list,titulo){
  const D=window.docx;
  const filas=list.slice().sort((a,b)=>(a.fecha+a.hora).localeCompare(b.fecha+b.hora));
  const parrafo=(txt,o={})=>{const ls=String(txt??"").split("\n");
    return new D.Paragraph({alignment:D.AlignmentType.CENTER,spacing:{before:0,after:0},children:ls.map((l,i)=>new D.TextRun({text:l,break:i?1:0,size:o.size||14,bold:!!o.bold,color:o.color,font:"Calibri"}))})};
  const borde={style:D.BorderStyle.SINGLE,size:4,color:"000000"};
  const bordes={top:borde,bottom:borde,left:borde,right:borde};
  const celda=(children,w,o={})=>new D.TableCell({children,width:{size:Math.round(w*CM),type:D.WidthType.DXA},verticalAlign:D.VerticalAlign.CENTER,borders:bordes,
    margins:{top:40,bottom:40,left:50,right:50},shading:o.fill?{fill:o.fill,type:D.ShadingType.CLEAR,color:"auto"}:undefined});
  const head=new D.TableRow({tableHeader:true,cantSplit:true,children:WCOLS.map(([h,w])=>celda([parrafo(h,{bold:true,color:"FFFFFF",size:w<=1.2?11:12})],w,{fill:"1F4D3A"}))});
  const anchoFotoPx=Math.round((4.0-0.25)/2.54*96); // ancho de la foto dentro de la celda
  const rows=[head];
  for(const r of filas){
    const ops=r.operarios||[];
    const vals=[fechaTxt(r.fecha),r.hora||"",r.frente+(r.estructura?" – "+r.estructura:""),pn(r,2),pn(r,3),pn(r,4),r.actividad||"",r.elemento||"",ops.join("\n"),ops.length,Number(r.oficiales)||0,Number(r.peones)||0,r.materiales||"",r.equipos||"",r.descripcion||""];
    const fotos=[];
    for(const p of r.fotos||[]){try{const rec=await IDB.get("fotos",p.id);if(!rec)continue;const bmp=await createImageBitmap(rec.blob);
      fotos.push(new D.Paragraph({alignment:D.AlignmentType.CENTER,spacing:{before:30,after:30},children:[new D.ImageRun({data:await rec.blob.arrayBuffer(),transformation:{width:anchoFotoPx,height:Math.round(anchoFotoPx*bmp.height/bmp.width)}})]}))}catch(e){}}
    rows.push(new D.TableRow({cantSplit:true,children:vals.map((v,i)=>celda([parrafo(v)],WCOLS[i][1])).concat([celda(fotos.length?fotos:[parrafo("")],WCOLS[15][1])])}));
  }
  const doc=new D.Document({creator:"MIZUL Partes de Frente",sections:[{
    properties:{page:{size:{orientation:D.PageOrientation.LANDSCAPE},margin:{top:CM,bottom:CM,left:CM,right:CM}}},
    children:[new D.Paragraph({alignment:D.AlignmentType.CENTER,spacing:{after:120},children:[new D.TextRun({text:titulo,bold:true,size:26,font:"Calibri"})]}),
      new D.Table({rows,width:{size:WCOLS.reduce((s,c)=>s+c[1],0)*CM,type:D.WidthType.DXA},columnWidths:WCOLS.map(c=>Math.round(c[1]*CM)),layout:D.TableLayoutType.FIXED})]
  }]});
  return D.Packer.toBlob(doc);
}
async function exportarWord(list,nombre,titulo){
  if(!list.length){toast("No hay partes para exportar");return}
  if(!window.docx){toast("No se cargó el generador de Word. Abre la app con internet una vez y vuelve a intentar.",4000);return}
  toast("Preparando Word…",8000);
  try{const blob=await documentoWord(list,titulo);await compartirODescargar(blob,nombre+".docx","Partes de frente",false)}
  catch(e){toast("No se pudo crear el Word: "+(e.message||"error"),4000)}
}
$("wordDia").onclick=()=>exportarWord(delDia(),"Partes_"+dia,"REPORTE DE PARTES DE FRENTE – "+fechaTxt(dia));
$("wordTodo").onclick=()=>exportarWord(registros,"Partes_completo_"+hoy(),"REPORTE DE PARTES DE FRENTE – COMPLETO");
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
    const out={app:"mizul-partes",version:1,creado:new Date().toISOString(),frentes,estructuras,partidas,registros,fotos:[]};
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
    if(Array.isArray(data.partidas)){for(const p of data.partidas)if(!partidas.find(x=>x.id===p.id))partidas.push(p);await IDB.put("config",{k:"partidas",v:partidas})}
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
  registros=await IDB.all("registros");
  if(!get("partidas")){
    // instalación anterior a las partidas: se cargan los frentes, tomas laterales y partidas de MIZUL
    frentes=DEFAULT_FRENTES.slice();estructuras=JSON.parse(JSON.stringify(DEFAULT_ESTR));partidas=JSON.parse(JSON.stringify(DEFAULT_PARTIDAS));
    await IDB.put("config",{k:"frentes",v:frentes});await IDB.put("config",{k:"estructuras",v:estructuras});await IDB.put("config",{k:"partidas",v:partidas});
  }else{
    frentes=get("frentes")||DEFAULT_FRENTES.slice();
    estructuras=get("estructuras")||DEFAULT_ESTR.slice();
    partidas=get("partidas");
  }
  // cada frente tiene sus propias partidas: las de 3er orden sin frente se asignan al frente donde se usaron
  let mig=false;
  for(const p of partidas)if(p.nivel===2&&!p.frente){
    const r=registros.find(x=>x.p2id===p.id);
    p.frente=r?r.frente:(frentes.find(f=>/DERIVADOR/i.test(f))||frentes[0]);mig=true;
  }
  if(mig)await IDB.put("config",{k:"partidas",v:partidas});
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

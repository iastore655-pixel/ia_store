var WA="213671898976";
var ORDER_URL="";
var SH={t:"M35 10 10 24l9 20 10-4v50h42V40l10 4 9-20-25-14c-3 8-9 12-15 12s-12-4-15-12z",c:"M38 8 10 24l9 20 10-4v52h42V40l10 4 9-20L62 8 50 30z",p:"M30 8h40l6 84H54L50 40l-4 52H24z",s:"M8 58c10 0 18-4 24-14l8 6c6 4 14 4 20 2l22 12c6 3 10 8 10 14H8z"};
var ARG={"all": "images/argyle-tous-les-coloris.jpg", "v": [{"c": "Vert olive", "h": "#4a5a3c", "i": "images/argyle-vert-olive.jpg"}, {"c": "Marron", "h": "#4a2a14", "i": "images/argyle-marron.jpg"}, {"c": "Noir et gris", "h": "#1a1a1d", "i": "images/argyle-noir-et-gris.jpg"}, {"c": "Bleu ciel", "h": "#9fc2e8", "i": "images/argyle-bleu-ciel.jpg"}, {"c": "Bordeaux", "h": "#7a1f33", "i": "images/argyle-bordeaux.jpg"}, {"c": "Marine", "h": "#16264a", "i": "images/argyle-marine.jpg"}]};
var KNIT=[{"c": "Marron", "h": "#4a2a14", "i": "images/knit-polo-marron.jpg"}, {"c": "Écru", "h": "#efe7d2", "i": "images/knit-polo-ecru.jpg"}, {"c": "Marine", "h": "#16264a", "i": "images/knit-polo-marine.jpg"}, {"c": "Noir", "h": "#222222", "i": "images/knit-polo-noir.jpg"}, {"c": "Vert kaki", "h": "#6d7b5c", "i": "images/knit-polo-vert-kaki.jpg"}, {"c": "Bordeaux", "h": "#6e1226", "i": "images/knit-polo-bordeaux.jpg"}];
var ZIP=[{"c": "Écru", "h": "#efe7d2", "i": "images/half-zipper-ecru.jpg"}, {"c": "Bordeaux", "h": "#6e1226", "i": "images/half-zipper-bordeaux.jpg"}, {"c": "Marine", "h": "#16264a", "i": "images/half-zipper-marine.jpg"}, {"c": "Noir", "h": "#222222", "i": "images/half-zipper-noir.jpg"}];
var TR=[{"c": "Vert olive", "h": "#4a5a3c", "i": "images/trench-coat-vert-olive.jpg"}, {"c": "Marine", "h": "#1f2c4d", "i": "images/trench-coat-marine.jpg"}, {"c": "Marron", "h": "#5b4129", "i": "images/trench-coat-marron.jpg"}, {"c": "Noir", "h": "#222222", "i": "images/trench-coat-noir.jpg"}, {"c": "Beige", "h": "#d3c4a8", "i": "images/trench-coat-beige.jpg"}, {"c": "Gris clair", "h": "#bfc2c6", "i": "images/trench-coat-gris-clair.jpg"}];
var JE=[{"c": "Bleu", "h": "#2f5d8a", "i": "images/regular-jeans-bleu.jpg"}, {"c": "Anthracite", "h": "#34353b", "i": "images/regular-jeans-anthracite.jpg"}, {"c": "Gris", "h": "#8e9096", "i": "images/regular-jeans-gris.jpg"}, {"c": "Noir", "h": "#111111", "i": "images/regular-jeans-noir.jpg"}];
var LJ=[{"c": "Noir", "h": "#222222", "i": "images/leather-jacket-noir.jpg"}, {"c": "Marron", "h": "#4a2c1e", "i": "images/leather-jacket-marron.jpg"}, {"c": "Blanc cassé", "h": "#efe9dc", "i": "images/leather-jacket-blanc-casse.jpg"}];
var P=[
{n:"Pull Argyle 27",c:"Polo old money",p:5900,sz:["S","M","L","XL"],col:"#4a5a3c",k:"t",v:ARG.v,all:ARG.all},
{n:"Knit Polo Old Money",c:"Polo old money",p:5300,col:"#4a2a14",k:"t",v:KNIT},
{n:"Half Zipper Old Money",c:"Polo old money",p:5800,sz:["S","M","L","XL"],col:"#6e1226",k:"t",v:ZIP},
{n:"Leather Jacket 27",c:"Vestes",p:9800,sz:["S","M","L","XL"],col:"#222222",k:"c",v:LJ},
{n:"Luxury Trench Coat",c:"Manteaux",p:14500,sz:["S","M","L","XL","XXL","XXXL"],col:"#4a5a3c",k:"c",v:TR},
{n:"Regular Jeans 27",c:"Pantalons",p:5500,sz:["29","30","31","32","33","34","36"],col:"#2f5d8a",k:"p",v:JE},
];
var IMG={},AS=null,DB=null;
var DEF={"cat:Pantalons":"images/categorie-pantalons.jpg"};
var COAT="images/categorie-manteaux.jpg";DEF["cat:Manteaux"]=COAT;DEF["cat:Chaussures"]="images/categorie-chaussures.jpg";DEF["cat:T-shirts"]="images/categorie-t-shirts.jpg";DEF["cat:Polo old money"]="images/categorie-polo-old-money.jpg";DEF["cat:Chemises"]="images/categorie-chemises.jpg";DEF["cat:Vestes"]="images/categorie-vestes.jpg";DEF["Trench olive ceinturé"]=COAT;
var cats=["Tout","Chemises","T-shirts","Polo old money","Vestes","Manteaux","Pantalons","Chaussures"],cur="Tout",q="",cart=[];
var ICON={Chemises:"c","T-shirts":"t","Polo old money":"t",Vestes:"c",Manteaux:"c",Pantalons:"p",Chaussures:"s"};
function fmt(x){return x.toLocaleString("fr-FR")+" DA"}
function go(c){cur=c;tools();grid();document.getElementById("shop").scrollIntoView()}
function img(key,alt,svgKey){return IMG[key]?'<img src="/_blob/'+IMG[key]+'" alt="'+alt+'">':DEF[key]?'<img src="'+DEF[key]+'" alt="'+alt+'">':'<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="'+SH[svgKey]+'"/></svg>'}
function upl(key){
 if(!AS)return null;
 var l=document.createElement("label");l.className="up";l.textContent="Changer la photo";
 var f=document.createElement("input");f.type="file";f.accept="image/*";f.hidden=true;
 f.onchange=function(){if(f.files[0])save(key,f.files[0])};l.appendChild(f);return l}
function shrink(file){return createImageBitmap(file).then(function(b){var k=Math.min(1,1000/Math.max(b.width,b.height)),c=document.createElement("canvas");c.width=b.width*k;c.height=b.height*k;c.getContext("2d").drawImage(b,0,0,c.width,c.height);return new Promise(function(r){c.toBlob(r,"image/jpeg",.85)})})}
function save(key,file){
 shrink(file).then(function(bl){return AS.upload(bl,{type:"image/jpeg"})}).then(function(r){
  IMG[key]=r.id;gates();grid();
  if(DB)DB.doc("config/images").set(IMG).catch(function(){});
 }).catch(function(){toastMsg("Échec de l’envoi de la photo")})}
function toastMsg(t){alert(t)}
function gates(){
 var g=document.getElementById("gates");g.innerHTML="";
 cats.slice(1).forEach(function(c){
  var n=P.filter(function(x){return x.c===c}).length;
  var w=document.createElement("div");w.className="gw";
  var b=document.createElement("button");b.className="gate";
  b.innerHTML=img("cat:"+c,c,ICON[c])+'<b>'+c+'</b><small>'+(n?n+' article'+(n>1?'s':''):'Bientôt')+'</small>';
  b.onclick=function(){go(c)};w.appendChild(b);
  var u=upl("cat:"+c);if(u)w.appendChild(u);g.appendChild(w)});
}
function tools(){
 var t=document.getElementById("tools");t.innerHTML="";
 cats.forEach(function(c){var b=document.createElement("button");b.className="f";b.textContent=c;b.setAttribute("aria-pressed",c===cur);b.onclick=function(){cur=c;tools();grid()};t.appendChild(b)});
 var i=document.createElement("input");i.type="search";i.placeholder="Rechercher un article";i.setAttribute("aria-label","Recherche");i.value=q;
 i.oninput=function(){q=i.value;grid()};t.appendChild(i);
}
function variantCard(x,d,sizes){
 var sel=x.all?-1:0,off=x.all?1:0;
 d.innerHTML='<div class="pic" style="background:#f1f1ee"><img alt="'+x.n+'" src="'+(x.all||x.v[0].i)+'"></div><div class="info"><b>'+x.n+'</b><small>'+x.c+'</small><div class="sw"></div><small class="cn">Tous les coloris</small><div class="row"><span class="price">'+fmt(x.p)+'</span><select aria-label="Taille">'+sizes.map(function(s){return "<option>"+s+"</option>"}).join("")+'</select></div><div class="row"><button class="add">Ajouter au panier</button></div><span class="warn" aria-live="polite"></span></div>';
 var im=d.querySelector(".pic img"),cn=d.querySelector(".cn"),w=d.querySelector(".warn"),sw=d.querySelector(".sw"),bs=[];
 function pick(i){sel=i;im.src=i<0?x.all:x.v[i].i;cn.textContent=i<0?"Tous les coloris":x.v[i].c;w.textContent="";bs.forEach(function(b,j){b.setAttribute("aria-pressed",j===i+off)})}
 if(x.all){var a=document.createElement("button");a.className="all";a.textContent="Tous";a.onclick=function(){pick(-1)};sw.appendChild(a);bs.push(a)}
 x.v.forEach(function(v,i){var b=document.createElement("button");b.style.background=v.h;b.setAttribute("aria-label",v.c);b.onclick=function(){pick(i)};sw.appendChild(b);bs.push(b)});
 pick(sel);
 d.querySelector(".add").onclick=function(){
  if(sel<0){w.textContent="Choisissez un coloris";return}
  cart.push({n:x.n+" ("+x.v[sel].c+")",p:x.p,s:d.querySelector("select").value});sync();document.getElementById("panel").classList.add("open")};
}
function grid(){
 var g=document.getElementById("grid");g.innerHTML="";
 var L=P.filter(function(x){return (cur==="Tout"||x.c===cur)&&x.n.toLowerCase().indexOf(q.trim().toLowerCase())>-1});
 if(!L.length){g.innerHTML='<p class="empty">'+(q.trim()?"Aucun article ne correspond.":"Bientôt disponible.")+'</p>';return}
 L.forEach(function(x){
  var sizes=x.sz||(x.k==="s"?["40","41","42","43","44"]:["S","M","L","XL","XXL"]);
  var d=document.createElement("article");d.className="card";
  if(x.v){variantCard(x,d,sizes);g.appendChild(d);return}
  d.innerHTML='<div class="pic" style="background:#f1f1ee;color:'+x.col+'">'+img(x.n,x.n,x.k)+'</div>'+
  '<div class="info"><b>'+x.n+'</b><small>'+x.c+'</small><div class="row"><span class="price">'+fmt(x.p)+'</span>'+
  '<select aria-label="Taille">'+sizes.map(function(s){return "<option>"+s+"</option>"}).join("")+'</select></div>'+
  '<div class="row"><button class="add">Ajouter au panier</button></div></div>';
  d.querySelector(".add").onclick=function(){cart.push({n:x.n,p:x.p,s:d.querySelector("select").value});sync();document.getElementById("panel").classList.add("open")};
  var u=upl(x.n);if(u)d.querySelector(".pic").appendChild(u);
  g.appendChild(d)});
}
function sync(){
 document.getElementById("n").textContent=cart.length;
 var it=document.getElementById("items");it.innerHTML="";
 if(!cart.length)it.innerHTML='<p class="empty">Votre panier est vide. Ajoutez un article pour commencer.</p>';
 cart.forEach(function(c,i){var r=document.createElement("div");r.className="it";r.innerHTML="<span>"+c.n+" – "+c.s+"<br>"+fmt(c.p)+"</span>";
  var b=document.createElement("button");b.textContent="Retirer";b.onclick=function(){cart.splice(i,1);sync()};r.appendChild(b);it.appendChild(r)});
 var sum=cart.reduce(function(a,c){return a+c.p},0);
 document.getElementById("total").textContent=cart.length?"Sous-total : "+fmt(sum):"";
 document.getElementById("go").style.visibility=cart.length?"visible":"hidden";
}
document.getElementById("open").onclick=function(){document.getElementById("panel").classList.add("open")};
document.getElementById("close").onclick=function(){document.getElementById("panel").classList.remove("open")};
var CO=document.getElementById("co"),DONE=document.getElementById("done");
var WIL="Adrar,Chlef,Laghouat,Oum El Bouaghi,Batna,Béjaïa,Biskra,Béchar,Blida,Bouira,Tamanrasset,Tébessa,Tlemcen,Tiaret,Tizi Ouzou,Alger,Djelfa,Jijel,Sétif,Saïda,Skikda,Sidi Bel Abbès,Annaba,Guelma,Constantine,Médéa,Mostaganem,M’Sila,Mascara,Ouargla,Oran,El Bayadh,Illizi,Bordj Bou Arréridj,Boumerdès,El Tarf,Tindouf,Tissemsilt,El Oued,Khenchela,Souk Ahras,Tipaza,Mila,Aïn Defla,Naâma,Aïn Témouchent,Ghardaïa,Relizane,Timimoun,Bordj Badji Mokhtar,Ouled Djellal,Béni Abbès,In Salah,In Guezzam,Touggourt,Djanet,El M’Ghair,El Meniaa,Aflou,Barika,El Kantara,Bir El Ater,El Aricha,Ksar Chellala,Aïn Oussera,Messaad,Ksar El Boukhari,Boussaâda,El Abiodh Sidi Cheikh".split(",");
// Communes are loaded from a public dataset (1,541 communes; 69-wilaya structure).
var COM={},COMMUNES_READY=false;
var COMMUNES_URL="https://raw.githubusercontent.com/wadiemendja/algeria-communes-wilayas/main/algeria-communes-69-wilayas.json";
function loadCommunes(){
 fetch(COMMUNES_URL).then(function(r){if(!r.ok)throw new Error("HTTP "+r.status);return r.json()}).then(function(rows){
  var next={}; rows.forEach(function(x){var code=String(parseInt(x.wilaya_code,10));(next[code]||(next[code]=[])).push(x.commune_name_ascii)});
  Object.keys(next).forEach(function(k){next[k]=Array.from(new Set(next[k])).sort(function(a,b){return a.localeCompare(b,"fr")})});
  COM=next;COMMUNES_READY=true; if(CO.liv.value==="À domicile")updAdr();
 }).catch(function(){COMMUNES_READY=false;if(CO.liv.value==="À domicile")updAdr()});
}
function opts(sel,ph,list,codes){sel.innerHTML='<option value="">'+ph+'</option>'+list.map(function(n,i){return '<option>'+(codes?(i+1<10?"0":"")+(i+1)+" - ":"")+n+'</option>'}).join("")}
opts(CO.wil,"Choisir la wilaya",WIL,true);
function recap(){var sum=cart.reduce(function(a,c){return a+c.p},0),fee=CO.liv.value==="À domicile"?800:400;document.getElementById("tot2").textContent="Articles : "+fmt(sum)+" · Livraison : "+fmt(fee)+" · Total : "+fmt(sum+fee)}
function updAdr(){
 var d=CO.liv.value==="À domicile",code=CO.wil.selectedIndex,L=COM[String(code)];
 document.getElementById("adrl").hidden=!d;CO.adr.required=d;
 if(L){opts(CO.com,"Choisir la commune",L);CO.com.hidden=false;CO.com.required=d;CO.comt.hidden=true;CO.comt.required=false}
 else{CO.com.innerHTML="";CO.com.hidden=true;CO.com.required=false;CO.comt.hidden=false;CO.comt.required=d}
}
CO.addEventListener("change",function(e){if(e.target===CO.wil||e.target.name==="liv"){updAdr();recap()}});
updAdr();
loadCommunes();
function view(v){["items","total","go"].forEach(function(k){document.getElementById(k).hidden=v!=="cart"});CO.hidden=v!=="form";DONE.hidden=v!=="done"}
document.getElementById("go").onclick=function(){view("form");recap()};
CO.onsubmit=function(e){
 e.preventDefault();var f=new FormData(CO);
 var sum=cart.reduce(function(a,c){return a+c.p},0),no=Math.floor(10000+Math.random()*90000),fee=f.get("liv")==="À domicile"?800:400,tot=sum+fee;
 var d=new Date().toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"});
 var msg="Bonjour, nouvelle commande n° "+no+" :\n"+cart.map(function(c){return "- "+c.n+" (taille "+c.s+") "+c.p+" DA"}).join("\n")+"\nArticles : "+sum+" DA\nLivraison : "+fee+" DA\nTotal : "+tot+" DA (paiement à la livraison)\n\nNom : "+f.get("nom")+"\nTéléphone : "+f.get("tel")+"\nWilaya : "+f.get("wil")+"\nLivraison : "+f.get("liv")+(f.get("liv")==="À domicile"?"\nCommune : "+(f.get("com")||f.get("comt"))+"\nQuartier / adresse : "+f.get("adr"):"");
 var order={no:no,nom:f.get("nom"),tel:f.get("tel"),wil:f.get("wil"),liv:f.get("liv"),com:f.get("com")||f.get("comt")||"",adr:f.get("adr")||"",items:cart.map(function(c){return c.n+" ("+c.s+") "+c.p+" DA"}).join(" | "),sum:sum,fee:fee,tot:tot};
 var sb=CO.querySelector('button[type="submit"]');
 function show(ok){
  DONE.innerHTML='<h3>Merci pour votre commande !</h3><p>'+(ok?"Votre commande est enregistrée. ":"")+'Nous vous contacterons sous 24 heures pour confirmer votre commande.</p><dl><dt>Numéro de commande</dt><dd>'+no+'</dd><dt>Date</dt><dd>'+d+'</dd><dt>Total (livraison incluse)</dt><dd>'+fmt(tot)+'</dd><dt>Livraison</dt><dd>'+order.liv+' – '+fmt(fee)+'</dd><dt>Mode de paiement</dt><dd>Paiement à la livraison</dd></dl>'+
  '<a class="wa" target="_blank" rel="noopener" href="https://wa.me/'+WA+'?text='+encodeURIComponent(msg)+'">'+(ok?"Écrire au magasin sur WhatsApp (facultatif)":"Envoyer la commande par WhatsApp")+'</a>'+(ok?"":'<p class="note">Appuyez sur ce bouton pour transmettre votre commande au magasin.</p>')+'<button class="add" id="back">Retour à la boutique</button>';
  document.getElementById("back").onclick=function(){view("cart");document.getElementById("panel").classList.remove("open")};
  sb.disabled=false;view("done");
 }
 cart=[];sync();CO.reset();updAdr();
 if(ORDER_URL){sb.disabled=true;fetch(ORDER_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(order)}).then(function(){show(true)}).catch(function(){show(false)})}
 else show(false);
};
gates();tools();grid();sync();
try{
 Promise.all([claude.use("assets"),claude.use("db")]).then(function(r){
  AS=r[0];DB=r[1];
  if(DB)DB.doc("config/images").get().then(function(sn){if(sn.exists)IMG=sn.data()||{};gates();grid()}).catch(function(){});
  else if(AS){gates();grid()}
  else{gates();grid()}
 }).catch(function(){});
}catch(e){}

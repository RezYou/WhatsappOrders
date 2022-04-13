var num="";
function youcanWhatsapp(num1){
num=num1;
}
var button = document.createElement("BUTTON");
button.innerHTML = "Passer la commande par whatsapp";
button.setAttribute("id","wtssp");
button.setAttribute("onClick","wtssp()");
document.getElementsByClassName('cart-footer')[0].appendChild(button);

function wtssp(){
var panier="";

var c=document.getElementsByClassName('cart-count')[0].innerHTML;
for(var i=0;i<=c-1;i++){
var link =document.getElementsByClassName("item-details")[i].getElementsByTagName("a")[0].href; 
var Qt=document.getElementsByClassName("item-details")[i].getElementsByTagName("small")[0].innerHTML;
var prix =document.getElementsByClassName("item-details")[i].getElementsByClassName("currency-value")[0].getElementsByTagName("span")[0].innerHTML;
  panier=panier+ "\n{ "+link+" | Qty :"+Qt +" | Prix "+prix+"}\n";
}
  window.open('https://wa.me/'+num+'?text=' + panier, '_blank');

}


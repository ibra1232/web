var btplus =document.getElementsByClassName('fas fa-plus-circle');
var btmoins =document.getElementsByClassName('fas fa-minus-circle');
var nb =document.getElementsByClassName('quantity');
var cpt = parseInt(quantity.innerText);
btplus.addEventListener('click',function(){
    cpt = cpt+1;
    nb.innerHTML = cpt;
});
btmoins.addEventListener('click',function(){
    if(cpt>0) {
    cpt = cpt-1;
    quantity.innerHTML = cpt;
    }
    else{
        return cpt
    }
});
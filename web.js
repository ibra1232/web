var fa-plus-circle =document.getElementsByClassName('fa-plus-circle');
var fa-minus-circle =document.getElementsByClassName('fa-minus-circle');
var quantity =document.getElementsByClassName('quantity');
var cpt = parseInt(quantity.innerText);
fa-plus-circle.addEventListener('click',function(){
    cpt = cpt+1;
    quantity.innerHTML = cpt;
});
fa-minus-circle.addEventListener('click',function(){
    if(cpt>0) {
    cpt = cpt-1;
    quantity.innerHTML = cpt;
    }
    else{
        return cpt
    }
});
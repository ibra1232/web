var Plus = document.getElementsByClassName('fa-plus-circle');
var Minus = document.getElementsByClassName('fa-minus-circle');
var quantities = document.getElementsByClassName('quantity');
var favs =document.getElementsByClassName('fa-heart');
console.log(favs)


for (let i = 0; i < favs.length; i++) {
    favs[i].addEventListener('click', function() {
        if (favs[i].style.color=="black") {
            favs[i].style.color="red";
        }})
    }
  
for (let i = 0; i < Plus.length; i++) {
    Plus[i].addEventListener('click', function() {

        let quantity = quantities[i];
        let cpt = parseInt(quantity.innerText);


        cpt = cpt + 1;
        quantity.innerText = cpt;


        updateTotalPrice();
    });

    Minus[i].addEventListener('click', function() {

        let quantity = quantities[i];
        let cpt = parseInt(quantity.innerText);


        if (cpt > 0) {
            cpt = cpt - 1;
            quantity.innerText = cpt;
        }


        updateTotalPrice();
    });
}

function updateTotalPrice() {
    var total = 0;
    var unitPrices = document.getElementsByClassName('unit-price');

    for (let i = 0; i < quantities.length; i++) {
        let quantity = parseInt(quantities[i].innerText);
        let unitPrice = parseInt(unitPrices[i].innerText.replace(' $', ''));
        total += quantity * unitPrice;
    }

    document.querySelector('.total').innerText = total + ' $';
}


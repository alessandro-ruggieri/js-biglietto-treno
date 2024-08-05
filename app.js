let kilometers = prompt("Inserire il numero dei chilometri della vostra tratta")
let age = prompt("Inserisca la sua età")
fullprice = parseInt(kilometers) * 0.21
if (age < 18) {
   discount = fullprice * 0.20
   finalprice = fullprice - discount
} else if (age >= 65) {
   discount= fullprice * 0.40
   finalprice = fullprice - discount
} else {
   finalprice = fullprice
}

// console.log ("Il prezzo del tuo biglietto è " + parseFloat(finalprice).toFixed(2) + " €")
let viewprice = document.getElementById("price")
viewprice.innerHTML = "Il prezzo del tuo biglietto è di " + parseFloat(finalprice).toFixed(2) + " €"
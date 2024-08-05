let kilometers = prompt("Inserisca il numero dei chilometri della sua tratta")
let age = prompt("Inserisca la sua età")
let fullprice = parseFloat(kilometers) * 0.21
let discount
let finalprice

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
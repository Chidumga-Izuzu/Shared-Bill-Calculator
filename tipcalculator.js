function moneyFormat(value){
    value = Math.ceil(value * 100) /100;
    value = value.toFixed(2);
    return "$" + value;

}
function formatSplit(value) {
if(value==="1") return value + " person ";
return value + " people ";

}

function update() {
let bill = Number(document.getElementById("theBill").value)
let tip = document.getElementById("tipInput").value;
let split = document.getElementById("splitInput").value;
let serviceQuality = document.getElementById("serviceQuality").value;

let tipAmount = bill * (tip/100);
let tipPerPerson = tipAmount/split
let billEach = (bill + tipAmount) /split
console.log(billEach );

document.getElementById("tipPercent").innerHTML = tip + "%";
document.getElementById("tipValue").innerHTML = moneyFormat(tipAmount);
document.getElementById("AmountwithTip").innerHTML = moneyFormat (bill + tipAmount);
document.getElementById("splitValue").innerHTML = formatSplit(split);
document.getElementById("billEach").innerHTML = moneyFormat(billEach);
document.getElementById("tipEach").innerHTML = moneyFormat(tipPerPerson);




}

let container = document.getElementById("container");
container.addEventListener("input", update);
const billAmount = document.getElementById("billAmount");
const customTipAmount = document.getElementById("customTipAmount");
const splitCount = document.getElementById("splitCount");

//const submitBtn = document.getElementById("")
const totalAmount = document.getElementById("totalAmount")
const tipAmount = document.getElementById("tipAmount")
const amountPerHead = document.getElementById("amountPerPerson")

function submit() {
    const bill = parseFloat(billAmount.value)
    const tip = parseFloat(customTipAmount.value)
    const numberOfpeople = splitCount.value;

    if (!bill || !tip || !numberOfpeople) {
        alert("Please fill empty fields")
    } else {
        const totalBill = parseFloat(bill + tip)
        const amountPerPerson = parseFloat(totalBill / numberOfpeople )

        totalAmount.innerHTML = `The total amount is ${totalBill}`;
        tipAmount.innerHTML = `Your tip is ${tip}`;
        amountPerHead.innerHTML =`Each person pays; ${amountPerPerson.toFixed(2)}`;
        // console.log(tip);
    }
    // return reset();
}

// function reset() {
//     billAmount.value=""
//     customTipAmount.value=""
//     splitCount.value = ""
// }

function resetbtn() {
    totalAmount.innerHTML =""
    tipAmount.innerHTML = ""
    amountPerHead.innerHTML =""
    billAmount.value=""
    customTipAmount.value=""
    splitCount.value = ""

}

function toggleDivVisibility() {
    const serviceRatingRadioButton = document.getElementById("serviceRating");
    const serviceRatingInputDiv = document.getElementById("serviceRatingInput");

    if(serviceRatingRadioButton.checked){
        serviceRatingInputDiv.style.display = 'block';
    }else {
        serviceRatingInputDiv.style.display = "none";
    }
}
// submit()
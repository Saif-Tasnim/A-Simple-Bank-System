
// get the deposit button event listener
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    //    console.log(depositAmount);

    if (depositAmount > 0 && depositAmount !== " ") {
        const depositCard = document.getElementById('deposit-value');
        const depositAn = depositCard.innerText;
        // convert card value & input value to int from string
        const depositValue = parseInt(depositAmount)
        const prevDepositBal = parseInt(depositAn);

        // add the two int value & update deposit card
        const sum = depositValue + prevDepositBal;
        depositCard.innerText = sum;

        const totalValue = document.getElementById('total-value');
        const taka = totalValue.innerText;

        const totalAmount = parseInt(taka);

        const newValue = totalAmount + depositValue;
        totalValue.innerText = newValue;

    }

    else {

        alert("You Have not put any real value. Please insert money")

    }

    depositField.value = "";

})


document.getElementById('btn-withdraw').addEventListener('click', function () {
    console.log("All set")
})



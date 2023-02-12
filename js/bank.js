
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
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    const withdrawMoney = parseFloat(withdrawAmount)
    const totalValue = document.getElementById('total-value');
    const taka = totalValue.innerText;
    const totalAmount = parseFloat(taka);

    if (withdrawAmount > 0 && withdrawAmount != '') {

        if (withdrawMoney <= totalAmount) {
            previousValue = document.getElementById('withdraw-value');
            previousAmount = previousValue.innerText;

            const sum = withdrawMoney + parseFloat(previousAmount);
            previousValue.innerText = sum;
            
            const restMoney = totalAmount - withdrawMoney;
            totalValue.innerText = restMoney;
        }

        else{
            alert("tui beta fokir abar eto taka chas");
        }


        withdrawField.value = "";



    }

    else {
        alert('Your amount is not valid. please insert valid amount');
    }
})



// step-1 add event listener in submit button 
document.getElementById('btn-submit').addEventListener('click', function () {
   

    // step-2 get the email & password inside the field
    const userEmail = document.getElementById('email');
    const email = userEmail.value;
    console.log(email)
    const userPassword = document.getElementById('password');
    const password = userPassword.value;
    console.log(password);

    // Danger: do not verify email & password on client side

    // step-3 : verify user with email & pass 

    if(email==="saiftasnim2002@gmail.com" && password === '12341234'){
        // console.log("valid user")
        window.location.href = "bank.html";
    }

    else{
        alert("Dhurr beta tui tr nijer account e mone nai abar taka nite aschos .");
    }

})



let subscribeButton = document.getElementById('subcribe');

function subscribe() {
    let errors = validateFields();
}

function validateFields() {
    let emailElement =  document.getElementById('userEmail');
    let errorMessage = document.getElementById('error-message');
    let userEmail = emailElement.value;
    let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValidEmail = validEmail.test(userEmail);
    
    console.log(userEmail);
    if (!(userEmail && isValidEmail)) {
       errorMessage.classList.remove("d-none");
       emailElement.classList.add("error-state");
        console.log("Enter valid email");
    } else {
        document.getElementById('userEmail').value = '';
        window.location.href = 'thankyou.html'
    }

}
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")
let emailValue = email.value;
let passwordValue = password.value;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (email.value === "") {
        alert("veuillez resasir votre email")
    }
    else {
        
    }
})
function isPassword(passwordValue) {
    
}


function isEmail(emailValue) {
    
}
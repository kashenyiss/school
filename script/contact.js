function call(phoneNumber) {
            window.location.href = `tel:${phoneNumber}`;
        }  
document.addEventListener("DOMContentLoaded",function(){

const input = document.getElementById("user");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

msg.addEventListener("input",function(){
    if(msg.value.length<2){
        msg.style.border="1px solid red";
    }
    else if(msg.value.length>=10){
          msg.style.border="1px solid green";
    }
    else if(msg.value){
        msg.style.border="1px solid red";
    }
})

email.addEventListener("input",function(){
    if(email.value.length<2){
        email.style.border="1px solid red";
    }
    else if(email.value.length>=10){
          email.style.border="1px solid green";
    }
    else if(email.value){
        email.style.border="1px solid red";
    }
})

user.addEventListener("input",function(){
    if(user.value.length<5){
        user.style.border="1px solid red";
    }
    else if(user.value.length>=3){
          user.style.border="1px solid green";
    }
    else if(user.value){
    user.style.border="1px solid red";
    }
})
/*
user.addEventListener("input",function(){
    const valid = document.getElementById("valid");
    const one = user.value.charAt(1);
    if(user.value<1){
         valid.textContent=" "
    }
    else if(one.toUpperCase){
        valid.textContent="username should begin with a capital letter"
        valid.style.color="red"
        valid.style.fontSize="15px"
    }
    else{
        valid.textContent=" "
    }
})*/
})
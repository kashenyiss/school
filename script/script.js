const animation = document.getElementById("load");
const main = document.querySelector("main");
main.style.display="none";
window.onload = ()=>{	
animation.style.display="none";
main.style.display="block";

}

const logo = document.querySelector("#developer");
const container = document.querySelector(".contact-info");

function showLogo(){
logo.style.display="block";
}

function hideLogo(){
logo.style.display="none";
}
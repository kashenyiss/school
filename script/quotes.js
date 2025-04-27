document.addEventListener("DOMContentLoaded",function(){
	const currentDate= new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth()+1;
	const day = currentDate.getDay();
	const date = currentDate.getDate();
	const days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
    const quotes= [
    "Don`t be like a short tree where every fool picks a fruit.",
	"In either your success or your failures, from the croud,you will never get 100% supporters",
    "Always learn to listen and listen to learn",
	"Always prepare because failing to prepare is preparing to fail ",
	"Don`t be like a short tree where every fool picks a fruit.",
	"In either your success or your failures, from the croud,you will never get 100% supporters",
    "Always learn to listen and listen to learn",
	"Always prepare because failing to prepare is preparing to fail "
    ];    
    
	const section= document.getElementById("quotes");
	section.innerHTML=`<h3>Dear user,</h3>
	<h2>Welcome back today ${date}/${month}/${year}</h2>
	<h3>Happy ${days[day]}</h3>
	<h1>Today's Quote</h1>
	<p>${quotes[day]}</p>`;
});
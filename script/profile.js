const profile = document.getElementById("profile");
const name = document.getElementById("username");
const email = document.getElementById("email");
const category = document.getElementById("category");

const updateForm = document.querySelector(".profile");


function save(){
  const inputName = name.value;
  localStorage.setItem("savedName", inputName);
  localStorage.setItem("email", email.value);
  localStorage.setItem("category", category.value);
 
}

function updateProfile() {
const savedName = localStorage.getItem("savedName");
const savedEmail = localStorage.getItem("email");
const savedCategory = localStorage.getItem("category");
  profile.innerHTML = `
    <h1>USER PROFILE</h1>
  <h2>Username: ${savedName}</h2>
    <h2>Email: ${savedEmail}</h2>
    <h2>${savedCategory}</h2>
   <button onclick="show()">Change</button>`;
if(savedName){
  updateForm.style.display = "none";
  profile.style.display = "block";
}
else{
  updateForm.style.display = "block";
  profile.style.display = "none";
}
}
function show(){
  updateForm.style.display = "block";
}
updateProfile();

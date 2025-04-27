document.addEventListener('DOMContentLoaded',function () {
    const dayholder= document.getElementById('days');
    const curr = document.getElementById('current');
    const prevbtn=document.getElementById('prev');
    const nxtbtn=document.getElementById('next');

const months=[
"January","February","March","April","May","June","July",
"August","September", "October","November","December"
]

let current= new Date();
let today= new Date();
function calendar(date){
    const month= date.getMonth();
    const year= date.getFullYear();
    const firstDay= new Date(year,month,1).getDay();
    const lastDay= new Date(year,month+1,0).getDate();
    curr.textContent =`${months[month]} ${year}`;
    dayholder.innerHTML='';
    //previous month 
    const prev=new Date(year,month,0).getDate();
    for(let i=firstDay;i>0;i--){
        const day= document.createElement('div');
        day.textContent= prev-1+1;
        day.classList.add('fade');
        dayholder.appendChild(day);
    }

    //current month
    for(let i=1;i<=lastDay;i++){
        const day= document.createElement('div');
        day.textContent= i;
        if(i===today.getDate() && month===today.getMonth() && year===today.getFullYear()) {
            day.classList.add('today');
        }
        dayholder.appendChild(day);
    }

//next month
const next= 7-new Date(year,month+1,0).getDay()-1;
for(let i=1;i<=next;i++){
        const day= document.createElement('div');
        day.textContent= i;
            day.classList.add('fade');
        
        dayholder.appendChild(day);
    }
}
prevbtn.addEventListener('click',function () {
    current.setMonth(current.getMonth()-1)
    calendar(current)
});
nxtbtn.addEventListener('click',function () {
    current.setMonth(current.getMonth()+1)
    calendar(current)
});
calendar(current);
});



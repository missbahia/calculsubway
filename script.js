const money=[

{name:"50$",value:50,type:"bill"},
{name:"20$",value:20,type:"bill"},
{name:"10$",value:10,type:"bill"},
{name:"5$",value:5,type:"bill"},


{name:"2$",value:2,type:"coin"},
{name:"1$",value:1,type:"coin"},
{name:"25¢",value:.25,type:"coin"},
{name:"10¢",value:.10,type:"coin"},
{name:"5¢",value:.05,type:"coin"}

];



const bills=document.getElementById("bills");
const coins=document.getElementById("coins");



money.forEach((m,i)=>{


let html=`

<div class="card">

<strong>${m.name}</strong>

<input 
type="number"
min="0"
value="0"
id="item${i}">

</div>

`;



if(m.type==="bill")
    bills.innerHTML+=html;
else
    coins.innerHTML+=html;



});



document.querySelectorAll("input")
.forEach(input=>{

input.addEventListener("input",calculate);

});



function calculate(){

let total=0;


money.forEach((m,i)=>{

let qty=
Number(document.getElementById("item"+i).value);


total+=qty*m.value;


});


document.getElementById("total").innerText=
total.toFixed(2);

}




document.getElementById("resetBtn")
.onclick=()=>{


document.querySelectorAll("input")
.forEach(i=>i.value=0);


calculate();


};



document.getElementById("copyBtn")
.onclick=()=>{


navigator.clipboard.writeText(
document.getElementById("total").innerText
);


alert("Copied!");

};




const themeBtn=document.getElementById("themeBtn");


themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

};
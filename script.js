const money = [

{name:"50$", value:50, type:"bill"},
{name:"20$", value:20, type:"bill"},
{name:"10$", value:10, type:"bill"},
{name:"5$", value:5, type:"bill"},


{name:"2$", value:2, type:"coin"},
{name:"1$", value:1, type:"coin"},
{name:"25¢", value:.25, type:"coin"},
{name:"10¢", value:.10, type:"coin"},
{name:"5¢", value:.05, type:"coin"}

];


const bills=document.getElementById("bills");
const coins=document.getElementById("coins");


let currentTotal=0;



money.forEach((m,i)=>{


let card=`

<div class="cash-card">

<strong>${m.name}</strong>


<div class="counter">


<button onclick="change(${i},-1)">
-
</button>


<input 
id="item${i}"
type="number"
value="0"
min="0"
>


<button onclick="change(${i},1)">
+
</button>


</div>


</div>

`;



if(m.type==="bill")

bills.innerHTML+=card;

else

coins.innerHTML+=card;


});



document.querySelectorAll("input")
.forEach(input=>{

input.addEventListener("input",calculate);

});




function change(index,value){


let input=document.getElementById("item"+index);


let number=Number(input.value)+value;


if(number<0) number=0;


input.value=number;


calculate();


}




function calculate(){


currentTotal=0;


money.forEach((m,i)=>{


let qty=Number(
document.getElementById("item"+i).value
);


currentTotal += qty*m.value;


});


document.getElementById("total")
.innerText=currentTotal.toFixed(2);



}




document.getElementById("resetBtn")
.onclick=()=>{


document.querySelectorAll("input")
.forEach(i=>i.value=0);


calculate();


showToast("Reset done");


};






document.getElementById("copyBtn")
.onclick=()=>{


navigator.clipboard.writeText(
currentTotal.toFixed(2)
);


showToast(
"Copied: "+currentTotal.toFixed(2)
);


};





// DARK MODE


const themeBtn=document.getElementById("themeBtn");


themeBtn.onclick=()=>{


document.body.classList.toggle("dark");


localStorage.setItem(
"theme",
document.body.classList.contains("dark")
);


};



if(localStorage.getItem("theme")=="true"){

document.body.classList.add("dark");

}




function showToast(text){


let toast=document.getElementById("toast");


toast.innerText=text;


toast.classList.add("show");


setTimeout(()=>{

toast.classList.remove("show");

},2000);


}



calculate();
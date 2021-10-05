var vastus=document.getElementById("vastus");
var kogus=document.getElementById("kogus");
var vastus2=document.getElementById("vastus2");
var kogus2=document.getElementById("kogus2");
var pilt=document.getElementById("img");

const dollar=1.1594;
const rouble=84.1769;
const bitcoin=0.000023;
const kroon=10.1517;
const KZT=493.8614;



function radioChange(event){
    var inputValue=kogus.value;
    if(event.target.id=="dollar"){
        vastus.innerHTML=calculate(inputValue, dollar) + " $";
        pilt.src="img/dollar.png";
    }
    else if(event.target.id=="rouble") {
        vastus.innerHTML=calculate(inputValue, rouble) + " ₽";
        pilt.src="img/rouble.png";
    }
    else if(event.target.id=="bitcoin") {
        vastus.innerHTML=calculate(inputValue, bitcoin) + " BTC";
        pilt.src="img/BTC.png";
    }
    else if(event.target.id=="kroon") {
        vastus.innerHTML=calculate(inputValue, kroon) + " SEK";
        pilt.src="img/kroon.png";
    }
    else if(event.target.id=="KZT") {
        vastus.innerHTML=calculate(inputValue, KZT) + " KZT";
        pilt.src="img/tenge.png";
    }

}
function calculate(val, currency){
    return (val*currency).toFixed(3);
    //toFixed(3)- 3 märki peale komat
}

function selectOptionChange(event){
    var inputValue=kogus2.value;
    if(event.target.value==="dollar"){
        vastus2.innerHTML=calculate(inputValue, dollar) + " $";
        pilt.src="img/dollar.png";
    }
    else if(event.target.value==="rouble") {
        vastus2.innerHTML=calculate(inputValue, rouble) + " ₽";
        pilt.src="img/rouble.png";
    }
    else if(event.target.value==="bitcoin") {
        vastus2.innerHTML=calculate(inputValue, bitcoin) + " BTC";
        pilt.src="img/BTC.png";
    }
    else if(event.target.value==="kroon") {
        vastus2.innerHTML=calculate(inputValue, kroon) + " SEK";
        pilt.src="img/kroon.png";
    }
    else if(event.target.value==="KZT") {
        vastus2.innerHTML=calculate(inputValue, KZT) + " KZT";
        pilt.src="img/tenge.png";
    }
}

function validateForm() {
    let x = document.forms["var1"]["kogus"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
function inputCurrencyText(){
    var inputValue=document.getElementById("kogus3").value;
    var inputText=document.getElementById("valuutanimi").value;
    var vastus3=document.getElementById("vastus3");
    if(inputText=="dollar"){
        vastus3.innerHTML=calculate(inputValue, dollar) + " $";
        pilt.src="img/dollar.png";
    }
    else if(inputText=="rouble"){
        vastus3.innerHTML=calculate(inputValue, rouble) + " ₽";
        pilt.src="img/rouble.png";
    }
    else if(inputText=="BTC"){
        vastus3.innerHTML=calculate(inputValue, bitcoin) + " BTC";
        pilt.src="img/BTC.png";
    }
    else if(inputText=="kroon"){
        vastus3.innerHTML=calculate(inputValue, kroon) + " SEK";
        pilt.src="img/kroon.png";
    }
    else if(inputText=="KZT"){
        vastus3.innerHTML=calculate(inputValue, KZT) + " KZT";
        pilt.src="img/tenge.png";
    }
}

var kogus4=document.getElementById("kogus4");
const ga=100;
const akr=247.105;
const mile=0,386102;

function selectChange(event){
    var inputValue=kogus4.value;
    if(event.target.value=="ga"){
        vastus4.innerHTML=calculate(inputValue, ga) + " gektaar";
    }
    else if(event.target.value=="akr") {
        vastus4.innerHTML=calculate(inputValue,akr) + " akr";
    }
    else if(event.target.value=="mile") {
        vastus4.innerHTML=calculate(inputValue,mile) + " mile2";
    }
}

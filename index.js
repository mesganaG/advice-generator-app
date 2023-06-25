const generateBtn = document.getElementById("generate-btn");
const URL = 'https://api.adviceslip.com/advice';
const advice_number = document.getElementById("advice-number");
const theAdvice = document.getElementById("quote");

async function getAdvice() {  
const response = await fetch('https://api.adviceslip.com/advice',  { cache: "no-cache" });
const data = await response.json();

advice_number.innerText = "ADVICE #" + data.slip.id;
theAdvice.innerText = data.slip.advice;

}
generateBtn.addEventListener('click',getAdvice);





let counterDisplayElem = document.querySelector('.counter');
let counterMinusElem = document.querySelector('.minus');
let counterResetElem = document.querySelector('.reset');
let counterPlusElem = document.querySelector('.plus');

let count = 0;

updateDisplay();

counterMinusElem.addEventListener("click",()=>{
  count--;
  updateDisplay();
});

counterResetElem.addEventListener("click",()=>{
  count = 0;
  updateDisplay();
})

counterPlusElem.addEventListener("click",()=>{
  count++;
  updateDisplay();
});

function updateDisplay(){
  counterDisplayElem.innerHTML = count;
};

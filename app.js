// https://www.omnicalculator.com/conversion/oz-to-cc-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ccRadio = document.getElementById('ccRadio');
const ozRadio = document.getElementById('ozRadio');

let cc;
let oz = v; 

// labels of the inpust
const variable = document.getElementById('variable');

ccRadio.addEventListener('click', function() {
  variable.textContent = 'oz';
  oz = v;
  result.textContent = '';
});

ozRadio.addEventListener('click', function() {
  variable.textContent = 'cc';
  cc = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ccRadio.checked)
    result.textContent = `cc = ${computecc().toFixed(5)}`;

  else if(ozRadio.checked)
    result.textContent = `oz = ${computeoz().toFixed(5)}`;
})

// calculation

function computecc() {
  return Number(oz.value) * 29.574;
}

function computeoz() {
  return Number(cc.value) / 29.574;
}
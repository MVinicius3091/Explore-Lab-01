
const ccbd01        = document.querySelector('.cc-bg g > g:nth-child(1) path');
const ccbd02        = document.querySelector('.cc-bg g > g:nth-child(2) path');
const cclogo        = document.querySelector('.cc-logo > span:nth-child(2) img');
const cardNumber    = document.querySelector('#card-number');
const cardHolder    = document.querySelector('#card-holder');
const cardDate      = document.querySelector('#expiration-date');
const cardSegurity  = document.querySelector('#security-code');


function handleBackgroud(type) {  

  let color = {
    visa: ['#00BFFF', '#B0C4DE'],
    mastercard: ['#FF8C00', '#FFA500'],
    default: ['black', 'gray']
  }

  ccbd01.setAttribute('fill', color[type][0])
  ccbd02.setAttribute('fill', color[type][1])

  if(type == 'visa'){
    cclogo.setAttribute('src', `./public/cc-${type}.svg`);
  } else if(type == 'mastercard'){ 
    cclogo.setAttribute('src', `./public/cc-${type}.svg`);
  } else {
    cclogo.setAttribute('src', `./public/cc-default.svg`);
  }
}

cardNumber.addEventListener('keyup', ()=>{
  let cardValue = cardNumber.value.length;
  
  if(cardValue == 4 || cardValue == 9 || cardValue == 14){
    cardNumber.value += ' ';
  }
  cardFlag(cardNumber.value);
  handleMode('Number', cardNumber.value);
});

cardHolder.addEventListener('keyup', (e)=>{
  handleMode('Holder', e.target.value);
});

cardDate.addEventListener('keyup', ()=>{

  let dateValue = cardDate.value.length;
  let dateVerify = String(cardDate.value);

  if(dateVerify >= 32 ){
    cardDate.value = '';
  } else {
    if(dateValue == 2)
    cardDate.value += '/';
  } 
  handleMode('Date', cardDate.value);
});

cardSegurity.addEventListener('keyup', (e)=>{
  handleMode('Security', e.target.value);
});

function handleMode(input, valueInput) {

  switch(input){
    case 'Number':
      document.querySelector('.cc-number').innerHTML = valueInput;
      cardNumber.setAttribute('maxlength', '19');
      break;

    case 'Holder':
      document.querySelector('.cc-holder > div:nth-child(2)').innerHTML = valueInput;
      cardHolder.setAttribute('maxlength', '30')
      break;

    case 'Date':
      document.querySelector('.cc-expiration > div:nth-child(2)').innerHTML = valueInput;
      cardDate.setAttribute('maxlength', '7')
      break;

    case 'Security':
      document.querySelector('.cc-security > div:nth-child(2)').innerHTML = valueInput;
      cardSegurity.setAttribute('maxlength', '3')
      break;
  }
}

function cardFlag(number){

  let index = String(number).slice(0);

  if (index == 4) {
    handleBackgroud('visa'); 
  } else if (index == 5) {
    handleBackgroud('mastercard'); 
  } else {
    handleBackgroud('default'); 
  }
}

function clearAll(){
  document.getElementById('input').value = 0;
}

function addNumber(number){
  document.getElementById('input').value += number;
}

function backSpace(){
  let value = document.getElementById('input').value;
  document.getElementById('input').value = value.slice(0,-1);
}

function addOperator(operator){
  document.getElementById('input').value += operator;
}

function equalTo(){
  const result = eval(document.getElementById('input').value);
  document.getElementById('input').value = result;
}
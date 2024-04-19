
function clearAll(){
  document.getElementById('input').value = "";
}

function addNumber(number){
  document.getElementById('input').value += number;
}

function addOperator(operator){
  document.getElementById('input').value += operator;
}

function backSpace(){
  let value = document.getElementById('input').value;
  document.getElementById('input').value = value.slice(0,-1);
}

function calculate() {
	const answer = eval(document.getElementById('input').value);
	document.getElementById('input').value = answer;
}

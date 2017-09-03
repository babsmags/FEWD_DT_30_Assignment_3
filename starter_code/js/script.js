console.log('this javascript is loading');

var buttonCenter = document.getElementById('button-center');
console.log(buttonCenter);

function buttonClick(){
	window.alert("We're not ready for Sign-Ups...Yet.");
}

buttonCenter.onclick = buttonClick;

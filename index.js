var zero = document.getElementById('0');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var mul = document.getElementById('x');
var div = document.getElementById('/');
var equal = document.getElementById('=');
var min = document.getElementById('-');
var plus = document.getElementById('+');
var back = document.getElementById('backspace');
var c = document.getElementById('c');
var dot = document.getElementById('.');
var equal = document.getElementById('=');
var inputBox = document.getElementById('field');
var square = document.getElementById('square');
var cube = document.getElementById('cube');
var val1 = 0, val2 = 0, flag = 0;

inputBox.addEventListener('keydown', function(event) {
	console.log(inputBox.value);
	if(event.keyCode == 13) {
		equal.click();
	}	
} ,false);

window.addEventListener('keydown', function(event) {
	if(event.keyCode === 67) {
		inputBox.value = '';
		c.click();
	}
	if(event.keyCode === 111 || event.keyCode === 191) {
		div.click();
	}
	if(event.keyCode === 13) {
		equal.click();
	}
	if(event.keyCode === 8) {
		back.click();
	}
	if(event.keyCode === 88 || event.keyCode === 106) {
		mul.click();
	}
	if(event.keyCode === 107) {
		plus.click();
	}
	if(event.keyCode === 83) {
		square.click();
	}
	if(event.keyCode === 109 || event.keyCode === 189) {
		min.click();
	}
	if(event.keyCode === 110 || event.keyCode === 190) {
		dot.click();
	}
	if(inputBox !== document.activeElement) {
		if(event.keyCode === 48 || event.keyCode === 96) {
			console.log('zero');
			zero.click();
		}
		if(event.keyCode === 49 || event.keyCode === 97) {
			one.click();
		}
		if(event.keyCode === 50 || event.keyCode === 98) {
			two.click();
		}
		if(event.keyCode === 51 || event.keyCode === 99) {
			three.click();
		}
		if(event.keyCode === 52 || event.keyCode === 100) {
			four.click();
		}
		if(event.keyCode === 53 || event.keyCode === 101) {
			five.click();
		}
		if(event.keyCode === 54 || event.keyCode === 102) {
			six.click();
		}
		if(event.keyCode === 55 || event.keyCode === 103) {
			seven.click();
		}
		if(event.keyCode === 56 || event.keyCode === 104) {
			eight.click();
		}
		if(event.keyCode === 57 || event.keyCode === 105) {
			nine.click();
		}
	}
});

zero.addEventListener('click', function(event) {
	if(flag == 5) {
		inputBox.value = '';
		flag = 0;
	}
	inputBox.value = inputBox.value + '0';
	console.log('zero111');
});

one.addEventListener('click', function(event) {
	if(flag == 5) {
		inputBox.value = '';
		flag = 0;
	}
	inputBox.value = inputBox.value + '1';
});

two.addEventListener('click', function(event) {
	if(flag == 5) {
		inputBox.value = '';
		flag = 0;
	}
	inputBox.value = inputBox.value + '2';
});

three.addEventListener('click', function(event) {
	if(flag == 5) {
		inputBox.value = '';
		flag = 0;
	}
	inputBox.value = inputBox.value + '3';
});

four.addEventListener('click', function(event) {
	if(flag == 5) {
		inputBox.value = '';
		flag = 0;
	}
	inputBox.value = inputBox.value + '4';
});

five.addEventListener('click', function(event) {
	if(flag == 5) {
		inputBox.value = '';
		flag = 0;
	}
	inputBox.value = inputBox.value + '5';
});

six.addEventListener('click', function(event) {
	if(flag == 5) {
		inputBox.value = '';
		flag = 0;
	}
	inputBox.value = inputBox.value + '6';
});
seven.addEventListener('click', function(event) {
	if(flag == 5) {
		inputBox.value = '';
		flag = 0;
	}
	inputBox.value = inputBox.value + '7';
});

eight.addEventListener('click', function(event) {
	if(flag == 5) {
		inputBox.value = '';
		flag = 0;
	}
	inputBox.value = inputBox.value + '8';
});

nine.addEventListener('click', function(event) {
	if(flag == 5) {
		inputBox.value = '';
		flag = 0;
	}
	inputBox.value = inputBox.value + '9';
});

c.addEventListener('click', function(event) {
	inputBox.value = '';
});

dot.addEventListener('click', function(event) {
	inputBox.value = inputBox.value + '.';
});

plus.addEventListener('click', function(event) {
	flag = 1;
	val1 = inputBox.value;
	inputBox.value = '';
});

min.addEventListener('click', function(event) {
	flag = 2;
	val1 = inputBox.value;
	inputBox.value = '';
});

mul.addEventListener('click', function(event) {
	flag = 3;
	val1 = inputBox.value;
	inputBox.value = '';
});

div.addEventListener('click', function(event) {
	flag = 4;
	val1 = inputBox.value;
	inputBox.value = '';
});

equal.addEventListener('click', function(event) {
	val2 = inputBox.value;
	if(flag == 1) {
		val2 = +val1 + +val2;
		flag = 5; 
	}
	if(flag == 2) {
		val2 = +val1 - +val2; 
		flag = 5;
	}
	if(flag == 3) {
		val2 = +val1 * +val2;
		flag = 5; 
	}
	if(flag == 4) {
		val2 = +val1 / +val2; 
		flag = 5;
	}
	inputBox.value = val2;
});

back.addEventListener('click', function(event) {
	var string = inputBox.value;
	inputBox.value = string.substr(0, string.length - 1);
});

square.addEventListener('click', function() {
	inputBox.value *= inputBox.value;
});

cube.addEventListener('click', function() {
	inputBox.value *= inputBox.value * inputBox.value;
});
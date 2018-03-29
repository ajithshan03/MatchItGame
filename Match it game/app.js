var x = 0, count = 0, one, two, three, four, five, six, seven, eight, nine;
function initial() {
	location.reload();
}
//red is for player one
//blue is for player two
document.querySelector('#btn-11').addEventListener('click', function () {
	if(x === 0 && count < 9){
		document.querySelector('#btn-11' ).classList.add('red');
		x = 1;
		one = 0;
	} else if (x === 1 && count < 9) {
		document.querySelector('#btn-11').classList.add('blue');
		x = 0;
		one = 1;
	}
	check();
	count++;
});
document.querySelector('#btn-12').addEventListener('click', function() {
	if(x === 0 && count < 9){
		document.querySelector('#btn-12' ).classList.add('red');
		x = 1;
		two = 0;
	} else if (x === 1 && count < 9) {
		document.querySelector('#btn-12').classList.add('blue');
		x = 0;
		two = 1;
	}
	count++;
	check();
});
document.querySelector('#btn-13').addEventListener('click', function() {
	if(x === 0 && count < 9){
		document.querySelector('#btn-13' ).classList.add('red');
		x = 1;
		three = 0;
	} else if (x === 1 && count < 9) {
		document.querySelector('#btn-13').classList.add('blue');
		x = 0;
		three = 1;
	}
	count++;
	check();
});
document.querySelector('#btn-21').addEventListener('click', function() {
	if(x === 0 && count < 9){
		document.querySelector('#btn-21' ).classList.add('red');
		x = 1;
		four = 0;
	} else if (x === 1 && count < 9) {
		document.querySelector('#btn-21').classList.add('blue');
		x = 0;
		four = 1;
	}
	count++;
	check();
});
document.querySelector('#btn-22').addEventListener('click', function() {
	if(x === 0 && count < 9){
		document.querySelector('#btn-22' ).classList.add('red');
		x = 1;
		five = 0;
	} else if (x === 1 && count < 9) {
		document.querySelector('#btn-22').classList.add('blue');
		x = 0;
		five = 1;
	}
	count++;
	check();
});
document.querySelector('#btn-23').addEventListener('click', function(){
	if(x === 0 && count < 9){
		document.querySelector('#btn-23' ).classList.add('red');
		x = 1;
		six = 0;
	} else if (x === 1 && count < 9) {
		document.querySelector('#btn-23').classList.add('blue');
		x = 0;
		six = 1;
	}
	count++;
	check();
});
document.querySelector('#btn-31').addEventListener('click', function() {
	if(x === 0 && count < 9){
		document.querySelector('#btn-31' ).classList.add('red');
		x = 1;
		seven = 0;
	} else if (x === 1 && count < 9) {
		document.querySelector('#btn-31').classList.add('blue');
		x = 0;
		seven = 1;
	}
	count++;
	check();
});
document.querySelector('#btn-32').addEventListener('click', function() {
	if(x === 0 && count < 9){
		document.querySelector('#btn-32' ).classList.add('red');
		x = 1;
		eight = 0;
	} else if (x === 1 && count < 9) {
		document.querySelector('#btn-32').classList.add('blue');
		x = 0;
		eight = 1;
	}
	count++;
	check();
});
document.querySelector('#btn-33').addEventListener('click', function() {
	if(x === 0 && count < 9){
		document.querySelector('#btn-33' ).classList.add('red');
		x = 1;
		nine = 0;
	} else if (x === 1 && count < 9) {
		document.querySelector('#btn-33').classList.add('blue');
		x = 0;
		nine = 1;
	}
	count++;
	check();
});
function check(){
	if (one === 0 && two === 0 && three === 0){
		window.alert("Player one wins");
		initial();
	} else if(one === 1 && two === 1 && three === 1){
		window.alert("Player two wins");
		initial();
	} else if(four === 0 && five === 0 && six === 0){
		window.alert("Player one wins");
		initial();
	} else if(four === 1 && five === 1 && six === 1){
		window.alert("Player two wins");
		initial();
	} else if(seven === 0 && eight === 0 && nine === 0){
		window.alert("Player one wins");
		initial();
	} else if(seven === 1 && eight === 1 && nine === 1){
		window.alert("Player two wins");
		initial();
	} else if(one === 0 && five === 0 && nine ===0){
		window.alert("Player one wins");
		initial();
	} else if (one === 1 && five === 1 && nine ===1){
		window.alert("Player two wins");
		initial();
	} else if(three === 0 && five === 0 && seven === 0){
		window.alert("player one wins");
		initial();
	} else if(three === 1 && five === 1 && seven === 1){
		window.alert("player two wins");
		initial();
	} else if(one === 0 && four === 0 && seven === 0){
		window.alert("player one wins");
		initial();
	} else if(one === 1 && four === 1 && seven === 1){
		window.alert("player two wins");
		initial();
	} else if(two === 0 && five === 0 && eight === 0){
		window.alert("player one wins");
		initial();
	} else if(two === 1 && five === 1 && eight === 1){
		window.alert("player two wins");
		initial();
	} else if(three === 0 && six === 0 && nine === 0){
		window.alert("player one wins");
		initial();
	} else if(three === 1 && six === 1 && nine === 1){
		window.alert("player two wins");
		initial();
	} else if((one === 0 || one === 1) && (two === 0 || two === 1) && (three === 0 || three === 1) && (four === 0 || four === 1) && (five === 0 || five === 1) && (six === 0 || six === 1) && (seven === 0 || seven === 1) && (eight === 0 || eight === 1) && (nine === 0 || nine === 1)){
		window.alert("match draw");
	}
}


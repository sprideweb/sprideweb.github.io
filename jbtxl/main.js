document.getElementById('d-load').style.display = 'none';
const urlParams = new URLSearchParams(window.location.search);
const Name = urlParams.get('name');
if(Name && Name !== '') {
	document.getElementById('d-view').style.display = 'block';
}
if(Name === null || Name === '') {
	document.getElementById('d-home').style.display = 'block';
	document.title = '东北师大附中2019级九班同学录';
}


function jump404() {
	if(Name && Name !== '') {
		document.getElementById('d-view').style.display = 'none';
		alert('找不到指定对象。');
		window.location.href = './';
	}
}
function fillCon1(x1,x2,x3,x4,x5,x6,x7,x8) {
	document.getElementById('di-enname').innerText = x1;
	document.getElementById('di-btday').innerText = x2;
	document.getElementById('di-noposi').innerText = x3;
	document.getElementById('di-school').innerText = x4;
	document.getElementById('di-workpl').innerText = x5;
	document.getElementById('di-studl').innerHTML = x6;
	document.getElementById('di-workl').innerHTML = x7;
	document.getElementById('dl-lxfs').innerHTML = x8;
	fillCon2();
	document.title = document.getElementById('di-cnname').innerText + '|';
}
function fillCon2() {
	document.getElementById('di-cnname').innerText = Name;
	document.getElementById('dl-lxt-wz').innerText = Name;
}
function fillCon3(x9) {
	document.getElementById('avatar1').src = x9;
}
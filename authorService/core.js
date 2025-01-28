function createLoad() {
	showLoad();
	var randomt=/*Math.random() * (1000 - 10) + 10*/1;
	setTimeout("finishLoad()",randomt);
}
function hashChangeHandler() {
	checkhash = window.location.hash.substr(1,1);
	pagehash = window.location.hash.substr(2,5);
	if(checkhash!=='/'||pagehash!=='index') {
		window.location.href='#/index';
	}
	pih = window.location.hash.substr(7);
	nih = window.location.hash.substr(8,10);
	nid = window.location.hash.substr(19);
	pin = document.getElementById('page');
	if(pagehash==='index'||!pih) {
		clear();
		show('home');
		setTitle('首页');
	}
	switch(pih) {
	case '/articleInformationNotice':
		clear();
		show('page');
		pin.innerHTML=newsListList;
		setTitle('文章信息公示');
		break;
	case '/404':
		clear();
		show('page');
		pin.innerHTML=`
		<p class="ntfd">
		<img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIIXChu0FKKi909UGMLAEOPwC.png" width="200px"/>
		<br/><br/>404：目标地址不存在或已被删除。<br/><a href="#/">返回首页</a>或<a href="javascript:window.close();">关闭本页</a></p>
		`;
		setTitle('404');
		break;
	default:
		if(nih!=='newsDetail'&&nih) {
			window.location.href='#/index/404';
		}
		break;
	}
	if(nih==='newsDetail') {
		clear();
		show('news');
		document.getElementById('ac-stn').innerHTML='';
		newsInfoInfo();
		var nt=document.getElementById('newstitle').innerText;
		setTitle(nt);
	}
}
function showLoad() {
	document.getElementById('loader').style.left='0';
	document.getElementById('loader').style.opacity='1';
	document.body.style.overflow='hidden';
}
function finishLoad() {
	document.getElementById('loader').style.left='-100%';
	document.getElementById('loader').style.opacity='0';
	document.body.style.overflow='visible';
}
function show(e) {
	document.getElementById(e).style.display='block';
}
function hide(e) {
	document.getElementById(e).style.display='none';
}
function clear() {
	window.scrollTo(0,0);
	hide('home');
	hide('news');
	hide('page');
	document.getElementById('page').innerHTML='';
	document.getElementById('newstitle').innerHTML='';
	document.getElementById('newsinfo').innerHTML='';
	document.getElementById('newscontent').innerHTML='';
	createLoad();
}
function goN(e) {
	window.open('#/index/newsDetail/'+e,'_blank');
}
function goS(e) {
	window.location.href='#/index/newsDetail/'+e;
}
function goP(e) {
	window.location.href='#/index/'+e;
}
function basI(e,e2,e3,e4,aurh,aurhnum) {
	if(e3<10) {
		e3='0'+e3;
	}
	if(e4<10) {
		e4='0'+e4;
	}
	if(e2>2030||e3>12||e4>31) {
		document.getElementById('newsinfo').innerHTML='<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgwrfZuwYoruuWgQEwsAk4sAk.png"/>admin';
	}
	if(e3<13&&e4<32&&e2<2031) {
		document.getElementById('newsinfo').innerHTML='<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgh4qEuwYos531uAYwsAk4sAk.png"/>'+e2+'-'+e3+'-'+e4+'<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgwrfZuwYoruuWgQEwsAk4sAk.png"/><au onclick="goN('+aurhnum+')">'+aurh+'</au>';
	}
	document.getElementById('newstitle').innerText=e;
	document.getElementById('newscontent').innerHTML=newsCC;
}
function setTitle(titleName) {
	document.title=titleName+' - 春潮创作者服务官网';
}
function zhuanlan_more() {
	hide('zhuanlan-morebtn');
	show('zhuanlan-box2');
}

function dashang() {
	document.getElementById('dashang_dialog').style.top='0';
	document.getElementById('dashang_dialog').style.opacity='1';
	document.body.style.overflow = 'hidden';
}
function dashang_close() {
	document.getElementById('dashang_dialog').style.top='-100%';
	document.getElementById('dashang_dialog').style.opacity='0';
	document.body.style.overflow = '';
}

function report2022() {
	var r=confirm("即将跳转至 春潮信息化办公室网站");
	if (r==true) {window.open('https://spride.asia/e/#/index/wfhblxxjbzx2022','_blank');}
}
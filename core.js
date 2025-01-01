function createLoad() {
	showLoad();
	var randomt=/*Math.random() * (1000 - 10) + 10*/5;
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
	case '/aboutUs':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="title-bg">
		<div class="width title">
		<h1>关于我们</h1><p>About Us</p>
		</div>
		</div>
		<div class="flex-width page-c">
		<p></p>
		</div>
		`;
		setTitle('关于我们');
		break;
	case '/column/section1':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="width zhuanlan-top">
		<h1>春潮专栏 第一辑</h1>
		<p>春潮专栏第一辑自2020年10月起连载，2021年11月完结，收录了自春潮创办起精选的17篇专栏作者文章。这些文章见证了春潮从无到有的历程，涵盖热点评论、疫情、自然抒情等多个主题，内容丰富，文采飞扬。</p>
		</div>
		<div class="width zhuanlan-box" id="zhuanlan-box1">
		<a onclick="goN(1221)">写在疫情时代的第三个冬天<au>豆腐泡杀手</au><ti>2021-11-16</ti></a>
		<a onclick="goN(1220)">奋斗赋予时间以意义，精神照亮民族的未来<au>铁柱</au><ti>2021-10-09</ti></a>
		<a onclick="goN(1219)">迪迦：致以光明<au>沐星雨人</au><ti>2021-09-26</ti></a>
		<a onclick="goN(1218)">我不喜欢那种一眼就能望得到头的未来<au>牛老师</au><ti>2021-07-24</ti></a>
		<a onclick="goN(1217)">再见，青华<au>牛老师</au><ti>2021-06-09</ti></a>
		<a onclick="goN(1216)">儿童节快乐<au>铁柱</au><ti>2021-06-01</ti></a>
		<a onclick="goN(1215)">追不上时代脚步的人<au>沐星雨人</au><ti>2021-05-26</ti></a>
		</div>
		<div class="width zhuanlan-box" id="zhuanlan-box2">
		<a onclick="goN(1214)">死亡与新生<au>牛老师</au><ti>2021-05-23</ti></a>
		<a onclick="goN(1213)">热血难凉<au>沐星雨人</au><ti>2021-05-14</ti></a>
		<a onclick="goN(1211)">五四青年，我们为何而纪念<au>杨二狗</au><ti>2021-05-04</ti></a>
		<a onclick="goN(1210)">我看见，我祈愿<au>沐星雨人</au><ti>2021-05-01</ti></a>
		<a onclick="goN(1209)">我们每个人其实都挺累的<au>牛老师</au><ti>2021-03-31</ti></a>
		<a onclick="goN(1208)">影子与你<au>沐星雨人</au><ti>2021-03-28</ti></a>
		<a onclick="goN(1207)">界碑永存，英雄不朽<au>铁柱</au><ti>2021-02-20</ti></a>
		<a onclick="goN(1206)">夜晚，很累的人睡不着<au>沐星雨人</au><ti>2021-01-13</ti></a>
        <a onclick="goN(1203)">还有你陪我数星星<au>铁柱</au><ti>2020-10-20</ti></a>
		<a onclick="goN(1202)">愿爱无忧<au>铁柱</au><ti>2020-10-17</ti></a>
		</div>
		<button id="zhuanlan-morebtn" onclick="zhuanlan_more();">加载更多...</button>
		`;
		setTitle('春潮专栏 第一辑');
		break;
	case '/column/section2':
		clear();
		show('page');
		pin.innerHTML=newsListList;
		setTitle('春潮专栏 第二辑');
		break;
	case '/404':
		clear();
		show('page');
		pin.innerHTML=`
		<p class="ntfd">
		<img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIIXChu0FKKi909UGMLAEOPwC.png" width="200px"/>
		<br/><br/>您似乎来到了没有任何内容存在的荒原…<br/><a href="#/">返回首页</a>或<a href="javascript:window.close();">关闭本页</a></p>
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
function basI(e,e2,e3,e4) {
	if(e3<10) {
		e3='0'+e3;
	}
	if(e4<10) {
		e4='0'+e4;
	}
	if(e2>2030||e3>12||e4>31) {
		document.getElementById('newsinfo').innerHTML='<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgh4qEuwYos531uAYwsAk4sAk.png"/>错误时钟';
	}
	if(e3<13&&e4<32&&e2<2031) {
		document.getElementById('newsinfo').innerHTML='<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgh4qEuwYos531uAYwsAk4sAk.png"/>'+e2+'-'+e3+'-'+e4+'';
	}
	document.getElementById('newstitle').innerText=e;
	document.getElementById('newscontent').innerHTML=newsCC;
}
function setTitle(titleName) {
	document.title=titleName+' - 春潮网';
}
function zhuanlan_more() {
	hide('zhuanlan-morebtn');
	show('zhuanlan-box2');
}

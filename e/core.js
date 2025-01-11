function createLoad() {
	showLoad();
	var randomt=/*Math.random() * (20 - 0) + 0*/0;
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
		<h3>网信简介</h3>
		<p><br/>\u3000\u3000习近平总书记指出：“网络安全和信息化是一体之两翼、驱动之双轮，必须统一谋划、统一部署、统一推进、统一实施。做好网络安全和信息化工作，要处理好安全和发展的关系，做到协调一致、齐头并进，以安全保发展、以发展促安全，努力建久安之势、成长治之业。”<br/><br/><br/></p>
		<h3>文明公约</h3>
		<p><br/>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000自觉遵纪守法，倡导社会公德，促进绿色网络建设；</p><p>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000提倡先进文化，摒弃消极颓废，促进网络文明健康；</p><p>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000提倡自主创新，摒弃盗版剽窃，促进网络应用繁荣；</p><p>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000提倡互相尊重，摒弃造谣诽谤，促进网络和谐共处；</p><p>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000提倡诚实守信，摒弃弄虚作假，促进网络安全可信；</p><p>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000提倡社会关爱，摒弃低俗沉迷，促进少年健康成长；</p><p>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000提倡公平竞争，摒弃尔虞我诈，促进网络百花齐放；</p><p>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000提倡人人受益，消除数字鸿沟，促进信息资源共享。<br/><br/><br/></p>
		<center><img src="https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIMWp7NUFKO_wxNUCMIAKONgE.jpg" width="80%"/></center>
		</div>
		`;
		setTitle('关于我们');
		break;
	case '/center':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="title-bg">
		<div class="width title">
		<h1>业务大厅</h1><p>Business Lobby</p>
		</div>
		</div>
		<div class="width page-c">
		<!--<man><h1>邮箱申领</h1><p>Mailbox Application</p><button onclick="goN(330)">办理流程</button></man>
		<man><h1>网站可信验证</h1><p>trusted verify</p><button onclick="goN(330)">办理流程</button></man>-->
		<p style="text-align:center;color:#9f9f9f;padding:80px 0;font-size:14px;">业务大厅不再提供信息化业务办理服务，如需办理请单独联系春潮网信息化专员或前往线下办理。</p>
		
		</div>
		`;
		setTitle('业务大厅');
		break;
	case '/wfhblxxjbzx2022':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="title-bg">
		<div class="width title">
		<h1>春潮网违法和不良信息举报中心</h1><p>IBIR Centre</p>
		</div>
		</div>
		<div class="width page-c">
		<p style="text-align:center;color:#9f9f9f;padding:80px 0;">暂无举报内容</p>
		
		</div>
		`;
		setTitle('春潮网违法和不良信息举报中心');
		break;
	case '/newsList':
		clear();
		show('page');
		pin.innerHTML=newsListList;
		setTitle('新闻公告');
		break;
	default:
		if(nih!=='newsDetail') {
			window.location.href='#/index';
		}
		break;
	}
	if(nih==='newsDetail') {
		clear();
		show('news');
		document.getElementById('ac-stn').innerHTML='<a></a><span><a></a></span>';
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
function opetLogin() {
	setTimeout("alert('error\\n::403');",809);
	
}
function goN(e) {
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
	document.title=titleName+' - 春潮网信息化办';
}
function openWXSPH() {
	alert('如何在微信视频号找到学习宝：\n1.打开微信找到视频号入口\n2.搜索“学习宝官号”关注即可！');
}
function openKS() {
	alert('如何在快手找到学习宝：\n1.下载快手APP并打开\n2.搜索“学习宝官方账号”关注即可！');
}
function openBI() {
	setTimeout("window.open('https://space.bilibili.com/494631046/video','_blank');",500);
}
function ocw(link) {
	window.open(link,'_blank');
}
function ocb(link) {
	window.location.href=link;
}
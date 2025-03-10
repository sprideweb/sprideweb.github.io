function createLoad() {
	showLoad();
	var randomt=Math.random() * (0 - 0) + 0;
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
	case '/gycc.html':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="width">
		<div class="c-left">
		<div class="ctitle">关于我们</div>
		<div class="cswitch">
		<a href="#/index/gycc.html" class="act">关于春潮</a>
		<a href="#/index/zxns.html">招贤纳士</a>
		</div>
		</div>

        <div class="c-right">
        <div class="ddv1">
        <h1>关于春潮</h1>
        <div class="ddv2">
        <p>\u3000</p>
        <p>\u3000</p>
        <p>\u3000</p>
        </div>
        </div>
        </div>

		</div>
		`;
		setTitle('关于春潮');
		break;
	case '/zxns.html':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="width">
		<div class="c-left">
		<div class="ctitle">关于我们</div>
		<div class="cswitch">
		<a href="#/index/gycc.html">关于春潮</a>
		<a href="#/index/zxns.html" class="act">招贤纳士</a>
		</div>
		</div>

        <div class="c-right">
        <div class="ddv1">
        <h1>招贤纳士</h1>
        <div class="ddv2">
		<p> </p>
        </div>
        </div>
        </div>

		</div>
		`;
		setTitle('招贤纳士');
		break;
	case '/vipnk.html':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="width">
		<div class="c-left">
		<div class="ctitle">会员加盟</div>
		<div class="cswitch">
		<a href="#/index/vipnk.html" class="act">VIP年卡</a>
		</div>
		</div>
        <div class="c-right">
        <div class="ddv1">
        <h1>VIP年卡</h1>
        <div class="ddv2">
        </div>
        </div>
        </div>
		</div>
		`;
		setTitle('VIP年卡');
		break;
	case '/jbzx.html':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="width">
		<div class="c-left">
		<div class="ctitle">举报中心</div>
		<div class="cswitch">
		<a href="#/index/jbzx.html" class="act">不良信息举报</a>
		</div>
		</div>
        <div class="c-right">
        <div class="ddv1">
        <h1>不良信息举报</h1>
        <div class="ddv2">
        <img src="https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg5pCcvgYojKiCqgYwngU4tgE.png" width="600px"/>
        <p>1.请选择不良信息渠道</p>
        <p>A.春潮网/关联网站<br/>B.春潮/关联公众号<br/>C.学习宝/关联账号</p>
        <p>2.请选择不良信息类型</p>
        <p>A.政治类<br/>B.暴恐类<br/>C.诈骗类<br/>D.色情类<br/>E.低俗类<br/>F.赌博类<br/>G.侵权类<br/>H.谣言类<br/>I.其他类</p>
        <p>3.请写下您的意见或建议</p>
        <p>4.请上传证据截图（不少于2张）</p>
        <p>5.请写下您的称呼和联系方式</p>
        <p><button class="rdbtn" onclick="jubao(this.data)">提交举报</button></p>
        </div>
        </div>
        </div>
		</div>
		`;
		setTitle('不良信息举报');
		break;
	case '/tzgg.html':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="width">
		<div class="c-left">
		<div class="ctitle">新闻公告</div>
		<div class="cswitch">
		<a href="#/index/dtxw.html">动态新闻</a>
		<a href="#/index/tzgg.html" class="act">通知公告</a>
		</div>
		</div>
        <div class="c-right">
        <div class="ddv1">
        <h1>通知公告</h1>
        </div>
        </div>
        </div>
		</div>
		`;
		setTitle('通知公告');
		break;
	case '/dtxw.html':
		clear();
		show('page');
		pin.innerHTML=newsListList;
		setTitle('动态新闻');
		break;
	case '/wxgzh.html':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="width">
		<div class="c-left">
		<div class="ctitle">项目介绍</div>
		<div class="cswitch">
		<a href="#/index/wxgzh.html" class="act">微信公众号</a>
		<a href="#/index/xuexibao.html">学习宝</a>
		<a href="#/index/xyx.html">小游戏</a>
		</div>
		</div>
        <div class="c-right">
        <div class="ddv1">
        <h1>微信公众号</h1>
        </div>
        </div>
        </div>
		</div>
		`;
		setTitle('微信公众号');
		break;
	case '/xuexibao.html':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="width">
		<div class="c-left">
		<div class="ctitle">项目介绍</div>
		<div class="cswitch">
		<a href="#/index/wxgzh.html">微信公众号</a>
		<a href="#/index/xuexibao.html" class="act">学习宝</a>
		<a href="#/index/xyx.html">小游戏</a>
		</div>
		</div>
        <div class="c-right">
        <div class="ddv1">
        <h1>学习宝</h1>
        </div>
        </div>
        </div>
		</div>
		`;
		setTitle('学习宝');
		break;
	case '/xyx.html':
		clear();
		show('page');
		pin.innerHTML=`
		<div class="width">
		<div class="c-left">
		<div class="ctitle">项目介绍</div>
		<div class="cswitch">
		<a href="#/index/wxgzh.html">微信公众号</a>
		<a href="#/index/xuexibao.html">学习宝</a>
		<a href="#/index/xyx.html" class="act">小游戏</a>
		</div>
		</div>
        <div class="c-right">
        <div class="ddv1">
        <h1>小游戏</h1>
        </div>
        </div>
        </div>
		</div>
		`;
		setTitle('小游戏');
		break;
	case '/error.html':
		clear();
		show('page');
		pin.innerHTML=`
		<p class="ntfd">
		<img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIIXChu0FKKi909UGMLAEOPwC.png" width="180px"/>
		<br/>资源不存在</p>
		`;
		setTitle('404');
		break;
	default:
		if(nih!=='xw.html?id'&&nih) {
			window.location.href='#/index/error.html';
		}
		break;
	}
	if(nih==='xw.html?id') {
		clear();
		show('news');
		document.getElementById('ac-stn').innerHTML='<p style=\"text-align:right;line-height:2;\">特此声明：作者观点仅代表本人，不代表本站立场。</p>';
		newsInfoInfo();
		var nt=document.getElementById('newstitle').innerText;
		setTitle(nt);
	}
}
function showLoad() {
	document.getElementById('loader').style.left='0';
	document.getElementById('loader').style.opacity='1';
	window.getSelection().removeAllRanges();
	document.body.style.overflow='hidden';
}
function finishLoad() {
	document.getElementById('loader').style.opacity='0';
	setTimeout("finishLoad2()",300);
}
function finishLoad2() {
	document.getElementById('loader').style.left='-100%';
	document.body.style.overflow='visible';
}
function jubao() {
	showLoad();
	setTimeout("finishLoad()",300);
	setTimeout("alert('请按要求填写表格')",300);
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
	window.location.href='#/index/xw.html?id='+e;
}
function goB(e) {
	window.open('#/index/xw.html?id='+e,'_blank');
}
function basI(e,e2,e3,e4) {
	if(e3<10) {
		e3='0'+e3;
	}
	if(e4<10) {
		e4='0'+e4;
	}
	if(e2>2030||e3>12||e4>31) {
		document.getElementById('newsinfo').innerHTML='时间：\u3000供稿：';
	}
	if(e3<13&&e4<32&&e2<2031) {
		document.getElementById('newsinfo').innerHTML=/*'<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgh4qEuwYos531uAYwsAk4sAk.png"/>'*/'时间：'+e2+'-'+e3+'-'+e4+'\u3000供稿：';
	}
	document.getElementById('newstitle').innerText=e;
	document.getElementById('newscontent').innerHTML=newsCC;
}
function setTitle(titleName) {
	document.title=titleName+' - 圆宵文化';
}
function openBI() {
	setTimeout("window.open('https://space.bilibili.com/494631046/video','_blank');",500);
}

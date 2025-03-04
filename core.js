function createLoad() {
	showLoad();
	var randomt=Math.random() * (300 - 0) + 0;
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
        <p>\u3000</p>
        <!--<h2>春潮简介</h2>
        <p>春潮文化的前身是微信公众账号春潮SPEID，于2020年10月成立于东北亚区域中心城市——北国春城长春,  现在主要负责门户网站春潮网以及春潮向海、浪潮时代等微信订阅号的日常运营。其他业务还包括主题IP学习宝和互动游戏《池钓离吻花》的管理维护等。</p>
        <h2>联系我们</h2>
        <p>访客咨询：暂停</p>
        <p>商务合作：暂停</p>
        <p>地址：朝阳区自由大路与长庆街交叉口西南, 东北师大附中自由校区</p>
        <h2>发展历程</h2>
        <p>2022年</p>
        <p>\u3000未完待续……<br/>\u300007月 浪潮时代微信公众号成立<br/>\u300004月 单机游戏《池钓里吻花》上线</p>
        <p>2021年</p>
        <p>\u300012月 学习宝第一支爆款视频（播放量破20万）诞生<br/>\u300012月 学习宝视频成立</p>
        <p>2020年</p>
        <p>\u300010月 发表第一篇专栏文章<br/>\u300010月 春潮微信公众号成立</p>
        <h2>主营业务</h2>
        <p>自媒体：主要由春潮SPRDE和浪潮时代（原：时代轨道）构成。春潮SPIRDE是国内综合公众号,时代轨道是专注于聚焦国内轨道交通行业信息和一手资讯的订阅号。</p>
        <p>电子游戏：制作精良、玩法新颖、设计时尚的好玩的电子游戏《池钓离吻花》。</p>
        <p>网络服务：春潮网（new.spride.asia）在线阅读网站是春潮微信公众号内文章以及《春潮专栏》文章站外唯一授权发布的网站。</p>
        <p>短视频与直播：学习宝短视频ip管理与运营。</p>
        <p><img src="https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIKzzu6cGKP-H0pQHMLALOLAG.jpg"/></p>-->
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
        <!--<h2>热招职位</h2>
        <p class="jobtitle">新媒体运营师 [2022]</p>
		<p>工作内容：</p>
		<p>1.<span>春潮</span>网旗下各类新媒体平台账号的日常运营和维护</p>
		<p>2.<span>春潮</span>网及其下属网站的日常运行和维护</p>
		<p>3.临时安排的其他工作</p>
		<p>任职要求：</p>
		<p>1.主动性强，吃苦耐劳，踏实努力，为人友善</p>
		<p>2.身份年龄在18-75周岁之间，性别为男或女。</p>
		<p>3.初中及以上学历者优先考虑</p>
		<p>工作类型：兼职 弹性办公 线上办公 无坐班 平均一周工作0-1天</p>
		<p style="margin-bottom:15px;">薪资组成：无底薪 按工作结算报酬 无奖金</p>
		<h2>投递方式</h2>-->
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
	document.title=titleName+' - 春潮文化';
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

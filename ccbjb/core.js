function createLoad() {
	showLoad();
	randomt=Math.random() * (600 - 0) + 0;
	setTimeout("finishLoad()",randomt);
}
function hashChangeHandler() {
	checkhash = window.location.hash.substr(1,1);
	pagehash = window.location.hash.substr(2,5);
	if(checkhash!=='/'||pagehash!=='index') {
		window.location.href='#/index';
	}
	pih = window.location.hash.substr(7);
	nih = window.location.hash.substr(8,7);
	nid = window.location.hash.substr(16);
	pin = document.getElementById('page');
	if(pagehash==='index'||!pih) {
		clear();
		show('home');
		setTitle('首页');
	}
	switch(pih) {
	case '/writers':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=`
		<div class="width new-main">
		   <div class="new-left">
		      <tle>作者精选\u3000<span>AUTHOR CONCENTRATION</span></tle>
		      <div class="new-left-text">
		         
		      </div>
		   </div><div class="new-nav">
		      <tle>作者和作品</tle>
		      <p onclick="goA('tuiwen')">编辑推荐</p>
		      <p class="act" onclick="goA('writers')">作者精选</p>
		   </div>
		</div>	
		`;
		setTitle('作者精选');
		break;
	case '/submit/announcement':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=`
		<div class="width new-main">
		   <div class="new-left">
		      <tle>投稿须知\u3000<span>SUBMIT ANNOUNCEMENT</span></tle>
		      <div class="new-left-text">
		         <img src="https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgs7SNwAYohJPLMjD2CDi-FA.png"/>
		      </div>
		   </div><div class="new-nav">
		      <tle>向我们投稿</tle>
		      <p class="act" onclick="goA('submit/announcement')">投稿须知</p>
		      <p onclick="goA('submit/fee')">稿酬标准</p>

		   </div>
		</div>	
		`;
		setTitle('投稿须知');
		break;
	case '/submit/fee':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=`
		<div class="width new-main">
		   <div class="new-left">
		      <tle>稿酬标准\u3000<span>ARTICLE FEE</span></tle>
		      <div class="new-left-text">
		         
		      </div>
		   </div><div class="new-nav">
		      <tle>向我们投稿</tle>
		      <p onclick="goA('submit/announcement')">投稿须知</p>
		      <p class="act" onclick="goA('submit/fee')">稿酬标准</p>

		   </div>
		</div>	
		`;
		setTitle('稿酬标准');
		break;
	case '/about':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=`
		<div class="width new-main">
		   <div class="new-left">
		      <tle>关于我们\u3000<span>ABOUT SPRIDE EDITORIAL DEPARTMENT</span></tle>
		      <div class="new-left-text">
		         <img src="https://13511974.s21i.faiusr.com/4/10/ABUIABAEGAAgsIOJwAYoiLOmrgcwuAg49Ac.png"/>
		      </div>
		   </div><div class="new-nav">
		      <tle>关于我们</tle>
		      <p class="act" onclick="goA('about')">关于我们</p>
		      <p onclick="goA('about/follow')">订阅账号</p>
		      <p onclick="goA('about/news')">新闻动态</p>
		   </div>
		</div>	
		`;
		setTitle('关于我们');
		break;
	case '/about/follow':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=`
		<div class="width new-main">
		   <div class="new-left">
		      <tle>订阅账号\u3000<span>FOLLOW OUR WECHAT ACCOUNT</span></tle>
		      <div class="new-left-text">
		         <img src="https://13511974.s21i.faiusr.com/4/10/ABUIABAEGAAg4f7GrgYowPPxoAYwrgM4rgM.png" style="width:300px!important;"/>
		         <br/><br/><br/>
		      </div>
		   </div><div class="new-nav">
		      <tle>关于我们</tle>
		      <p onclick="goA('about')">关于我们</p>
		      <p class="act" onclick="goA('about/follow')">订阅账号</p>
		      <p onclick="goA('about/news')">新闻动态</p>
		   </div>
		</div>	
		`;
		setTitle('订阅账号');
		break;
	case '/about/news':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=`
		<div class="width new-main">
		   <div class="new-left">
		      <tle>新闻动态\u3000<span>NEWS AT SPRIDE</span></tle>
		         <div class="new-newslist">
		            <p>春潮编辑部新版网站今日上线<t>2025-05-12</t><a onclick="goB(5)">查看详情</a></p>
		         </div>
		   </div><div class="new-nav">
		      <tle>关于我们</tle>
		      <p onclick="goA('about')">关于我们</p>
		      <p onclick="goA('about/follow')">订阅账号</p>
		      <p class="act" onclick="goA('about/news')">新闻动态</p>
		   </div>
		</div>	
		`;
		setTitle('新闻动态');
		break;
	case '/vip/uplus':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=`
		<div class="width new-main">
		   <div class="new-left">
		      <tle>春潮优享会员\u3000<span>SPRIDE UPLUS</span></tle>
		      <div class="new-left-text">
		         
		      </div>
		   </div><div class="new-nav">
		      <tle>会员增值服务</tle>
		      <p class="act" onclick="goA('vip/uplus')">春潮优享会员</p>
		      <p onclick="goA('vip/benefits')">会员权益</p>
		      <p onclick="goA('vip/join')">入会办理</p>
		      <p onclick="goA('vip/news')">会员动态</p>
		   </div>
		</div>	
		`;
		setTitle('春潮优享会员-U享会员');
		break;
	case '/vip/benefits':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=`
		<div class="width new-main">
		   <div class="new-left">
		      <tle>会员权益\u3000<span>UPLUS VIP BENEFITS</span></tle>
		      <div class="new-left-text">
		         
		      </div>
		   </div><div class="new-nav">
		      <tle>会员增值服务</tle>
		      <p onclick="goA('vip/uplus')">春潮优享会员</p>
		      <p class="act" onclick="goA('vip/benefits')">会员权益</p>
		      <p onclick="goA('vip/join')">入会办理</p>
		      <p onclick="goA('vip/news')">会员动态</p>
		   </div>
		</div>	
		`;
		setTitle('会员权益-U享会员');
		break;
	case '/vip/join':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=`
		<div class="width new-main">
		   <div class="new-left">
		      <tle>入会办理\u3000<span>JOIN UPLUS PROJECT</span></tle>
		      <div class="new-left-text">
		         
		      </div>
		   </div><div class="new-nav">
		      <tle>会员增值服务</tle>
		      <p onclick="goA('vip/uplus')">春潮优享会员</p>
		      <p onclick="goA('vip/benefits')">会员权益</p>
		      <p class="act" onclick="goA('vip/join')">入会办理</p>
		      <p onclick="goA('vip/news')">会员动态</p>
		   </div>
		</div>	
		`;
		setTitle('入会办理-U享会员');
		break;
	case '/vip/news':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=`
		<div class="width new-main">
		   <div class="new-left">
		      <tle>会员动态\u3000<span>UPLUS VIP NEWS</span></tle>
		         <div class="new-newslist">
		            
		         </div>
		   </div><div class="new-nav">
		      <tle>会员增值服务</tle>
		      <p onclick="goA('vip/uplus')">春潮优享会员</p>
		      <p onclick="goA('vip/benefits')">会员权益</p>
		      <p onclick="goA('vip/join')">入会办理</p>
		      <p class="act" onclick="goA('vip/news')">会员动态</p>
		   </div>
		</div>	
		`;
		setTitle('会员动态-U享会员');
		break;



	case '/tuiwen':
		clear();
		setTimeout(() => show('page'), randomt);
		pin.innerHTML=newsListList;
		setTitle('编辑推荐');
		break;
	case '/404':
		clear();
		show('page');
		pin.innerHTML=`
		<p class="ntfd">
		<img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIIXChu0FKKi909UGMLAEOPwC.png" width="200px"/>
		<br/>页面不存在</p>
		`;
		setTitle('404');
		break;
	case '/403':
		clear();
		show('page');
		pin.innerHTML=`
		<p class="ntfd">
		<img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIIXChu0FKKi909UGMLAEOPwC.png" width="200px"/>
		<br/><font color="red">&emsp;</font></p>
		`;
		setTitle('403');
		break;
	default:
		if(nih!=='uploads'&&nih) {
			window.location.href='#/index/404';
		}
		break;
	}
	if(nih==='uploads') {
		clear();
		setTimeout(() => show('news'), randomt);
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
	document.getElementById('loader').style.opacity='0';
	setTimeout("finishLoad2()",300);
}
function finishLoad2() {
	document.getElementById('loader').style.left='-100%';
	document.body.style.overflow='visible';
}
function show(e) {
	hide('loadcc');
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
	document.getElementById('newstitle').innerHTML='';
	document.getElementById('newsinfo').innerHTML='';
	document.getElementById('newscontent').innerHTML='';
	show('loadcc');
	createLoad();
}
function goN(e) {
	window.location.href='#/index/uploads/'+e;
}
function goB(e) {
	window.open('#/index/uploads/'+e,'_blank');
}
function goA(e) {
	window.location.href='#/index/'+e;
}
function basI(e,e2,e3,e4) {
	if(e3<10) {
		e3='0'+e3;
	}
	if(e4<10) {
		e4='0'+e4;
	}
	if(e2>2030||e3>12||e4>31) {
		document.getElementById('newsinfo').innerHTML='<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgh4qEuwYos531uAYwsAk4sAk.png"/>1999-12-31';
	}
	if(e3<13&&e4<32&&e2<2031) {
		document.getElementById('newsinfo').innerHTML=/*'<img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAgh4qEuwYos531uAYwsAk4sAk.png"/>'*/'发布时间：'+e2+'-'+e3+'-'+e4+'\u3000发布人：管理员';
	}
	document.getElementById('newstitle').innerText=e;
	document.getElementById('newscontent').innerHTML=newsCC;
	document.getElementById('news-n-right').innerHTML=`
	   <tle>新闻详情</tle>
	   <p class="act">${e}</p>
	`;
}
function setTitle(titleName) {
	document.title=titleName+'-春潮编辑部_试运行';
}
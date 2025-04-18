document.getElementById('home').innerHTML=`
<div class="floater">
	<div class="width">
		<p>欢迎访问！<span><a href="http://www.spride2020.com/zhanqun/?from=春潮编辑部网站" target="_blank">春潮站群</a></span></p>
	</div>
</div>
<div style="background:#fff"><div class="width"><img src="https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgtIKIwAYojqr4vQQwjwM4aQ.png" class="logo"/></div></div>
<div class="nav" style="z-index:999;">
    <div class="width">
		<a id="navidk1" href="index.html">首页</a>
		<div class="drop">
			<a href="#" id="navidk2">向我们投稿</a>
			<div class="content">
				<a class="droplink" href="col.html?c=14">投稿须知</a>
				<a class="droplink" href="col.html?c=16">稿酬标准</a>
			</div>
		</div>
		<a id="navidk4" href="col.html?c=12">好文推荐</a>
		<a id="navidk5" href="col.html?c=19">作者目录</a>
		<a id="navidk6" href="col.html?c=15">关于我们</a>
		<a id="navidk7" href="col.html?c=13">新年献词</a>
	</div>
</div>
`;
document.getElementById('footer').innerHTML=`
<div class="footer">
	<div class="width">
		<p>Copyright © 2020-2023 春潮编辑部网站 All right reserved.<br/>地址：吉林省长春市朝阳区自由大路506号东北师大附中自由校区\u3000邮编：130021<br/>友情链接：<a href="/">春潮网</a><a href="/jubao/">违法和不良信息举报中心</a></p><p style="float:right;"><img src="https://13511974.s21i.faiusr.com/4/10/ABUIABAEGAAg4f7GrgYowPPxoAYwrgM4rgM.png" width="90px"/></p>
	</div>
</div>
`;

const urlParams = new URLSearchParams(window.location.search);
const getC = urlParams.get('c');
const getN = urlParams.get('n');
const path = window.location.pathname;
const judgeIfNameIsList = path.split('/').pop();
if (judgeIfNameIsList === 'col.html') {//！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
	switch (getC) {
	case '19': 
		$('#navidk5').addClass('act');
		title('作者目录');
		fill(`
			<div class="list-left">
			  <h1 class="top">作者目录</h1>
			</div><div class="list-right">
			<div class="newcon">
			<p>&nbsp;
			<!--<xw><a href="?n=448">塵 囂</a><t>2025-01-25</t></xw>
			<xw><a href="?n=438">Abel</a><t>2024-10-26</t></xw>
			<xw><a href="?n=395">307</a><t>2023-03-24</t></xw>
			<xw><a href="?n=386">上司几太</a><t>2022-12-15</t></xw>
			<xw><a href="?n=381">给你一拳</a><t>2022-11-20</t></xw>
			<xw><a href="?n=359">豆腐泡杀手</a><t>2022-05-30</t></xw>
			<xw><a href="?n=358">沐星雨人</a><t>2022-05-30</t></xw>
			<xw><a href="?n=357">铁 柱</a><t>2022-05-30</t></xw>
			<xw><a href="?n=356">牛老师</a><t>2022-05-30</t></xw>
			<xw><a href="?n=355">杨二狗</a><t>2022-05-30</t></xw>-->
			</p>
			</div>
			</div>
		`);
		break;
	case '16': 
		$('#navidk2').addClass('act');
		title('稿酬标准');
		fill(`
			<div class="list-left">
			  <h1 class="top">稿酬标准</h1>
			</div><div class="list-right">
			<div class="hengfu">
			   <img src="https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIOCay94FKLOhlLQCMIAFOMAM.jpg"/>
			   <h1>稿酬标准</h1>
			</div>
			<div class="newcon">
			<p>
			<xw><a href="?n=365">稿费标准</a><t>2022-07-10</t></xw>
			</p>
			</div>
			</div>
		`);
		break;
	case '15': 
		$('#navidk6').addClass('act');
		title('关于我们');
		fill(`
			<div class="list-left">
			  <h1 class="top">关于我们</h1>
			</div><div class="list-right">
			<div class="hengfu">
			   <h1>关于我们</h1>
			</div>
			<div class="newcon">
			<p><img src="https://13511974.s21i.faiusr.com/4/10/ABUIABAEGAAgsIOJwAYoiLOmrgcwuAg49Ac.png" width="100%"/></p>
			</div>
			</div>
		`);
		break;
	case '14': 
		$('#navidk2').addClass('act');
		title('投稿须知');
		fill(`
			<div class="list-left">
			  <h1 class="top">投稿须知</h1>
			</div><div class="list-right">
			<div class="hengfu">
			   <img src="https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIOCay94FKLOhlLQCMIAFOMAM.jpg"/>
			   <h1>投稿须知</h1>
			</div>
			<div class="newcon">
			<p>春潮SPRIDE欢迎您的来稿！<br/><br/><b>我们希望您的作品：</b></p>
			<p>1.文字流畅、叙事明晰、情感真挚；</p>
			<p>2.题材不限、体裁不限、标题自拟；<br/>3.稿件应可接受我们的修改；</p>
			<p>4.字数在480-3500之间为佳（诗歌类不受此限制）；</p>
			<p>5.文风具有鲜明个人特色为佳；</p>
			<p>6.时事热点/新闻评论类请先自审完成后再投稿；</p>
			<p>7.接受一稿多投，但投向我们的须为第一投；</p>
			<p><br/><b>投稿方式：</b><br/>以电子邮件附件形式发送您的作品至春潮投稿邮箱<img class="shocon" src="https://13511974.s21i.faiusr.com/4/10/ABUIABAEGAAggOmIwAYooMa7kwUwgAE4DA.png"/>，邮件标题注明“春潮投稿”，邮件正文注明作者名称。我们将在14个工作日内答复。14个工作日后如仍未收到回复，稿件可自行处理。</p>
			<p><br/><b>稿酬及支付方式：<br/></b>稿酬不定，最新标准详参<a href="?c=16">稿酬标准</a>栏目。支付方式可选择支付宝转账和微信支付转账。稿酬一般在文章发表成功后5个工作日内结清。由于本社稿酬为自筹资金，因此可能在结算时存在分批多次打款的情况，请您知悉。</p>
			<p><br/>再次感谢您对春潮投稿的热情参与！<br/><br/></p>
			</div>
			</div>
		`);
		break;
	case '13': 
		$('#navidk7').addClass('act');
		title('新年献词');
		fill(`
			<iframe id="xnxcd" scrolling="no" class="bigwz" src="https://www.spride2020.com/jbwz/xianci#home"></iframe>
		`);
		break;
	case '12': 
		$('#navidk4').addClass('act');
		title('好文推荐');
		fill(`
			<div class="list-left">
			  <h1 class="top">好文推荐</h1>
			</div><div class="list-right">
			<div class="hengfu">
			   <h1>好文推荐</h1>
			</div>
			<div class="newcon">
			<p>
			<xw><a href="?n=396">好文推荐之《葬尸湖》</a><t>2023-03-24</t></xw>
			<xw><a href="?n=380">好文推荐之《等待尘烟散去》</a><t>2022-11-20</t></xw>
			<xw><a href="?n=329">好文推荐之《再见，青华》</a><t>2021-06-12</t></xw>

			</p>
			</div>
			</div>
		`);
		break;
	default:
		switch (getN) {
		case '396': 
			fill(`

				<div class="news">
			     <tit>好文推荐之《葬尸湖》</tit>
			     <tim>2023-03-24</tim>
			     <p><b>作者：307</b></p>
			     <p><br/>在我很小很小的时候，就已经对那个湖充满好奇心了。<br/><br/>只是那时候还不理解——即使现在，也还没有理解——人们将尸体送入湖中意味着什么。那只是个湖而已。我是说，它的确很美，可它只是一处空间而已，土里或是水里，这是没有什么不同的。<br/><br/>但我看到如今的场景，却也只有想哭了。<br/><br/>在那时候，我还只是一个小丫头，那时我还不是他们共同的倾诉对象。但那时候我还是在听他们讲，只不过是我强拽着要他们讲，现在是他们自己主动讲。那次，我看到部落里所有的桩子上面都插上了祭品，桌上摆满了水果，就好像盛大的活动，可是人们没有笑，都是一副悲伤的样子，小声哭泣着向后山走去。我知道父亲是不会告诉我发生了什么的，他人一向很古板。他不告诉我的，我就去问阿玛，阿玛告诉我，是首领，我们的族长死了。那时我知道了，所有死去的人，都是要送进后山的湖里的。但我对此并不理解。<br/><br/>除了阿玛，我还喜欢去找他的朋友阿古玩，他最会打猎，他经常会和我讲部落里的各种纷争，那些我是听不懂的，但是每次听到谁和谁打起来，我就兴奋起来了，会问他打的好不好看，用了什么打。他每次都会笑我是个小孩子，什么都不懂，然后用夸张的说法讲给我听。那次，他满脸愤怒，身上有伤，我不敢问，只能等他讲。他瞪着空气好一会，才说，是诺布打的，因为阿古强抢了他的猎物，阿古说他恨。<br/><br/>诺布是出去学过新鲜东西的人，他从外面带来了我们没有的东西……<ydqw></ydqw></p>
			    </div>
			`);
			break;
		case '380': 
			fill(`

				<div class="news">
			     <tit>好文推荐之《等待尘烟散去》</tit>
			     <tim>2022-11-20</tim>
			     <p><b>作者：给你一拳</b></p>
			     <p><br/>疫情三岁了。在三岁生日的前夕，我们总算有了一个真正意义上能够衡量应对方案的明文。<br/>我家的后生曾经问我：“哥，你小时候怎么做的核酸”，本来话到嘴边的一句“我小时候没有那玩意”被憋回去了，换成了一句“忘了”。<br/><br/>怎么感觉好像真的忘了以前的那段日子。可能忘了2019年末的紧张、2020年初的困难、也可能忘了2021年整年的迷茫、最后都换成了一句2022年的“麻了”。<br/>三年，发生了什么，只怕还是那句“互联网没有记忆”。<br/><br/>然后，我们迎来了二十条，一个旨在“放宽防疫政策”，但却“不意味着躺平、放开”的新的规则。放宽不等于减轻。“既要、又要”的难度给防疫工作带来的不是减轻工作压力，就像把手里笔换成了柴火棍然后创作一幅和之前一样的画。<br/><br/>何况看起来之前的那幅画也没好看到哪去。<br/><br/>12日的国务院联防联控机制新闻发布会上，国家卫生健康委相关负责人介绍……<ydqw></ydqw></p>
			    </div>
			`);
			break;
		case '365': 
			fill(`

				<div class="news">
			     <tit>稿费标准</tit>
			     <tim>2022-07-10</tim>
			     <p><br/><b>适用范围：</b><br/>自2022年7月10日起，新的稿费标准发布之日止。</p>
			     <p><br/><b>稿费标准：</b><br/>所有过审稿件：0元。</p>
			    </div>
			`);
			break;
		case '329': 
			fill(`

				<div class="news">
			     <tit>好文推荐之《再见，青华》</tit>
			     <tim>2021-06-12</tim>
			     <p><b>作者：NLS</b></p>
			     <p>住在长庆街两侧的人们每年都要观看一次这种附中学生的“迁徙”，因此他们大抵对这已经见怪不怪：<br/><br/>不就是从这个学校的一个校区搬到另一个校区，走不到1公里的路嘛。<br/><br/>此时此刻，在昏白交接的时刻之中，我作为这迁徙人群中的一员，大包小包的走在长庆街上。<br/><br/>没下过雨，空气异常干燥闷热，似乎预示着明天的大暴雨将至。我止不住的流汗，空气好像也是咸的。<br/><br/>这几天一直这样。虽然没人当面指出，但离开青华之前的气氛的确和从前不一样。上周四数学大练习之前，还由于不明原因在天井前聚集，也不知道是谁（我猜是9班的某些猴子们）还喊了句<br/><br/>“以雷霆击碎黑暗”<br/><br/>掌声和呼喊预料般的肆意在天井之中，不知为何我有些激动，血液里流淌着的可燃物隐隐约约暗流涌动。那天大练习我考得很次，没过70分。<br/><br/>戴眼镜穿灰衣，永远不苟言笑的男副主任第二天说，他查了一到四楼的所有监控也没搞明白到底发生了什么事。<br/><br/>事实上，的确无事发生，但故事却也时刻在发生，并随时将归于终结……<ydqw></ydqw></p>
			    </div>
			`);
			break;
		default:
			alert('parameter illegal');
			window.location.href='/ccbjb/';
			break;
		}
		break;
	}
} else if (judgeIfNameIsList === 'col') {//！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
		alert('no permission access');
		window.location.href='/ccbjb/';
} else if (judgeIfNameIsList === 'index') {//！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
		alert('no permission access');
		window.location.href='/ccbjb/';
} else {

}
function fill(element) {
	document.getElementById('list-name').innerHTML=element;
}
function title(name) {
	document.title='春潮编辑部-'+name;
}
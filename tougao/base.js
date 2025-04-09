document.getElementById('home').innerHTML=`
<!--<div class="floater">
	<div class="width">
		<p>欢迎访问！</p>
	</div>
</div>-->
<div class="width">
	<div class="top">
	</div>
</div>
<div class="nav">
	<div class="width">
	    <img class="logO" src="https://13511974.s21i.faiusr.com/4/10/ABUIABAEGAAghLXYvwYo7NSX7AcwsAk4sAk.png"/>
		<h1>春潮投稿平台</h1>
		<a id="navidk1" href="/tougao/">首页</a>
		<a id="navidk2" href="list?c=col-14">投稿须知</a>
		<a id="navidk3" href="list?c=col-16">稿酬标准</a>
		<a id="navidk4" href="list?c=col-12">最新通知</a>
		<a id="navidk5" href="list?c=col-19">优秀作品</a>
		<a id="navidk6" href="list?c=col-15">关于我们</a>
		<div class="drop" style="float: right;">
			<a style="font-size: 16px;" href="#">春潮站群&nbsp;<img src="https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg3diVvwYo9JDz0QMwsAk4jwg.png" class="dropicon" /></a>
			<div class="content">
				<a class="droplink">暂无内容</a>
			</div>
		</div>
	</div>
</div>
`;
document.getElementById('footer').innerHTML=`
<div class="footer">
	<div class="width">
		<p>2023 爱国和谐</p>
	</div>
</div>
`;

const urlParams = new URLSearchParams(window.location.search);
const getC = urlParams.get('c');
const getN = urlParams.get('n');
const path = window.location.pathname;
const judgeIfNameIsList = path.split('/').pop();
if (judgeIfNameIsList === 'list') {
	switch (getC) {
	case 'col-19': 
		$('#navidk5').addClass('act');
		title('优秀作品');
		fill(`
			<div class="news">
			<p>
			<xw><a href="?n="></a><t></t></xw>
			</p>
			</div>
		`);
		break;
	case 'col-16': 
		$('#navidk3').addClass('act');
		title('稿酬标准');
		fill(`
			<div class="news">
			<p>
			<xw><a href="?n=385">最新稿费标准</a><t>2023-12-09</t></xw>
			</p>
			</div>
		`);
		break;
	case 'col-15': 
		$('#navidk6').addClass('act');
		title('关于我们');
		fill(`
			<img src="https://13511974.s21i.faiusr.com/4/10/ABUIABAEGAAg68y_rgYoxZbi4QYwpA04jQM.png" class="fuHead"/>
			<div class="news">
			   <p><br/><br/>
			       春潮投稿平台，春潮微信公众号投稿管理、最新通知。
			   <br/><br/></p>
			</div>

			</div>
		`);
		break;
	case 'col-14': 
		$('#navidk2').addClass('act');
		title('投稿须知');
		fill(`
			<div class="news">
			<p>
			<xw><a href="?n=337">投稿须知</a><t>2022-01-10</t></xw>
			</p>
			</div>
		`);
		break;
	case 'col-12': 
		$('#navidk4').addClass('act');
		title('最新通知');
		fill(`
			<div class="news">
			<p>
			<xw><a href="?n="></a><t></t></xw>
			</p>
			</div>
		`);
		break;
	default:
		switch (getN) {
		case '385': 
			fill(`

				<div class="news">
			     <tit>最新稿费标准</tit>
			     <tim>2023-12-09</tim>
			     <p>最新稿费注册</p>
			    </div>
			`);
			break;
		default:
			alert('parameter illegal');
			window.location.href='/tougao/';
			break;
		}
		break;
	}
} else if (judgeIfNameIsList === 'list.html') {
		alert('no permission access');
		window.location.href='/tougao/';
} else if (judgeIfNameIsList === 'index.html') {
		alert('no permission access');
		window.location.href='/tougao/';
} else {

}
function fill(element) {
	document.getElementById('list-name').innerHTML=element;
}
function title(name) {
	document.title=' --'+name;
}
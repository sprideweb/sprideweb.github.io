function isWeixin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
if (isWeixin()) {
    showWeixinContent();
} else {
    showDefaultContent();
}
function showWeixinContent() {
	document.getElementById('home').innerHTML=`
	<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style type="text/css">
	body {background:#f0f0f0;}
	div {display:block;position:fixed;top:45%;left:50%;transform:translate(-50%,-50%);max-width:60%;width:200px;text-align:center;}
	div h1 {font-size:20px;color:#07c160;margin-top:20px;}
	div p {font-size:13px;color:#9f9f9f;}
	img {width:100%;}
	</style>
	</head>
	<body>
	<div>
	<img src="https://13511974.s21i.faiusr.com/4/10/ABUIABAEGAAg4f7GrgYowPPxoAYwrgM4rgM.png"/>
	<h1>春潮向海</h1>
	<p>生命如浪潮翻滚起落</p>
	<p>id: spring_tide2020</p>
	</div>
	</body>
	`
	document.title='春潮向海';
}
function showDefaultContent() {
	document.getElementById('home').innerHTML='<pre>default page</pre>';
}

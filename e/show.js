document.getElementById("load").style.display = "none";
document.getElementById("finish").style.display = "block";
document.getElementById("topjs").innerHTML = "<img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg35rdtgYojuTvoAcwvgo45QE.png\" width=\"100%\" style=\"vertical-align: bottom;\" /><ul><li><a href=\"index.html\">网站首页</a></li><li><a href=\"show.html?sid=47\">关于本网</a></li><li><a href=\"show.html?sid=44\">邮箱申领</a></li><li><a></a></li></ul>";
document.getElementById("bottomjs").innerHTML = "<br/><div class=\"dbottom\"><br/><p>版权所有 Copyright (c) 2020- 2022 春潮网·信息化网 all right reserved.<br/> 春潮网信息化办主办 地址：长春市清华路818号 <br/>网站备案号：内部(2020)07号 吉ICP备34712870号-6 监管：吉林省网信办</p></div>";
document.getElementById("xxhjsdt").innerHTML = "<h1><a href=\"https://www.gov.cn//xinwen/2022-06/30/content_5698573.htm\" target=\"_blank\">习近平：更好把握和运用党的百年奋斗历史经验</a></h1><p><a href=\"https://www.gov.cn//xinwen/2022-06/30/content_5698570.htm\" target=\"_blank\">习近平6月30日下午乘专列抵达香港</a></p><p><a href=\"https://www.gov.cn//xinwen/2022-06/24/content_5697602.htm\" target=\"_blank\">新华时评：保护黑土地就是保护每个人的饭碗</a></p><p><a href=\"https://www.gov.cn//xinwen/2022-06/24/content_5697417.htm\" target=\"_blank\">金砖国家领导人第十四次会晤举行 习近平主持会晤并发表重要讲话</a></p>";
document.getElementById("gonggao").innerHTML = "<a href=\"show.html?sid=69\">关于春潮网域名变更的公告</a>";
const urlParams = new URLSearchParams(window.location.search);
const aNum = urlParams.get('sid');
0





if(aNum === "69") {
	    binfo();
}
if(aNum === "47") {
	    binfo("关于本网","2021/10/26","Administrator","由春潮信息化办公室主办，服务数字化、信息化建设，促进网络发展。");
	    dteHide();
}
if(aNum === "44") {
	    binfo("申领春潮网邮箱","2021/08/02","信息化办","近年来，随着因特网的逐渐普及，电子邮件逐渐成为老百姓沟通交流的主要方式。为回馈新老用户，春潮网全部用户现在均可申领春潮网邮箱账户（尾缀：@spride2020.com，账户名可自定义一次），现在下定申请享受早鸟价1299元/年。2022年1月1日后即将恢复为原价2399元/年。<br/><br/>请申请用户下载<s2>下方《春潮网邮箱账户申请表》表格并填写，然后以附件形式发送至邮箱hello@spride2020.com，标题写明“邮箱申请”。审核结果和付款方式将于7个工作日内以电子邮件形式告知您。<br/><br/>注：1.本活动仅限202</s2>2年1月 1日前。 2.因疫情原因，只受理线上申领。<br/><br/><center><img src=\"https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIMWp7NUFKO_wxNUCMIAKONgE.jpg\" width=\"92%\"/></center><br/><h3>附件</h3>1. <a href=\"download.html?did=3\" target=\"_blank\">《春潮网邮箱账户申请表（早鸟1299）》</a>");
}







var bt1 = document.getElementById("showtitle").innerText;
document.title = bt1 + " -春潮信息化网";
function binfo(x1,x2,x3,y1) {
	document.getElementById("showtitle").innerText = x1;
	document.getElementById("showdate").innerText = x2;
	document.getElementById("showauthor").innerText = x3;
	document.getElementById("showcontent").innerHTML = y1;
}
function dteHide() {
	document.getElementById("dte_1").style.display = "none";
}

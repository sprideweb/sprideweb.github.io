document.getElementById("load").style.display = "none";
document.getElementById("finish").style.display = "block";

document.getElementById("topjs").innerHTML = "<img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg9-LNtgYom8TNvQEwqAg4ygE.png\" width=\"100%\" style=\"vertical-align: bottom;\" /><ul><li><a href=\"index.html\">网站首页</a></li><li><a href=\"show.html?sid=47\">部门介绍</a></li></ul>";
document.getElementById("bottomjs").innerHTML = "<br/><div class=\"dbottom\"><br/><p>Copyright (c) 2020- 2022 春潮信息化办公室、春潮互联网中心 all right reserved.<br/>联络地址：山东省威海市文登区小观镇紫草泊村福地韩国商业街 <br/>网站备案号：内部(2020)07号 Feedback: hello#spride.asia（#替换为@）</p></div>";
document.getElementById("xxhjsdt").innerHTML = "<h1><a href=\"https://www.gov.cn//xinwen/2022-06/30/content_5698573.htm\" target=\"_blank\">习近平：更好把握和运用党的百年奋斗历史经验</a></h1><p><a href=\"https://www.gov.cn//xinwen/2022-06/30/content_5698570.htm\" target=\"_blank\">习近平6月30日下午乘专列抵达香港</a></p><p><a href=\"https://www.gov.cn//xinwen/2022-06/24/content_5697602.htm\" target=\"_blank\">新华时评：保护黑土地就是保护每个人的饭碗</a></p><p><a href=\"https://www.gov.cn//xinwen/2022-06/24/content_5697417.htm\" target=\"_blank\">金砖国家领导人第十四次会晤举行 习近平主持会晤并发表重要讲话</a></p>";
document.getElementById("gonggao").innerHTML = "<a href=\"show.html?sid=92\">停机公告</a><a href=\"show.html?sid=91\">常规维护公告</a><a href=\"show.html?sid=86\">域名搬迁公告</a>";

const urlParams = new URLSearchParams(window.location.search);
const pidValue = urlParams.get('sid');
if(pidValue === "47") {
		document.getElementById("showtitle").innerText = "部门介绍（新）";
		document.getElementById("showdate").innerText = "2021/10/26";
		document.getElementById("showauthor").innerText = "信息化办";
		document.getElementById("showcontent").innerHTML = "";
}
if(pidValue === "92") {
		document.getElementById("showtitle").innerText = "停机公告";
		document.getElementById("showdate").innerText = "2024/08/29";
		document.getElementById("showauthor").innerText = "信息化办";
		document.getElementById("showcontent").innerHTML = "&nbsp;因升级维护原因，春潮网总站（域名地址：<a href=\"https://spride.asia\">https://spride.asia/index</a>）将于2024年8月30日中午12时整开始停机。期间，您将不能正常访问春潮网总站页面。升级维护将于近期完成。感谢您的理解和支持。";
}
if(pidValue === "91") {
		document.getElementById("showtitle").innerText = "常规维护公告";
		document.getElementById("showdate").innerText = "2023/12/26";
		document.getElementById("showauthor").innerText = "信息化办";
		document.getElementById("showcontent").innerHTML = "池钓离吻花将2024年第一次常规维护将于2024年1月1日开始，其游戏官网（域名地址：<a href=\"https://spride.asia/eat-culture/\">https://spride.asia/eat-culture/</a>）将于2023年12月28日0:00起暂停访问，恢复时间待定。";
}
if(pidValue === "86") {
		document.getElementById("showtitle").innerText = "域名搬迁公告";
		document.getElementById("showdate").innerText = "2023/12/19";
		document.getElementById("showauthor").innerText = "春潮信息化";
		document.getElementById("showcontent").innerHTML = "各下属网站（群）：<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;春潮网总站将于近日搬迁至新域名：spride.asia，各下属域名地址同步跟随变更。请您知悉。同时，现有老域名将于新域名地址变更后停止使用。<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;春潮信息化办<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023年12月19日";
}
var bt1 = document.getElementById("showtitle").innerText;
document.title = bt1 + " -春潮信息化网";

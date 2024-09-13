document.getElementById("load").style.display = "none";
document.getElementById("finish").style.display = "block";
document.getElementById("topjs").innerHTML = "<img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg35rdtgYojuTvoAcwvgo45QE.png\" width=\"900px\" style=\"vertical-align: bottom;\" /><ul><li><a href=\"index.html\">网站首页</a></li><li><a href=\"show.html?sid=89\">关于我们</a></li><li><a href=\"show.html?sid=47\">业务办理</a></li></ul>";
// 获取完整的当前页面URL
var currentUrl = window.location.href;

// 使用字符串方法来提取文件名
var fileName = currentUrl.substring(currentUrl.lastIndexOf('/') + 1,currentUrl.lastIndexOf('/') + 5);

if(fileName == 'show') {
	document.getElementById("top-newjs").innerHTML = "<div class=\"twidth\"><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgxaGMtwYoisahpQYwqQU4oQE.png\" height=\"80px\" style=\"vertical-align: bottom;padding:30px 10px;\" /></div><ul><div class=\"twidth\"><li><a href=\"index.html\">网站首页</a></li><li><a href=\"show.html?sid=89\">关于我们</a></li><li><a href=\"show.html?sid=47\">业务办理</a></li></div></ul>";
}
document.getElementById("bottomjs").innerHTML = "<br/><div class=\"dbottom\"><br/><p>版权所有 Copyright (c) 2020- 2022春潮信息化网 all right reserved.<br/> 春潮信息化办公室 主办 地址：长春市清华路818号 <br/>网站备案号：内部(2020)07号 吉ICP备34712870号-6 <iframe src=\"https://spride.asia/e/v-iframe-sm.html?id=CC2007BS4&&fsz=14\" style=\"display:inline-block;border: none;width: auto;height: 13px;width: 220px!important;\"></iframe></p></div>";
document.getElementById("xxhjsdt").innerHTML = "<h1><a href=\"https://www.gov.cn//xinwen/2021-02/12/content_5586934.htm\" target=\"_blank\">国际奥委会主席巴赫向习近平致新春贺函</a></h1><p><a href=\"https://www.gov.cn//xinwen/2021-02/09/content_5586367.htm\" target=\"_blank\">习近平：要坚持共商共建、务实均衡、开放包容、创新进取的合作原则</a></p><p><a href=\"https://www.gov.cn//xinwen/2021-01/11/content_5578940.htm\" target=\"_blank\">省部级主要领导干部学习贯彻党的十九届五中全会精神专题研讨班开班</a></p><p><a href=\"https://www.gov.cn//xinwen/2021-01/11/content_5578937.htm\" target=\"_blank\">习近平就印度尼西亚客机失事向印尼总统佐科致慰问电</a></p><p><a href=\"https://www.gov.cn//xinwen/2020-12/31/content_5575834.htm\" target=\"_blank\">中俄两国元首互致新年贺电 中俄两国总理互致新年贺电</a></p><p><a href=\"https://www.gov.cn//xinwen/2020-12/19/content_5571288.htm\" target=\"_blank\">郭声琨主持召开中央政法委员会全体会议学习贯彻习近平总书记重要讲话和中...</a></p>";
document.getElementById("gonggao").innerHTML = "<a href=\"show.html?sid=104\">学习宝视频网停机公告</a><a href=\"show.html?sid=103\">春潮网总站停机公告</a>";
const urlParams = new URLSearchParams(window.location.search);
const aNum = urlParams.get('sid');







if(aNum === "47") {
	    binfo("<span style=\"font-size: 28px;color: #000\">信息化业务办理</span>","","","<ywbox onclick=\"alert('敬请期待');\"><i class=\"bi bi-shield-check\"></i><h1>可信网站验证</h1><p>Trusted Verify</p></ywbox><ywbox onclick=\"jp('44');\"><i class=\"bi bi-envelope-at\"></i><h1>邮箱申领</h1><p>Mailbox Application</p></ywbox><ywbox onclick=\"jp('36');\"><i class=\"bi bi-flag\"></i><h1>廉洁举报</h1><p>Reports</p></ywbox>");
	    dteHide();
}
if(aNum === "36") {
	    binfo("春潮网廉洁问题举报专区","2021/05/29","","<iframe src=\"https://www.wjx.cn/xz/262324765.aspx\" style=\"height:600px;\"></iframe>");
}
if(aNum === "44") {
	    binfo("申领春潮网邮箱","2021/08/02","信息化办","近年来，随着因特网的逐渐普及，电子邮件逐渐成为老百姓沟通交流的主要方式。为回馈新老用户，春潮网全部用户现在均可申领春潮网邮箱账户（尾缀：@spride2020.com，账户名可自定义一次），现在下定申请享受早鸟价1299元/年。2022年1月1日后即将恢复为原价2399元/年。<br/><br/>请申请用户下载<s2>下方《春潮网邮箱账户申请表》表格并填写，然后以附件形式发送至邮箱hello@spride2020.com，标题写明“邮箱申请”。审核结果和付款方式将于7个工作日内以电子邮件形式告知您。<br/><br/>注：1.本活动仅限202</s2>2年1月 1日前。 2.因疫情原因，只受理线上申领。<br/><br/><center><img src=\"https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIMWp7NUFKO_wxNUCMIAKONgE.jpg\" width=\"92%\"/></center><br/><h3>附件</h3>1. <a href=\"download.html?did=3\" target=\"_blank\">《春潮网邮箱账户申请表（早鸟1299）》</a>");
}
if(aNum === "89") {
	    binfo("关于我们","2024/01/20","system","<br/>习近平总书记指出：“网络安全和信息化是一体之两翼、驱动之双轮，必须统一谋划、统一部署、统一推进、统一实施。做好网络安全和信息化工作，要处理好安全和发展的关系，做到协调一致、齐头并进，以安全保发展、以发展促安全，努力建久安之势、成长治之业。”<h3><br/>春潮网信息化工作办公室的主要职责是统筹协调管理春潮网和春潮文化信息化建设项目，全面服务春潮网和春潮文化数字化、信息化建设。成立以来，协助总站完成了惊时电子刊网、学习宝网等网站的架设，开发了学习宝APP等移动应用，建立了完善的设计-开发-运营-维护标准化作业链条。</h3><br/><br/><center><img src=\"https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIMWp7NUFKO_wxNUCMIAKONgE.jpg\" width=\"92%\"></center><br/>原文地址：https://spride.asia/e/show.html?sid=89");
}

if(aNum === "102") {
	    binfo("关于可信网站验证中心","2024/08/22");
}
if(aNum === "103") {
	    binfo("春潮网总站停机公告","2024/08/29","","春潮网总站（<a href=\"https://spride.asia\">http://spride.asia</a>）自2024年08月30日12时起停机维护，恢复时间待定。期间，您将不能正常访问春潮网总站全部内容。<p class=\"ta-r\"><br/>信息化办<br/>2024.8.29</p>");
}
if(aNum === "104") {
	    binfo("学习宝视频网停机公告","2024/09/13","","春潮网下设学习宝视频网（<a href=\"https://spride.asia/baovideo/\">http://spride.asia/baovideo/</a>）自2024年9月21日0时起停机维护，恢复时间待定。<p class=\"ta-r\"><br/>信息化办<br/>2024.9.13</p>");
}








var bt1 = document.getElementById("showtitle").innerText;
document.title = bt1 + " -春潮信息化网";
function binfo(x1,x2,x3,y1) {
	document.getElementById("showtitle").innerHTML = x1;
	document.getElementById("showdate").innerText = x2;
	document.getElementById("showauthor").innerText = x3;
	document.getElementById("showcontent").innerHTML = y1;
}
function dteHide() {
	document.getElementById("dte_1").style.display = "none";
}
function jp(link_ad) {
	window.location.href = 'https://spride.asia/e/show.html?sid='+link_ad;
}

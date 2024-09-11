document.getElementById("load").style.display = "none";
document.getElementById("finish").style.display = "block";
document.getElementById("topjs").innerHTML = "<img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg35rdtgYojuTvoAcwvgo45QE.png\" width=\"900px\" style=\"vertical-align: bottom;\" /><ul><li><a href=\"index.html\">网站首页</a></li><li><a href=\"show.html?sid=47\">关于本网</a></li><li><a href=\"show.html?sid=44\">邮箱申领</a></li><li><a></a></li></ul>";
document.getElementById("bottomjs").innerHTML = "<br/><div class=\"dbottom\"><br/><p>版权所有 Copyright (c) 2020- 2024 春潮信息化网 all right reserved.<br/> 春潮信息化办公室 主办 地址：长春市清华路818号 <br/>网站备案号：内部(2020)07号 吉ICP备34712870号-6 <iframe src=\"https://spride.asia/e/v-iframe-sm.html?id=CC2007BS4&&fsz=14\" style=\"display:inline-block;border: none;width: auto;height: 13px;width: 280px!important;\"></iframe></p></div>";
document.getElementById("xxhjsdt").innerHTML = "<h1><a href=\"https://www.gov.cn//xinwen/2021-02/12/content_5586934.htm\" target=\"_blank\">国际奥委会主席巴赫向习近平致新春贺函</a></h1><p><a href=\"https://www.gov.cn//xinwen/2021-02/09/content_5586367.htm\" target=\"_blank\">习近平：要坚持共商共建、务实均衡、开放包容、创新进取的合作原则</a></p><p><a href=\"https://www.gov.cn//xinwen/2021-01/11/content_5578940.htm\" target=\"_blank\">省部级主要领导干部学习贯彻党的十九届五中全会精神专题研讨班开班</a></p><p><a href=\"https://www.gov.cn//xinwen/2021-01/11/content_5578937.htm\" target=\"_blank\">习近平就印度尼西亚客机失事向印尼总统佐科致慰问电</a></p><p><a href=\"https://www.gov.cn//xinwen/2020-12/31/content_5575834.htm\" target=\"_blank\">中俄两国元首互致新年贺电 中俄两国总理互致新年贺电</a></p><p><a href=\"https://www.gov.cn//xinwen/2020-12/19/content_5571288.htm\" target=\"_blank\">郭声琨主持召开中央政法委员会全体会议学习贯彻习近平总书记重要讲话和中...</a></p>";
document.getElementById("gonggao").innerHTML = "<a href=\"show.html?sid=103\">春潮信息化网全新UI样式测试上线</a><a href=\"show.html?sid=102\">可信网站验证中心使用手册</a>";
const urlParams = new URLSearchParams(window.location.search);
const aNum = urlParams.get('sid');







if(aNum === "47") {
	    binfo("关于本网","2021/10/26","Administrator","<h3 style=\"font-weight:normal;\">由春潮信息化办公室主办的春潮信息化网，全面服务春潮网数字化、信息化建设，发布本网动态，促进本网发展。</h3><br/><br/><center><img src=\"https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIKbz1NsFKMTh5jAwgA84-gk.jpg\" width=\"82%\"/></center><br/>");
	    dteHide();
}
if(aNum === "44") {
	    binfo("申领春潮网邮箱","2021/08/02","信息化办","近年来，随着因特网的逐渐普及，电子邮件逐渐成为老百姓沟通交流的主要方式。为回馈新老用户，春潮网全部用户现在均可申领春潮网邮箱账户（尾缀：@spride2020.com，账户名可自定义一次），现在下定申请享受早鸟价1299元/年。2022年1月1日后即将恢复为原价2399元/年。<br/><br/>请申请用户下载<s2>下方《春潮网邮箱账户申请表》表格并填写，然后以附件形式发送至邮箱hello@spride2020.com，标题写明“邮箱申请”。审核结果和付款方式将于7个工作日内以电子邮件形式告知您。<br/><br/>注：1.本活动仅限202</s2>2年1月 1日前。 2.因疫情原因，只受理线上申领。<br/><br/><center><img src=\"https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIMWp7NUFKO_wxNUCMIAKONgE.jpg\" width=\"92%\"/></center><br/><h3>附件</h3>1. <a href=\"download.html?did=3\" target=\"_blank\">《春潮网邮箱账户申请表（早鸟1299）》</a>");
}
if(aNum === "102") {
	    binfo("可信网站验证中心使用手册","2024/08/22","可信验证网","即将更新中...<h3><a href=\"show.html?sid=104\"></a></h3>");
}
if(aNum === "103") {
	    binfo("春潮信息化网全新UI样式测试上线","2024/09/11","信息化网","春潮信息化网全新UI样式于2024年9月12日0时在本网除首页外的所有页面上线测试。新版网页视觉上更加现代化，设计更合理、阅读更舒适。新版网站开放效果反馈&建议反馈邮箱，地址：hello@spride.asia（备注：信息化网改版意见反馈）<br/>&nbsp;<br/>后续将根据反馈和实际效果对UI界面进行进一步调整和美化，并设计新版UI网站首页。<p class=\"ta-r\">&nbsp;<br/>信息化办<br/>2024年9月11日</p>");
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

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
document.getElementById("bottomjs").innerHTML = "<br/><div class=\"dbottom\"><br/><p>版权所有 Copyright (c) 2020- 2021 春潮信息化网 all right reserved.<br/> 春潮信息化办公室 主办 地址：长春市清华路818号 <br/>网站备案号：内部(2020)07号 吉ICP备34712870号-6 技术支持：<a href=\"http://www.chunchao-hengtian.cn/\" target=\"_blank\">恒天互联</a> <iframe src=\"https://spride.asia/e/v-iframe-sm.html?id=CC2007BS4&&fsz=14\" style=\"display:inline-block;border: none;width: auto;height: 13px;width: 220px!important;\"></iframe></p></div>";
document.getElementById("xxhjsdt").innerHTML = "<h1><a href=\"https://www.gov.cn//xinwen/2021-02/12/content_5586934.htm\" target=\"_blank\">国际奥委会主席巴赫向习近平致新春贺函</a></h1><p><a href=\"https://www.gov.cn//xinwen/2021-02/09/content_5586367.htm\" target=\"_blank\">习近平：要坚持共商共建、务实均衡、开放包容、创新进取的合作原则</a></p><p><a href=\"https://www.gov.cn//xinwen/2021-01/11/content_5578940.htm\" target=\"_blank\">省部级主要领导干部学习贯彻党的十九届五中全会精神专题研讨班开班</a></p><p><a href=\"https://www.gov.cn//xinwen/2021-01/11/content_5578937.htm\" target=\"_blank\">习近平就印度尼西亚客机失事向印尼总统佐科致慰问电</a></p><p><a href=\"https://www.gov.cn//xinwen/2020-12/31/content_5575834.htm\" target=\"_blank\">中俄两国元首互致新年贺电 中俄两国总理互致新年贺电</a></p><p><a href=\"https://www.gov.cn//xinwen/2020-12/19/content_5571288.htm\" target=\"_blank\">郭声琨主持召开中央政法委员会全体会议学习贯彻习近平总书记重要讲话和中...</a></p>";
document.getElementById("gonggao").innerHTML = "<a href=\"show.html?sid=103\">维护信息20240829</a>";
const urlParams = new URLSearchParams(window.location.search);
const aNum = urlParams.get('sid');






if(aNum === "36") {
	    binfo("春潮网廉洁问题举报专区","2021/05/29","","<iframe src=\"https://www.wjx.cn/xz/262324765.aspx\" style=\"height:600px;\"></iframe>");
}
if(aNum === "37") {
	    binfo("<span style=\"font-size: 24px;color: #ea0000;\">春潮网不良信息举报中心</span>","","","");
	    dteHide();
}
if(aNum === "47") {
	    binfo("<span style=\"font-size: 28px;color: #000\">信息化业务办理</span>","","","<ywbox onclick=\"alert('敬请期待');\"><i class=\"bi bi-shield-check\"></i><h1>可信网站验证</h1><p>Trusted Verify</p></ywbox><ywbox onclick=\"jp('44');\"><i class=\"bi bi-envelope-at\"></i><h1>邮箱申领</h1><p>Mailbox Application</p></ywbox><ywbox onclick=\"jp('36');\"><i class=\"bi bi-flag\"></i><h1>廉洁举报</h1><p>Reports</p></ywbox><ywbox onclick=\"jp('37');\"><i class=\"bi bi-flag\"></i><h1>不良信息举报</h1><p>Reports</p></ywbox>");
	    dteHide();
}

if(aNum === "44") {
	    binfo("申领春潮网邮箱","2021/08/02","信息化办","近年来，随着因特网的逐渐普及，电子邮件逐渐成为老百姓沟通交流的主要方式。为回馈新老用户，春潮网全部用户现在均可申领春潮网邮箱账户（尾缀：@spride2020.com，账户名可自定义一次），现在下定申请享受早鸟价1299元/年。2022年1月1日后即将恢复为原价2399元/年。<br/><br/>请申请用户下载下方《春潮网邮箱账户申请表》表格并填写，然后以附件形式发送至邮箱hello@spride2020.com，标题写明“邮箱申请”。审核结果和付款方式将于7个工作日内以电子邮件形式告知您。<br/><br/>注：1.本活动仅限2022年1月1日前。 2.因疫情原因，只受理线上申领。<br/><br/><center><img src=\"https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIMWp7NUFKO_wxNUCMIAKONgE.jpg\" width=\"92%\"/></center><br/><h3>附件</h3>1. <a href=\"download?did=3\" target=\"_blank\">《春潮网邮箱账户申请表（早鸟1299）》（附件下载）</a>");
}
if(aNum === "89") {
	    binfo("关于我们","2024/01/20","信息化小编","<br/>习近平总书记指出：“网络安全和信息化是一体之两翼、驱动之双轮，必须统一谋划、统一部署、统一推进、统一实施。做好网络安全和信息化工作，要处理好安全和发展的关系，做到协调一致、齐头并进，以安全保发展、以发展促安全，努力建久安之势、成长治之业。”<br/><br/>春潮网信息化工作办公室的主要职责是统筹协调管理春潮网信息化建设项目，全面服务春潮网数字化、信息化建设。<br/><br/><br/><center><img src=\"https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIMWp7NUFKO_wxNUCMIAKONgE.jpg\" width=\"92%\"></center><h6>责任编辑：<br/>网站编辑： </h6>");
}

if(aNum === "102") {
	    binfo("关于可信网站验证中心","2024/08/22","kxwzyzzx","可信网站认证平台致力于打造互联网诚信体系中的最权威认证平台，目前已成为业界内资深权威的认证中心，作为互联网行业优秀服务机构，相信只有客户满意平台才能发展，在打造客户满意度的同时，我们不断汲取先进的管理理念，凭借资深的行业分析能力、完善的售后服务体系、及丰富的业内资源等优势，提升认证行业核心竞争力。可信网站认证平台将以诚信、激情、敬业的专业服务团队，秉承“客户第一”的服务宗旨，打造业内一流的互联网认证平台。为进一步促进中国互联网产业的健康发展，推进中国互联网安全认证行业规范建设，提高信用服务领域企业的创新水平，积极促进行业规范建设，协助推动公平公正的企业网站可信认证和企业信用评价工作，为企业提供免费的网站认证和企业信用评级的交流平台。<br/><br/><img src=\"https://www.kxnet.cn/images/cxtx.jpg\">");
}
if(aNum === "103") {
	    binfo("维护信息20240829","2024/08/29","tany","春潮网总站（<a href=\"https://spride.asia\">http://spride.asia</a>）自2024年08月30日12时起停机维护，恢复时间待定。期间，您将不能正常访问春潮网总站全部内容。<p class=\"ta-r\"><br/>信息化办<br/>2024.8.29</p>");
}




if(document.getElementById('showtitle').innerHTML == '') {
	document.getElementById('finish').style.display = 'none';
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

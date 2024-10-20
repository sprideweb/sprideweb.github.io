

addHome('26','2023年第二届“云端的单身情歌”线上合唱活动成功举办','11/13');


function hashChange() {
    var hashA = window.location.hash.substr(1);
    var hashB = window.location.hash.substr(1,5);
    var hashC = window.location.hash.substr(6);
    if(hashB === '/') {
        showLoading();
        allHide();
        showE("indexbox",100);
        document.title = "云端的单身情歌";
    }
    if(hashB === '/page') {
        showLoading();
        allHide();
        clearPageBox();
        showE("pagebox",100);
        if(hashC === '/intro/letter-to-visitors') {
            pTitleOne('关于我们');
            pTitleTwo('致访问者的一封信');
            pLink('<a class=\"xza\">致访问者的一封信</a><a href=\"#/page/intro/about\">活动简介</a>');
            pContent('<p></p>');
        }
        if(hashC === '/intro/about') {
            pTitleOne('关于我们');
            pTitleTwo('活动简介');
            pLink('<a href=\"#/page/intro/letter-to-visitors\">致访问者的一封信</a><a class=\"xza\">活动简介</a>');
            pContent('');
        }
        if(hashC === '/previous/2022') {
            pTitleOne('往届精彩');
            pTitleTwo('');
            pLink('<a class=\"xza\">2022年第一届</a><a href=\"#/page/previous/2023\">2023年第二届</a>');
            pContent('<center>暂无内容</center><br/><br/>');
        }
        if(hashC === '/previous/2023') {
            pTitleOne('往届精彩');
            pTitleTwo('第二届云端的单身情歌活动纪实');
            pLink('<a href=\"#/page/previous/2022\">2022年第一届</a><a class=\"xza\">2023年第二届</a>');
            pContent('<img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgpcqguAYosNzbqgYwuAg4ywQ.png\"><img src=\"https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAg4cqguAYo7Lb8ggMw_wQ4qAM.png\"><img src=\"https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAg_cqguAYogL_04Qcw_wQ4yAg.png\"><img src=\"https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgi8uguAYo7_Tqxwcw_wQ40QQ.png\"><img src=\"https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgpcuguAYo_4TfzwIw_wQ4sgU.png\"><img src=\"https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgv8uguAYooq2w2wEwiwQ4qQc.png\">');
        }
        if(hashC === '/previous/2024') {
            pTitleOne('本届动态');
            pTitleTwo('');
            pLink('');
            pContent('');
        }


        document.title = document.getElementById("page-title2").textContent + " - 云端的单身情歌";
    }
    if(hashB === '/news') {
        showLoading();
        allHide();
        clearNews();
        showE("newsbox",100);
        if(hashC === '/26/viewport') {
            nTitle('2023年第二届“云端的单身情歌”线上合唱活动成功举办');
            nAuthor('官网');
            nTime('2023/11/13');
            nContent('<p>2023年11月11日，在部分校友的齐心组织下，第二届“来自云端的单身情歌——东北师大附中毕业生线上大合唱”活动成功在腾讯会议海外版平台举办。</p><p>近300名目前身在长春<big>、新加坡、首尔、北京、上海、重庆、武汉、南昌、太原、福州、四平、长沙、天津、广州、合肥、成都、西安、哈尔滨、深圳、大连、洛阳、秦皇岛、咸阳、延吉、南京等</big>城市的2022届、2023届东北师大附中毕业生参与了此次活动。</p><p>活动全程录像已经上传至Bilibili。视频链接： <a href=\"https://www.bilibili.com/video/BV1JQ4y187ot/\" target=\"_blank\">2023毕业生云端再唱单身情歌</a></p>');
        }
        if(hashC === '/24/viewport') {
            nTitle('2023年活动官方QQ群');
            nAuthor('');
            nTime('2023/11/10');
            nContent('<p><center><img src=\"https://13511974.s21i.faiusr.com/4/3/ABUIABAEGAAgitbbswYoqIPdywMwwAM4wAM.png\" style=\"width:250px!important;\"></center></p>');
        }
        if(hashC === '/0/viewport') {
            nTitle('网站创建成功！');
            nContent('网站创建成功！感谢你使用春潮服务。');
        }



        document.title = document.getElementById("news-title").textContent + " - 云端的单身情歌";
        if(document.getElementById("news-title").innerText) {
            document.getElementById("now-title").innerText = document.getElementById("news-title").innerText;
        }
        else {
            document.getElementById("now-title").innerText = "新闻详情";
        }
    }
}


function showE(eleid,timeis) {
    setTimeout(function() {
        document.getElementById(eleid).style.display = "block";
    }, timeis);
}
function hideE(eleid,timeis) {
    setTimeout(function() {
    document.getElementById(eleid).style.display = "none";
    }, timeis);
}
function jumpT(urls) {
    window.location.href = urls;
}
function allHide() {
    window.scrollTo(0,0);
    hideE("indexbox",0);
    hideE("pagebox",0);
    hideE("newsbox",0);
}
function showLoading() {
    window.scrollTo(0,0);
    showE("loadingbox",0);
    hideE("loadingbox",0);
}

function clearNews() {
    nTitle('');
    nAuthor('');
    nTime('');
    nContent('');
}
function clearPageBox() {
    pTitleOne('');
    pTitleTwo('');
    pContent('');
    pLink('');
}
function pTitleOne(ptitle1) {
    document.getElementById("page-title1").innerText = ptitle1;
}
function pTitleTwo(ptitle2) {
    document.getElementById("page-title2").innerText = ptitle2;
}
function pLink(pagelink) {
    document.getElementById("leftlink-index").innerHTML = pagelink;
}
function pContent(pcontent) {
    document.getElementById("pageright-content").innerHTML = pcontent;
}
function nTitle(ntitle) {
    document.getElementById("news-title").innerText = ntitle;
}
function nAuthor(nauthor) {
    document.getElementById("news-author").innerText = nauthor;
}
function nTime(ntime) {
    document.getElementById("news-time").innerText = ntime;
}
function nContent(ncontent) {
    document.getElementById("news-content").innerHTML = ncontent;
}
function addHome(lianjie,biaoti,shijian) {
    var addMr = `<a href="#/news/${lianjie}/viewport"><titl>${biaoti}</titl><time>${shijian}</time></a>`;
    document.getElementById('index-news-list-02').insertAdjacentHTML('beforeend', addMr);
}
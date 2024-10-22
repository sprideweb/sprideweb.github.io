

addHome('26','2023年第二届“云端的单身情歌”线上合唱活动成功举办','11/13');
addHome('23','2023年第二届“云端的单身情歌”活动公告','11/10');


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
        if(hashC === '/intro/organization') {
            pTitleOne('关于我们');
            pTitleTwo('活动组织');
            pLink('<a href=\"#/page/intro/about\">活动简介</a><a class=\"xza\">活动组织</a>');
            pContent('<table><tr><td colspan=\"2\" style=\"text-align:center\">2022.11.11 第一届双十一单身情歌线上合唱</td></tr><tr><td>策划</td><td></td></tr><tr><td>组织</td><td></td></tr></table><br><br><table><tr><td colspan=\"2\" style=\"text-align:center\">2023.11.11 第二届云端的单身情歌活动</td></tr><tr><td>策划</td><td></td></tr><tr><td>组织</td><td></td></tr><tr><td>软件支持</td><td></td></tr></table>');
        }
        if(hashC === '/intro/about') {
            pTitleOne('关于我们');
            pTitleTwo('活动简介');
            pLink('<a class=\"xza\">活动简介</a><a href=\"#/page/intro/organization\">活动组织</a>');
            pContent('');
        }
        if(hashC === '/previous/2022') {
            pTitleOne('往届精彩');
            pTitleTwo('');
            pLink('<a class=\"xza\">2022年第一届</a><a href=\"#/page/previous/2023\">2023年第二届</a>');
            pContent('');
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
            pLink('<a class=\"xza\">第三届（筹备中）</a>');
            pContent('');
        }
        if(hashC === '/downloadCentre') {
            pTitleOne('常用下载');
            pTitleTwo('常用下载');
            pContent('<div class=\"down-c\">1.<a href=\"https://music.163.com/#/song?id=110043\" target=\"_blank\">单身情歌-林志炫-单曲-网易云音乐</a></div>');
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
            nAuthor('网站管理员');
            nTime('2023-11-13');
            nContent('<p>\u3000\u30002023年11月11日，在海内外部分校友的齐心组织下，第二届“来自云端的单身情歌——东北师大附中毕业生线上大合唱”活动成功于2023年11月11日23时11分整在Voov Meeting视频平台举办。</p><p>\u3000\u3000近300名目前身在长春、新加坡、首尔、北京、上海、重庆、武汉、南昌、太原、福州、四平、长沙、天津、广州、合肥、成都、西安、哈尔滨、深圳、大连、洛阳、秦皇岛、咸阳、延吉、南京等<big>涵盖三个国家、近30个城市</big>的2022届、2023届东北师大附中毕业生参与了此次活动。</p><p>\u3000\u3000活动全程录像已由仿官号up主“东北师范大学附属中学”上传至B站。视频链接： <a href=\"https://www.bilibili.com/video/BV1JQ4y187ot/\" target=\"_blank\">2023毕业生云端再唱单身情歌_哔哩哔哩_bilibili</a></p><p>\u3000\u3000活动的再次成功举办，彰显了师大附中作为文化符号已经深刻烙印在每一位附中人的心中，成为他们回忆的避风港。正如活动策划<big>刘一申所言：“东北师大附中早就成为我们灵魂里的文化记忆，无论多远的距离，每个人都心在那里。”</big>活动的成功举办，不仅让毕业生们回想起往年当日在青华天井的美好回忆，更唤起了他们对母校的热爱和思念。</p><p>\u3000\u3000活动于当日午夜正式落下帷幕。在活动的尾声，主办方宣布，下一届活动计划于2024年继续如期举办。云端的单身情歌，2024云端再相会！</p>');
        }
        if(hashC === '/24/viewport') {
            nTitle('2023年活动官方QQ群');
            nTime('2023-11-10');
            nContent('<p><center><img src=\"https://13511974.s21i.faiusr.com/4/3/ABUIABAEGAAgitbbswYoqIPdywMwwAM4wAM.png\" style=\"width:250px!important;\"></center></p>');
        }
        if(hashC === '/23/viewport') {
            nTitle('2023年第二届“云端的单身情歌”活动公告');
            nTime('2023-11-10');
            nContent('<p>\u3000\u3000第二届“云端的单身情歌”——东北师大附中毕业生线上大合唱活动正式定档2023年11月11日，欢迎广大东北师范大学附属中学毕业生参加。活动官方QQ群二维码将于稍后放出。</p><p>\u3000\u3000特此公告。</p>');
        }
        if(hashC === '/0/viewport') {
            nTitle('新的开始');
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
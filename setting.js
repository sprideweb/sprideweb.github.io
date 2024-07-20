


function hashChange() {
    var hashA = window.location.hash.substr(1);
    var hashB = window.location.hash.substr(1,5);
    var hashC = window.location.hash.substr(6);
    if(hashB === '/') {
        showLoading();
        allHide();
        showE("indexbox",20);
        document.title = "数智化新质生产力服务商 | 春潮文化";
    }
    if(hashB === '/page') {
        showLoading();
        allHide();
        clearPageBox();
        showE("pagebox",20);
        if(hashC === '/about/index') {
            pTitleOne('关于我们');
            pTitleTwo('春潮简介');
            pLink('<a class=\"xza\">春潮简介</a><a href=\"#/page/about/team\">管理团队</a><a href=\"#/page/about/contact\">联系我们</a>');
            pContent('');
        }
        if(hashC === '/about/team') {
            pTitleOne('关于我们');
            pTitleTwo('管理团队');
            pLink('<a href=\"#/page/about/index\">春潮简介</a><a class=\"xza\">管理团队</a><a href=\"#/page/about/contact\">联系我们</a>');
            pContent('');
        }
        if(hashC === '/about/contact') {
            pTitleOne('关于我们');
            pTitleTwo('联系我们');
            pLink('<a href=\"#/page/about/index\">春潮简介</a><a href=\"#/page/about/team\">管理团队</a><a class=\"xza\">联系我们</a>');
            pContent('');
        }
        if(hashC === '/products/eatculture') {
            pTitleOne('我们的产品');
            pTitleTwo('池钓离吻花');
            pLink('<a class=\"xza\">池钓离吻花</a><a href=\"#/page/products/baoapp\">学习宝APP</a>');
            pContent('<p>池钓离吻花是由我们运营并维护的经典休闲单机OL小游戏，上线于2022年4月，至今已迭代数个版本。游戏玩法类似于钢琴块儿，简单休闲，乐趣无穷。</p><p>游戏官网地址：https://dbsdfz.github.io/game/</p>');
        }
        if(hashC === '/products/baoapp') {
            pTitleOne('我们的产品');
            pTitleTwo('学习宝APP');
            pLink('<a href=\"#/page/products/eatculture\">池钓离吻花</a><a class=\"xza\">学习宝APP</a>');
            pContent('<p>学习宝2021年12月成立于吉林省长春市，B站官方账号于2021年12月发布首支视频。学习宝APP是由学习宝官方开发和维护的官方视频APP，包含学习宝全部高清视频。高速看视频，就用学习宝。</p><p>APP官网：https://spride.asia/download/</p>');
        }
        if(hashC === '/services/we-media') {
            pTitleOne('我们的业务');
            pTitleTwo('');
            pLink('');
            pContent('');
        }


        document.title = document.getElementById("page-title2").textContent + " | 春潮文化";
    }
    if(hashB === '/news') {
        showLoading();
        allHide();
        clearNews();
        showE("newsbox",20);
        if(hashC === '/93/viewport') {
            nTitle('关于学习宝快手官方账号“学习宝官方账号”终止运营的公告');
            nTime('2024/07/21');
            nAuthor('学习宝');
            nContent('<h6><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgw_-vtAYokoWtnwQwsww4xRE.png\"/></h6>');
        }
        if(hashC === '/86/viewport') {
            nTitle('关于学习宝微信视频号官方账号“学习宝官号”终止运营的公告');
            nTime('2024/04/11');
            nAuthor('学习宝');
            nContent('<h6><img src=\"https://13511974.s21i.faiusr.com/2/ABUIABACGAAg0eLvtAYo3vX3oAcwuAg46gw.jpg\"/></h6>');
        }
        if(hashC === '/85/viewport') {
            nTitle('关于学习宝B站官方账号“学习宝官方账号”终止运营的公告');
            nTime('2024/04/10');
            nAuthor('学习宝');
            nContent('<h6><img src=\"https://13511974.s21i.faiusr.com/2/ABUIABACGAAg0b-utAYooKO8rQQwuAg43As.jpg\"/></h6>');
        }
        if(hashC === '/81/viewport') {
            nTitle('《池钓离吻花》2024年常规维护公告');
            nTime('2023/12/26');
            nCategory('信息公开');
            nAuthor('池钓离吻花');
            nContent('<center><h5><b>《池钓离吻花》2024年常规维护公告</b></h5></center><p><br/>为了更好的服务广大玩家，池钓离吻花将进行2024年第一次常规维护。具体事项公告如下：<br/><br/>1.维护开始时间：2023年12月28日0:00<br/>2.维护结束时间：另行公告。<br/>3.维护内容：优化服务体验，提升游戏质量。<br/><br/>特此公告。</p><p style=\"text-align:right;\">项 目 组<br/>2023年12月26日</p>');
        }
        if(hashC === '/80/viewport') {
            nTitle('春潮文化2024年财务预算信息公开');
            nTime('2023/12/21');
            nCategory('信息公开');
            nAuthor('春潮财务');
            nContent('<center>公示期已结束</center>');
        }
        if(hashC === '/62/viewport') {
            nTitle('春潮文化2023年财务预算信息公开');
            nTime('2022/12/25');
            nCategory('信息公开');
            nAuthor('春潮财务');
            nContent('<center>公示期已结束</center>');
        }
        
        if(hashC === '/1/viewport') {
            nTitle('网站创建成功！');
            nContent('网站创建成功！');
        }



        document.title = document.getElementById("news-title").textContent + " | 春潮文化";
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
    hideE("loadingbox",20);
}

function clearNews() {
    nTitle('');
    nAuthor('');
    nTime('');
    nContent('');
    nCategory('新闻资讯')
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
function nCategory(ncategory) {
    document.getElementById("now-category").innerText = ncategory;
}
function nContent(ncontent) {
    document.getElementById("news-content").innerHTML = ncontent;
}
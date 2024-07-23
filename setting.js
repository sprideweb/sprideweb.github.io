


function hashChange() {
    let hashA = window.location.hash.substr(1);
    let hashB = window.location.hash.substr(1,5);
    let hashC = window.location.hash.substr(6);
    if(hashB === '/') {
        showLoading();
        allHide();
        showE("indexbox",200);
        document.title = "数智化新质生产力服务商 | 春潮文化";
    }
    if(hashB === '/page') {
        showLoading();
        allHide();
        clearPageBox();
        showE("pagebox",200);
        if(hashC === '/about/index') {
            pTitleOne('关于我们');
            pTitleTwo('春潮简介');
            pLink('<a class=\"xza\">春潮简介</a><a href=\"#/page/about/team\">管理团队</a><a href=\"#/page/about/contact\">联系我们</a>');
            pContent('<p>春潮文化2020年10月成立于风景秀美、宜居宜人的国家级历史文化名城、东北亚区域中心城市——长春市，是一家以文化传播为主要业务的非营利性组织。</p><p>截至2022年10月，主要业务有自媒体运营、短视频策划、个性化服务。</p>');
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
            pContent('<p>电商合作：<img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgqa71tAYogKrm_QQwuAE4GA.png\" height=\"16px\"/></p>');
        }
        if(hashC === '/products/idaojia') {
            pTitleOne('我们的产品');
            pTitleTwo('春潮到家');
            pLink('<a class=\"xza\">春潮到家</a><a href=\"#/page/products/gangqinkuaier\">钢琴块儿</a>');
            pContent('');
        }
        if(hashC === '/products/gangqinkuaier') {
            pTitleOne('我们的产品');
            pTitleTwo('钢琴块儿');
            pLink('<a href=\"#/page/products/idaojia\">春潮到家</a><a class=\"xza\">钢琴块儿</a>');
            pContent('');
        }
        if(hashC === '/services/we-media') {
            pTitleOne('我们的业务');
            pTitleTwo('自媒体运营');
            pLink('<a class=\"xza\">自媒体运营</a><a href=\"#/page/services/microvideo\">短视频策划</a>');
            pContent('');
        }
        if(hashC === '/services/microvideo') {
            pTitleOne('我们的业务');
            pTitleTwo('短视频策划');
            pLink('<a href=\"#/page/services/we-media\">自媒体运营</a><a class=\"xza\">短视频策划</a>');
            pContent('');
        }
        if(hashC === '/list/category/xwzx') {
            pTitleOne('新闻资讯');
            pTitleTwo('新闻资讯');
            pContent('<div class=\"newslink-i\"><div class=\"card-body news-listbox-xwzx\"></div></div>');
            $('.news-listbox-xwzx').html(xwzxlj);
        }
        if(hashC === '/list/category/xmal') {
            pTitleOne('项目案例');
            pTitleTwo('项目案例');
        }
        if(hashC === '/list/category/xxgk') {
            pTitleOne('信息公开');
            pTitleTwo('信息公开');
            pContent('<div class=\"newslink-i\"><div class=\"card-body news-listbox-xxgk\"></div></div>');
            $('.news-listbox-xxgk').html(xxgklj);
        }
        if(hashC === '/list/category/yqlj') {
            pTitleOne('友情链接');
            pTitleTwo('友情链接');
        }


        document.title = document.getElementById("page-title2").textContent + " | 春潮文化";
    }
    if(hashB === '/news') {
        showLoading();
        allHide();
        clearNews();
        showE("newsbox",200);
        if(hashC === '/93/viewport') {
            nTitle('关于学习宝快手官方账号“学习宝官方账号”终止运营的公告');
            nTime('2024/07/21');
            nAuthor('学习宝');
            nContent('<h6><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgw_-vtAYokoWtnwQwsww4xRE.png\"/></h6>');
        }
        if(hashC === '/89/viewport') {
            nTitle('关于微信公众号“浪潮时代”无限期停更的公告');
            nTime('2024/06/08');
            nAuthor('浪潮时代');
            nContent('<h6><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgiqz1tAYo9pCZnAMwsww4xRE.png\"/></h6>');
        }
        if(hashC === '/88/viewport') {
            nTitle('关于《池钓离吻花》安卓APP停止运营和维护的公告');
            nTime('2024/05/27');
            nAuthor('项目组');
            nContent('<center><h5><b>关于《池钓离吻花》安卓APP停止运营和维护的公告</b></h5></center><p><br/>由于用户活跃量过低，《池钓离吻花》安卓APP（含鸿蒙Harmony OS版本）项目将于2024年6月1日0时起停止运营和维护。池钓离吻花后续将通过网页在线版继续为用户提供游戏服务。<br/><br/>特此公告。</p><p style=\"text-align:right;\">项 目 组<br/>2024年5月27日</p>');
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
        
        if(hashC === '/62/viewport') {
            nTitle('春潮SPRIDE稿费给付标准（2022年12月）');
            nTime('2022/12/25');
            nCategory('信息公开');
            nAuthor('春潮文化');
            nContent('<h6><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgqL--tAYozf2aqQYwsww45Aw.png\"/><br/><br/><br/><br/><br/><br/></h6>');
        }
        
        if(hashC === '/0/viewport') {
            nCategory('default_system_folder');
            nTitle('Website created successfully!');
            nContent('Thanks for using SPRIDE intelligence');
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
    hideE("loadingbox",80);
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
    document.getElementById("page-title2").innerHTML = ptitle2;
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
function lH(hjlink) {
    window.location.href=hjlink;
}



var xwzxlj = '<a href=\"#/news/93/viewport\"><titl>关于学习宝快手官方账号“学习宝官方账号”终止运营的公告</titl><time>07/21</time></a> <a href=\"#/news/89/viewport\"><titl>关于微信公众号“浪潮时代”无限期停更的公告</titl><time>06/08</time></a> <a href=\"#/news/88/viewport\"><titl>关于《池钓离吻花》安卓APP停止运营和维护的公告</titl><time>05/27</time></a> <a href=\"#/news/86/viewport\"><titl>关于学习宝微信视频号官方账号“学习宝官号”终止运营的公告</titl><time>04/11</time></a> <a href=\"#/news/85/viewport\"><titl>关于学习宝B站官方账号“学习宝官方账号”终止运营的公告</titl><time>04/10</time></a>';

$('.news-listbox-xwzx').html(xwzxlj);


var xxgklj = '<a href=\"#/news/62/viewport\">春潮SPRIDE稿费给付标准（2022年12月）</a>';

$('.news-listbox-xxgk').html(xxgklj);
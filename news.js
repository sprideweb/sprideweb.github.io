var path = location.pathname;
var parts = path.split('/');
var fileName = parts[parts.length - 1];
const urlParams = new URLSearchParams(window.location.search);
const sid = urlParams.get('id');
if (fileName === 'news.html') {
    clearTag();

    addList1('2023年第二届“云端的单身情歌”东北师大附中毕业生线上合唱活动成功举办','2023-11-15',29)
    addList1('学习宝官方账号将暂停作品更新','2022-08-16',18);



    addList2('春潮SPRIDE公众号稿费给付标准（试行）','2020-12-25',7);





    checkNewsIndexifEmpty();
} else if (fileName === 'news_show.html') {
    switch(sid) {
    case '7':
        var n=`
        <p>春潮SPRIDE为作者准备的稿费由按作品质量给予的基础稿费和按阅读量和字数计算的浮动稿费组成，一旦您的投稿作品被收录，我们将最终按照不少于下列表中所示的金额给予作者相应的稿费。</p><p><br/><b>一、精品投稿</b></p><table cellspacing="0"><tbody><tr><td>稿件字数</td><td>基础稿费</td><td>浮动稿费</td></tr><tr><td>2000字以内</td><td>/</td><td>5元/千字，不足千字按0字计<br/>1元/500阅读量，阅读量不足500按0计（含税）</td></tr><tr><td>2000字以上</td><td>10元/篇（含税）</td><td>1元/500阅读量，阅读量不足500按0计（含税）</td></tr></tbody></table><p><br/><b>二、普通投稿</b></p><table cellspacing="0"><tbody><tr><td>稿件字数</td><td>基础稿费</td><td>浮动稿费</td></tr><tr><td>2000字以内</td><td>/</td><td>1元/800阅读量，阅读量不足800按0计（含税）</td></tr><tr><td>2000字以上</td><td>5元/篇（含税）</td><td>1元/800阅读量，阅读量不足800按0计（含税）
</td></tr></tbody></table><p><br/><b>三、特邀投稿</b></p><table cellspacing="0"><tbody><tr><td>稿件字数</td><td>基础稿费</td><td>浮动稿费</td></tr><tr><td>不低于3000字</td><td>不低于35元/篇（含税）</td><td>超出3000字的部分不低于10元/千字，不足千字按0字计<br/>5元/千阅读量，阅读量不足千按0计（含税）</td></tr></tbody></table><p><br/><b>四、自费投稿</b></p><table cellspacing="0"><tbody><tr><td>稿件字数</td><td>基础稿费</td><td>浮动稿费</td><td>自费价格</td></tr><tr><td>不限</td><td>5元/篇（含税）</td><td>/</td><td>投稿费：5元/百字，不足百字的按百字计<br/>材料费：19元/千字，不足千字按千字计<br/>人工审核费：25元/千字，不足千字按千字计<br/>税费代缴：5元/篇（含税）</td></tr></tbody></table><p><br/>稿费给付方式：微信支付/支付宝/银行转账</p><p>承诺稿费最晚到账日期：文章发表后35个工作日内</p><p>承诺稿费最晚结清日期：文章发表后70个工作日内</p><p>*注：稿费税费代缴扣除个人所得税及杂税合计约40%。</p>
        `;
        addNews('春潮SPRIDE公众号稿费给付标准（试行）','2020-12-25','春潮网')
        break;
    case '18':
        var n=`
        <p>\u3000\u3000学习宝官方账号全平台（含哔哩哔哩、快手、微信视频号等）即日起将暂停作品更新，恢复时间待定。感谢全体观众的支持和陪伴。<br/><br/><br/>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000学习宝<br/>\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u30002022年8月16日</p>
        `;
        addNews('学习宝官方账号将暂停作品更新','2022-08-16','学习宝');
        break;
    case '29':
        var n=`
        <img src="https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgpcqguAYosNzbqgYwuAg4ywQ.png"><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAg4cqguAYo7Lb8ggMw_wQ4qAM.png"><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAg_cqguAYogL_04Qcw_wQ4yAg.png"><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgi8uguAYo7_Tqxwcw_wQ40QQ.png"><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgpcuguAYo_4TfzwIw_wQ4sgU.png"><img src="https://13511974.s21i.faimallusr.com/4/4/ABUIABAEGAAgv8uguAYooq2w2wEwiwQ4qQc.png">
        `;
        addNews('2023年第二届“云端的单身情歌”东北师大附中毕业生线上合唱活动成功举办','2023-11-15','春潮网');
        break;
   



    default:
        document.getElementById('wzxx').style.display='none';
        document.getElementById('wznr').innerHTML=`<empty><img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIIXChu0FKKi909UGMLAEOPwC.png"/><clsbtn onclick="window.close();">关闭页面</clsbtn></empty>`;
        break;
    }
}

function addNews(title,time,resource) {
    document.getElementById('wzxbt').innerText=title;
    document.getElementById('fbsj').innerText=time;
    document.getElementById('xxly').innerText=resource;
    document.getElementById('wznr').innerHTML=n;
}
function addList1(title,time,id) {
    var c = `<a class="ignore" onclick="openpop('${id}')"><img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIOGno_sFKLK45YgDMDI4Mg.png"/>${title}<span>[${time}]</span></a>`;
    document.getElementById('news-index-cat1').insertAdjacentHTML('beforeend', c);
}
function addList2(title,time,id) {
    var c = `<a class="ignore" onclick="openpop('${id}')"><img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIOGno_sFKLK45YgDMDI4Mg.png"/>${title}<span>[${time}]</span></a>`;
    document.getElementById('news-index-cat2').insertAdjacentHTML('beforeend', c);
}
function openpop(id) {
    /*var params = [
        'width=610',
        'height=740',
        'location=no',
        'menubar=no',
        'resizable=no',
        'scrollbars=no',
        'status=no',
        'toolbar=no'
    ].join(',');
    var newWindow = window.open('news_show.html?id='+id, '新闻详情', params);
    if (newWindow == null || typeof(newWindow)=='undefined') {
        alert('您的浏览器暂不支持查看此类消息。');
    } else {
        newWindow.focus();
    }*/
    alert('新闻视窗升级中，给您带来不便敬请谅解。\n返回值：-'+id);
}
function checkNewsIndexifEmpty() {
    if(document.getElementById('news-index-cat1').innerHTML==='') {
        document.getElementById('news-index-cat1').innerHTML=`<empty><img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIIXChu0FKKi909UGMLAEOPwC.png"/><br/>没有新闻动态</empty>`;
    }
    if(document.getElementById('news-index-cat2').innerHTML==='') {
        document.getElementById('news-index-cat2').innerHTML=`<empty><img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIIXChu0FKKi909UGMLAEOPwC.png"/><br/>没有通知公告</empty>`;
    }
}
function clearTag() {
    document.getElementById('news-index-cat1').innerHTML='';
    document.getElementById('news-index-cat2').innerHTML='';
}

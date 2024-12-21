finishLoad();
newsListList=`
    <div class="title-bg">
        <div class="width title">
		    <h1>新闻公告</h1><p>News & Notices</p>
	    </div>
    </div>
    <div class="width">
        <br/><br/><br/>
	    <div class="news">
	    <div class="news-top-s">新闻列表</div>
	        <nodata>没有内容</nodata>
	        <!--<a onclick="goN(420)">学习宝启用新域名<t>2024/12/19</t></a>-->
	    </div>
	    <div class="news">
	    <div class="news-top-s">公告列表</div>
	        <nodata>没有内容</nodata>
	    </div>
	    <br/><br/><br/><br/>
    </div>
`;
function newsInfoInfo() {
	switch(nid) {
	case '0':
		newsCC=``;
		basI('网站创建成功',100,100,100);
		break;
	default:
		window.location.href="#/index/newsList";
		break;
	}
}
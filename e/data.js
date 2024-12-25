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
	        <!--<a onclick="goN(number)">Title<t>YYYY/MM/DD</t></a>-->
	    </div>
	    <div class="news">
	    <div class="news-top-s">公告列表</div>
	        <!--<nodata>没有内容</nodata>-->
	        <a onclick="goN(1097)">春潮网暂停访问<t>2024/12/25</t></a>
	    </div>
	    <br/><br/><br/><br/>
    </div>
`;
function newsInfoInfo() {
	switch(nid) {
	case '1097':
		newsCC=`由于新版网站出现错误，春潮网spride.asia主页正在降级至旧版网站。恢复时间待定。`;
		basI('春潮网暂停访问',2024,12,25);
		break;
	default:
		window.location.href="#/index/newsList";
		break;
	}
}

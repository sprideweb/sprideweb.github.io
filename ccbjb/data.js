finishLoad();
newsListList=`
        <div class="width new-main">
		   <div class="new-left">
		      <tle>编辑推荐\u3000<span>EDITOR RECOMMENDATION</span></tle>
		         <div class="new-newslist">
		            <p>来西康路的第1034个日夜<t>2025-05-13</t><a onclick="goB(6)">查看详情</a></p>
		         </div>
		   </div><div class="new-nav">
		      <tle>作者和作品</tle>
		      <p class="act" onclick="goA('tuiwen')">编辑推荐</p>
		      <p onclick="goA('writers')">作者精选</p>
		   </div>
		</div>	
`;
function newsInfoInfo() {
	switch(nid) {
	case '6':
		newsCC=`
		<inf>首发于微信公众号《春潮向海》<br/>作者：西康路小摸</inf>
		我搬来西康路是十六岁零一个夏天。如果岁月可回首，22年我应该在日记本上恨恨的写：我讨厌搬家，我讨厌西康路狭窄的街道，和密不透风的人群像一堵堵墙向我倒来。我拒绝擦肩而过时总能遇到熟悉的身影。<br/>她见证了我青涩的少女时代又催着我迈向人生的下一个阶段。<br/><br/>我在这里学会了喝酒、流泪，在万鑫鸡翅和别人碰杯、拥抱。在这里第一次学会抽烟，又发现抽烟缓解不了年排下降200名的焦虑。在这里学会真心待人，又在这里学会真心换不来真心。在这里明恋与暗恋，被人追也追过人—拿着花不舍得丢掉也不敢拿回。<br/>
		包容的，向我敞开怀抱的究竟是以西康路为代表的新世界，还是仅仅对初来新手村十六七岁我的提供的昙花一现般的奖励？<br/>但是无论这两者哪个我都很感激，起码那几年时间的浪漫与新鲜足够迷人。
		<br/><br/>我就是这样学着、混着、在长庆街与附中间游荡，在补课班与南湖间穿梭。然后看着别人和我一样：放学上学、大笑流泪、拥抱告别。然后就跌跌撞撞的成为了名义上的大人。<br/><br/>我去过很多次南湖，心情好去南湖听萨克斯在柳絮里摇摆，心情不好去湖边闻着铁锈一样味道的风。我猜南湖承载了多少人的哀思和“强说愁”时代的心事。如果……<br/>
		<a class="ydqw_xw" href="https://mp.weixin.qq.com/s/pxt7XIkQWRHDfQcvuV2TQg">阅读全文</a>`;
		basI('来西康路的第1034个日夜',2025,5,13);
		break;
	case '5':
		newsCC=`
		春潮编辑部新版网站已于今日上线试运行\u3000，您可将使用体验情况反馈至公众号，也可通过网站顶部“返回旧版”按钮返回旧版网站。<br/>
		`;
		basI('春潮编辑部新版网站今日上线',2025,5,12);
		break;
	default:
		window.location.href="#/index/404";
		break;
	}
}
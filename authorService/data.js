finishLoad();
newsListList=`
        <div class="width">
		    <img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAg-InlvAYou8Db2QQwgAU4Pw.png" style="width:46%;margin: 0 auto;display: block;margin-top: 65px;" />
	    </div>
	    <div class="width xxgs-1">
	        <a onclick="goN(1257)">春潮专栏新作品《新年的祝福》文章信息公示</a>
	        <a onclick="goN(1256)">春潮专栏新作品《2025新年献词》文章信息公示</a>
	        <a onclick="goN(1255)">春潮专栏新作品《故乡的天空》文章信息公示</a>

	    </div>
`;
function newsInfoInfo() {
	switch(nid) {
	case '1255':
		newsCC=`
		<p>推送序号：ZL202401</p>标签：<br/>作者：Abel<br/>字数：<br/>编辑：<br/>审核：
		`;
		basI('春潮专栏新作品《故乡的天空》文章信息公示');
		break;
	case '1256':
		newsCC=`
		<p>推送序号：ZL202402</p>标签：<br/>作者：<br/>字数：<br/>编辑：<br/>审核：
		`;
		basI('春潮专栏新作品《2025新年献词》文章信息公示');
		break;
	case '1257':
		newsCC=`
		<p>推送序号：ZL202501</p>标签：传统文化<br/>作者：塵囂<br/>字数：约100字以上<br/>编辑：杨二狗<br/>审核：
		`;
		basI('春潮专栏新作品《新年的祝福》文章信息公示');
		break;





	case '8026':
		newsCC=`
		春潮编辑部
		`;
		basI('春潮编辑部',9999);
		break;
	case '9002':
		newsCC=`
		<p><br/>新年献词专题页面：<a href="/jbwz/xnxc" target="_blank">http://spride.asia/jbwz/xnxc</a></p>
		`;
		basI('新年献词专题页面',9999);
		break;
	default:
		window.location.href="#/index/404";
		break;
	}
}
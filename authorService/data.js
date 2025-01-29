finishLoad();
newsListList=`
        <div class="width">
		    <img src="https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAg-InlvAYou8Db2QQwgAU4Pw.png" style="width:46%;margin: 0 auto;display: block;margin-top: 65px;" />
	    </div>
	    <div class="width xxgs-1">
	        <a onclick="goN(1257)">《祝福》文章信息</a>
	        <a onclick="goN(1256)">《愿人生中的每段旅程，都有故事娓娓可道》文章信息</a>
	        <a onclick="goN(1255)">《故乡的天空》文章信息</a>
	        <a onclick="goN(1254)">《像流水一样不再回头》文章信息</a>
	 

	    </div>
`;
function newsInfoInfo() {
	switch(nid) {
	case '1254':
		newsCC=`
		<p>推送序号：</p>标签：<br/>作者：<br/>字数：<br/>编辑：<br/>审核：
		`;
		basI('《像流水一样不再回头》文章信息');
		break;
	case '1255':
		newsCC=`
		<p>推送序号：ZL202401</p>标签：<br/>作者：Abel<br/>字数：<br/>编辑：<br/>审核：
		`;
		basI('《故乡的天空》文章信息');
		break;
	case '1256':
		newsCC=`
		<p>推送序号：ZL202402</p>标签：<br/>作者：<br/>字数：<br/>编辑：<br/>审核：
		`;
		basI('《愿人生中的每段旅程，都有故事娓娓可道》文章信息');
		break;
	case '1257':
		newsCC=`
		<p>推送序号：ZL202501</p>标签：传统文化<br/>作者：塵囂<br/>字数：约100字以上<br/>编辑：杨二狗<br/>审核：
		`;
		basI('《祝福》文章信息');
		break;





	
	default:
		window.location.href="#/index/404";
		break;
	}
}

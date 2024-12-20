document.getElementById('new_year').style.height='19vw';
setTimeout("document.getElementById('new_year').style.height='0';",2500);


const urlParams = new URLSearchParams(window.location.search);
const IS = urlParams.get('is');
const ID = urlParams.get('ID');
const TP = urlParams.get('p_typ');
const SK = urlParams.get('skin');
const SC = urlParams.get('scheck');
const SYFL = urlParams.get('articleCategorySelect');
elHide('b_load');
elShow('b_main');

if(SYFL === '0'||!SYFL) {
document.getElementById('swh_1').classList.add('acv');
addList('【预约】愿人生中的每段旅程，都有故事娓娓可道——春潮2025新年献词','2024','12','13');
addList('故乡的天空','2024','10','26');
addList('像流水一样不再回头——春潮2024新年献词','2023','12','31');
addList('写在没有疫情的第一个冬天','2023','11','08');
addList('《不止不休》：黄金年代理想主义的挽歌','2023','03','30');
addList('葬尸湖','2023','03','23');
addList('疫年整','2023','03','08');
addList('告别未来十年里最好的一年——春潮2023新年献词','2022','12','31');
addList('当我们告别行程卡时，我们在告别什么','2022','12','13');
addList('祝你这个冬天快乐','2022','12','09');
addList('等待尘烟散去','2022','11','19');
addList('写在疫情时代的第四个冬天','2022','11','16');
addList('写在疫情时代的第三个冬天','2021','11','16');
addList('奋斗赋予时间以意义，精神照亮民族的未来','2021','10','09');
addList('迪迦：致以光明','2021','09','26');
}

if(SYFL === '1') {
	document.getElementById('swh_2').classList.add('acv');
	document.getElementById('news_addlist').innerHTML="<p style=\"text-align:center;line-height:12;\">没有消息</p>";
}



switch(ID) {
case '10000000':
	var op = ``;
	basicInfo('更新日志','admin');
	break;
case '20210926':
	var ox=1;
	basicInfo('迪迦：致以光明','沐星雨人');
	break;
case '20211009':
	var ox=1;
	basicInfo('奋斗赋予时间以意义，精神照亮民族的未来','铁柱');
	break;
case '20211116':
	var op = `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1894094482&auto=1&height=66"></iframe><p>遥记得2019年初冬天的情景。那时候我还有几个月就要中考，却远没有像高考这般紧张。因为我知道，考的高就去附中，低了也不会低过省实验。
</p><p>于是，刚刚过线的分数让我来到了这个省里最好的高中。</p><p>还记得2019年的夏天，青华校区对面民居二楼的补习班，炙热的空气混合汗水的味道，让我跟不上老师讲的内容。那是我第一遍学习高中课程，在补习班。而就在一个月前，我刚在高三一轮复习里最后一次和它们见面。
在补习班，我被金属和非金属、细胞的结构、三角函数折磨了十五天，当时的我立志要把他们搞定。还有三年呢，咱们慢慢斗。我对着它们想。</p><p>三年之期将至，可我还是没能完成当初的愿望，即便当时我信誓旦旦，自负满满，最终却还是只能对着屏幕，在凌晨时分写下我的满腹牢骚。</p><p>陌生人，感谢你的驻目。</p><p>后来，我进了有黄色教学楼的地方，赞叹着附中食堂的奢华，和朋友拉着手逛遍这个不大的校园，当时的我对未来有一个弘大的蓝图：我要努力，我要奋斗，我要把青春最美好的年华投入到学习中去，我要在中华民族伟大复兴的历史进程中实现个人理想，我要做自己的英雄。我一边嗦着食堂的牛肉面，一边幻想着未来。</p><p></p><p>我当时并不知道，那是我最后一次在附中那个食堂吃饭了。因为疫情就要来了。</p><p>转眼就到了2020年初那个冬天。病毒一次又一次的刺激着人们的神经，武汉成了红点点。人们被困在床上，困在家里，困在毫无生气的钢筋城市里。我不止一次的想过逃离，想到封闭的电影院、餐厅，想到说好再聚一次的初中朋友们。我又逐渐接受，接受在线的时断时续的网络课程，接受无法见面的痛苦，接受每天的测温、行程码，接受大打折扣的课业。</p><p>接受那个逐渐平庸的自己。</p><p>不过我想，上帝做事总是有道理的。祂大概是不想让我平庸的太难堪罢。</p><p>时间又这样一缕一缕划过，我们从黄楼搬到了棕色楼，最后又搬回黄楼。我的思想随着时光的倒映在一点一点变化，我现正逐渐接受现在这个有些陌生的自己。毕竟，只有二百天了，又怎么可能不接受呢。</p><p>转眼又是第三个冬天了。</p><p>夜深人静的时候，我时常会想，如果没有这小小病毒，我的生活，我的学习，我认识的人，乃至我的未来，会不会不再是这样？然而，我又深深信奉着，命运总将给我们最好的安排。我只好给自己一个不置可否的回答，然后继续睡去。</p><p>时间是一个你永远找不到具象，但它的影子却又无处不存。平寂、宏大、奇异、荒芜、磅礴，在不知不觉间，改变了你我，改变了生活。陀思妥耶夫斯基在《卡拉马佐夫兄弟》中写道，我们要热爱生活，而不是爱生活的意义。</p><p>我觉得这很可笑，因为生活本就是没有意义的，一如我们的出生、死亡。</p><p>我们只不过都在尽力活着罢了。不论是在被偷走的2020，还是当下的2021，还是即将到来的2022。</p><ri>
写于2021.11.16冬夜</ri> });
}`;
	basicInfo('写在疫情时代的第三个冬天','豆腐泡杀手');
	break;
case '20221116':
	var op = `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1501530177&auto=1&height=66"></iframe><p>记不清从什么时候开始，时间的流逝于我来讲变得越来越迅速。总觉得上一次雪花落在掌心的那种凉沁的体验就在昨天，而当在长春的亲朋好友发来初雪的照片的时候，我才有些意识到，冬天又回来了。</p><p>这是疫情时代的第四个冬天。</p><p>应该是第一次没有在家乡看到初雪吧。去年十月末长春下了第一场雪，当时我可能还在被理综和数学折磨，满脑子想的都是圆曲导数物理实验题和计算，也就理所当然的无暇顾及这种在东北很常见的景色。</p><p>后来我去外地求学，离开了东北，才知道想家的感觉很多时候就在一瞬间。从宿舍望向窗外，十一月的校园里没有一点白色的、灰色的雪的痕迹，一种陌生感就会突然袭来，我的大脑就会告诉自己，这里不是我的家。</p><p>当然，这些都是后话了。</p><p>在去年的今日写下“疫情时代的第三个冬天”的我，是不会预测未来的。不会预测到四个月后，我的城市将因为疫情开始陷入可怕的长达两个月的沉寂，不会预测到2022年3月8号那天我订的高中时代的最后一份外卖是五爷的麻酱鸡丝拌面和青椒肉饼 ，不会预测到五月四号复课那天，为墙上的“距离高考还有34天”担忧的我。</p><p>最后的在校的日子是掐着一天一天过去的。又有很多个最后一次被做完，最后一节课、最后一次模拟考、最后一次倒垃圾、最后一次刷饭卡买三块五的依能蜜桃水、最后一套金考卷、最后一次放学、最后一次和同学穿着校服走在长庆街头，说完再见，跳上回家的车。这样的结尾和我入学的时候，甚至一年之前所想的都有些不同。它就这样轻描淡写的结束，留给我一种很不真实的感觉。</p><p>尽管如此，我还是倔强的把它们当做疫情时代送给我的特殊的礼物。毕竟，我想，在很多年之后，当我们的身边不再常备着口罩，当健康码、行程卡和核酸截图永远的从我们的手机里消失，当卫健委的微博和公众号里没有了当日新增确诊之类的字眼时，我们在回顾这个可能有点疯狂的岁月，共同回忆着网课摸鱼、老师掉线、核酸排队、线上运动会、几乎没体验过的校外食堂、封控前夜的抢菜、密不透风的大白，还有很多在以后看甚是荒谬，但身处其中时又不觉不妥的事情的时候，应该会是笑着的吧。</p><p>后来的故事不太尽如人意，我考了个不太高的分数，去了青岛一所报考的时候才知道它存在的大学。我的下半年在平淡的忙碌中度过，直到朋友给我发来故乡的雪，让我回想起了那些已经走过的日子。去年刚上高三的时候，我的新自习室座位的上一个主人在桌子上贴的便利贴还没撕掉，我就记了下来：</p><p>“明年此日青云去，却笑人间举子忙。”</p><p>当时幻想着高考完的自己，也能这样潇洒自由。如今看来，我所期待的大学的生活，也不过如此罢。</p><p>但好在，现在的我依然相信一切都是最好的安排。在疫情时代的第四个冬天，就让风和阳光倾诉过去的悲伤和欢愉。我明白，时光不会永远停留在瞬间，但会将记忆镌刻在心底。</p><ri>2022.11.16凌晨<br/>于胶东半岛</ri><br/>文末图 | 吉林长春，吉林大学前卫南区上早课的学生们。<st>这是家乡的一个普通的早晨，但对于身在异乡的我，能看见这样的普通又如此珍贵</st>。<br/>（摄影：马尧）<br/><br/><br/>`;
	basicInfo('写在疫情时代的第四个冬天','豆腐泡杀手');
	break;
case '20221119':
	var op = `<p>疫情三岁了。在三岁生日的前夕，我们总算有了一个真正意义上能够衡量应对方案的明文。</p><p>我家的后生曾经问我：“哥，你小时候怎么做的核酸”，本来话到嘴边的一句“我小时候没有那玩意”被憋回去了，换成了一句“忘了”。</p><p>怎么感觉好像真的忘了以前的那段日子。可能忘了2019年末的紧张、2020年初的困难、也可能忘了2021年整年的迷茫、最后都换成了一句2022年的“麻了”。</p><p>三年，发生了什么，只怕还是那句“互联网没有记忆”。</p><p>然后，我们迎来了二十条，一个旨在“放宽防疫政策”，但却“不意味着躺平、放开”的新的规则。放宽不等于减轻。“既要、又要”的难度给防疫工作带来的不是减轻工作压力，就像把手里笔换成了柴火棍然后创作一幅和之前一样的画。</p><p>何况看起来之前的那幅画也没好看到哪去。</p><p>12日的国务院联防联控机制新闻发布会上，国家卫生健康委相关负责人介绍，将通过对各地加强政策解读和培训等一系列举措，推动二十条优化措施落地见效。目前，各地已经成立整治“层层加码”工作专班，对于群众反映的问题积极有效回应。</p><p>如何做好“既要、又要”，相信谁都不是特别清楚。因为每一条方向性的政策落实，都要经历各种各样与实际情况的磨合。这就需要各地在大原则和基本规定的范围内去各自探索，尝试创造一个个范例。</p><p>防疫工作本身并没有一个很一致、很公式化、共识的衡量标尺，防疫工作的总效果难以评判，也就是优秀的“0”之后也难免有防疫过度的可能性，反之则是“防疫力度不足”这种没人愿意接受的结果。但是换言之，没有绝对的标准就有相对的比较，哪些地方做的很好，哪些地方做的却不够好，大家又一眼就能看出来，形成社会比较统一，共同的评价。</p><p>目前看来，各地在疫情防控工作中最重要的还是要做到实事求是、做好沟通。沟通带来的结果不一定是最好的，但肯定不是最坏的。这将是民众最有可能接受的、理解的结果。</p><p>首先应该清楚，网络上“彻底放开”的声音很突出，但那其实是一种对于“过度防疫”的一种逆反。站在实际角度出发，无论是就国情就目前而言，或者从大多数人的角度去考虑，“躺平”并不合适。无论国外什么样，如果疫情能够防住，老百姓还是希望防住它，不要失控性扩散。所以防疫确实要坚持住，至少目前这一决心切不可动摇。</p><p>然而一直以来，舆论的最大意见指向了过度防疫，表明“一刀切”、层层加码带来的种种次生灾难和问题的确为公众不可接受。调整必须发生，而这恰恰是二十条里最受关注的一番内容。</p><p>上文中提到的两个愿望看起来存在冲突，但其本质上是政策的平衡问题。</p><p>社会的每一个参与者早在经历了这几年的经历之后都渐渐明白这个“矛盾”。但大家还是希望，各地政府能把“两个愿望”协调到什么程度，就尽量去做到什么程度。比如就我了解，浙江省一直没有全国某个时期疫情爆发的“震中”，也没有产生过因为存在过度防疫现象的全网头部公共舆论事件。搞大范围静默的，深圳、合肥、成都、等城市都是速战速决，但有的城市却是一拖多月。事实证明，在“既要又要”方面，我们确实有很大的努力改善空间，只抱怨二者之间的矛盾，执行只顾一头层层加码的做法，公众不可接受，也违反了社会基本规律，是难以持续的。</p><p>防疫需要做好，且应该在一些基本规则和要求的框架内去开展。那些基本的规则，都是维护老百姓的切身利益所在的体现。“既要又要”一点都不空洞，反而是一种百姓需要疫情前正常生活的愿望表现。 </p><p>一个地方只要做出完全的努力，群众心理单那杆秤就一定不会偏移。如果哪个地方搞得不好，群众作为实际情况的承载者同样会有切身体会，不满的舆论会接踵而至。</p><p>担当是为政者的宿命。公众知道当下统筹防疫和经济社会发展的艰难，国家同样知道。无论从疫情中突围多不容易，人们总是寄希望于最好的结果。</p><p>疫情三年，改变的东西太多。高中附近的文具店、餐饮店，很多都没有坚持下去。上个学期还聊得很来的店老板，毫无预兆的在新学期开始之前，就和店铺的牌子一起消失在人海之中。在今年长春疫情的兵荒马乱中，我的高中时代也就此别过。在大学，疫情防控成为比高考压力更压人的枷锁，锁住了我们的自由，也锁住了我们的青春。</p><p>我写到这里的时候，北京和石家庄的同学们许多都已经陆续准备返乡，而吉林的几所大学这学期还从未线下开学。“二十条”会不会让这样荒谬的场景成为历史？我不知道。</p><p>未来会怎样？我不愿去想，也算是给自己留一个可以期望的现实。待尘烟散去，愿被疫情偷走时间的你我，都能微笑着开启属于自己的新的生活。</p>`;
	basicInfo('等待尘烟散去','给你一拳');
	break;
case '20221209':
	var op = `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=370 height=86 src="//music.163.com/outchain/player?type=2&id=17572557&auto=1&height=66"></iframe><p>那是一个傍晚，窗外雨点打在窗户上，淅淅沥沥的声音让他感到惬意，挂在那许久未开过的电视上的猫咪也伸了个懒腰，这对于他来说是一个少有的休息日：没有上司的工作催促，没有父母的唠叨，没有女朋友。</p><p>对，他没有女朋友。想到这里，他突然莫名伤悲。或许是情绪受到环境的感染了，又或许是我所书写的文字让他感到了悲伤，反正他感到了一点悲伤，所以他面对悲伤的处理方法是什么呢，是睡去，沉沉的睡去。</p><p>想要大梦一场，梦里有蓝天白云，有自由进出的校园，有少年拿着花朵向少女告白，有鱼儿在清澈的河流里尽情地游弋，有不同肤色的少年少女牵起手来一起跳舞，有人脱帽致敬，有人顽强站起身只为面对生活不低头。梦里还有什么？有大白兔奶糖，当他要撕开糖纸的时候，叮铃铃叮铃铃的电话声突然把他叫了起来。</p><p>他接了个电话，电话那边说：“先生，您需要小额贷款嘛？我亻......”他挂断了电话，没有因为好不容易来的一个休息的美梦被打碎而破口大骂。</p><p>他只是挂断了电话。</p><p>他觉得就比之前无数次接起电话也只能“哎哎，好的好的”这么答应之后去打开电脑要好得多了。他想着想着走到了电脑前。</p><p>打开电脑，他也不知道看些什么。是看乌烟瘴气的博客？还是一滩烂泥的短视频？他就是漫无目的地在网上游荡着，像是一个赛博幽魂，看着看着，乏了，倒在桌子上进入了梦乡与周公相见。</p><p>他的梦里没有姬旦，但是有鸡蛋。他梦见长白山大雪封山，而他立于山脚，他看到原始森林里飞鸟惊起，走兽四散，他看到那流淌而下的山泉一片一片的破碎、落下，他看到山谷上刻画着的那周老师的姓名。</p><p>是啊，周老师，那山上的庙里有一尊金身佛像，庙里还有一个和尚敲钟，那佛像镀了一层金身，他走进看，庙里没有佛像，只不过是一个棕黄色的雪人，也没有金身，只是他在梦里为这个雪人造出来的罢了。离远看那也不是庙，是个不大不小的学校，但钟声确实时时刻刻存在的，因为他的闹钟响了，不知道他为什么会把闹钟声调成钟磬音，但是确实他也醒了。</p><p>那大雪下在了长白山上，也不止下在了长白山。他打算起身出门，一步却走到了老君山，老君山也在下大雪，他看到一对恋人在亲吻。他手上攥着一朵花，一朵他攥了很久的快要枯萎的香槟玫瑰，可那对情侣之间摆着的是一束红玫瑰，那一抹红色在雪地里映着，鲜艳的仿佛那太阳一般。可他也真的醒了，原来是他真的睡到了第二天早上，阳光从窗户中照射进来，暖洋洋的。</p><p>或许太阳不属于他，但阳光确实让他温暖，这对他来说就足够了。</p><p>他起身出门了，打算运动运动，却一扭头走进了快餐店，点了一个可乐汉堡套餐。可是今天不是星期四，今天只是一个普通的一天。他拿着用纸袋装着的食物，在家附近走了一圈又回家了，他也不知道平常的一天应该干点什么，是应该打一打已经有好几个月没碰的游戏了，还是应该看一看大家都赞的老电影，亦或者是去刷一刷期待了好久已经上线的综艺。</p><p>但他什么都没做，只是无聊地待着，把电脑关机，躺在床上，无聊地刷着手机，一边想要消耗时间，一边又在担心刷视频浪费时间。矛盾在他的日常生活中体现的淋漓尽致，一边想要去找周小姐聊他今天在路上看到的小野猫，一边又害怕周小姐会不会对小野猫一点兴趣都没有。他就想着想着，就又睡着了，可是他没做梦，只是很快就醒来了，又是一个傍晚，可是今天没下雨，他也没心情，于是他继续去做他的事了。</p><p>写到这里，这个小故事就结束了。“他”继续进行着他的生活了，大家看完这个小故事也要继续自己的生活啦，文章中的“他”或许是我，是你，是任何一个人，可是周老师不姓周，我也没梦到那么多事情，就是有一天半梦半醒间看到的一瞬间。写出来有点落俗，那些隐晦的隐喻也不用去猜，还是希望大家在看到大雪封山，庙门禁闭的时候，能有林冲的勇气叭。</p><p>希望大家天天开心，尤其是你，周老师，祝你这个冬天快乐。</p>`
	basicInfo('祝你这个冬天快乐','铁柱');
	break;
case '20221213':
	var op = `<p>2022年12月12日0点整，通信行程卡官方微信公众号上发布了一则公告称，根据国务院联防联控机制综合组的有关要求，自12月13日零时起，正式下线“通信行程卡”服务。届时，其短信、网页、微信小程序、支付宝小程序、APP等查询渠道也将同步下线。</p><p>消息一出，迅速刷屏了各路社交软件和媒体。大家纷纷截屏留念，向这个时代特征鲜明的产物告别。</p><p>对我而言，我早已不记得它刚出现时的样子了。行程卡2020年3月6日上线，到今天关停，经历了近三年的时间。在这三年里，我早已经习惯了有它的生活，就如同48小时核酸、健康码一样。而现在，这些“特殊记忆”正一件又一件的消失在我们的生活中。</p><p>前几天返乡的航班落地长春之后，我推着行李一路畅通无阻的出了机场，心里还有几分诧异。没有查验核酸，没有扫健康码，没有落地检，这样的生活对于我而言显得陌生又熟悉。当然，我深知，陌生来自三年的记忆，而熟悉，则从更远的从前而来。</p><p>我们的生活，大概要回去了罢。</p><p>所以，更多的时候，我们大概告别的不仅仅是行程卡，还有三年的回忆和各种故事。随着疫情防控政策的调整，在可以预见的将来，将有更多“特殊时代的产物”一个个离开我们。</p><p><st>当然，从某种意义上来讲，他们的离开，便是我们的归来。归回原来的生活，归入生活的正轨，走向更广阔的世界。</st></p><p>在“#告别行程卡#”的微博话题下，网民们激动的发表着自己的见解。有人说，要感谢行程卡，感谢他们在特殊时期发挥的巨大作用。也有人冷冷的放下四个大字，“再也不见”。</p><p>我想了很久，也没有想到一句很好的话来结束这段文字。后来我想，行程卡这个东西。大概和这个国家的许多东西一样，<st>“应需而生，适时而终”</st>。</p><p>这就是行程卡和我们的故事。5分钟前，它已经结束了自己的使命。</p>`;
	basicInfo('当我们告别行程卡时，我们在告别什么','NLS');
	break;
case '20221231':
	var ox=1;
	basicInfo('告别未来十年里最好的一年——春潮2023新年献词','春潮编辑部');
	break;
case '20230308':
	var ox=1;
	basicInfo('疫年整','NLS');
	break;
case '20230323':
	var ox=1;
	basicInfo('葬尸湖','307');
	break;
case '20230330':
	var ox=1;
	basicInfo('《不止不休》：黄金年代理想主义的挽歌','杨二狗');
	break;
case '20231108':
	var ox=1;
	basicInfo('写在没有疫情的第一个冬天','豆腐泡杀手');
	break;
case '20231231':
	var ox=1;
	basicInfo('像流水一样不再回头——春潮2024新年献词','春潮编辑部');
	break;
case '20241026':
	var op = `<p>故乡的天空很美。何以如此说呢？或许是因为太久没有回家，时而想起故乡的时候，回忆给它加了一层美好的滤镜，或许是因为成都的天空总是灰沉沉的，让人心情也暗暗蒙上了一层阴影，从而更加想念长春那些晴朗无云的天空了吧。</p><p>我对天空有种说不出的痴迷，我很喜欢蓝天白云的一碧万顷，也钟情于黄昏时分的霞光满天。如若碰到极好的天气，不管在做什么，我总会驻足下来，用手机定格下这些独特的瞬间。</p><p>再回看拍下的这些照片，总能想到当时的情景：或是下课骑车赶去吃饭，或是在外和同学聊天散步。但家乡的天空却总显得比这里好看，上了大学之后，能够回家的时间只有每年寒暑假。每次回去，手机里留下的照片不是很多，天空却占了一大半。</p><p>高考之前的时候，有时实在学不进去了，我就喜欢望着天空发呆。透过教室的窗户，看到外面的天空由金黄变成蓝调、再慢慢变暗下去，直到完全黑天，日子就这么周而复始的过去。高考前一周，知识体系已基本定了型，我也离开了学校的二晚自习。其实，我本该去自习室继续奋战到深夜，但我每天都要去南湖公园逛一逛，每次从自由大路的小门进去，我会挑不同的路线一路走到南湖大桥下，然后走上桥，先俯瞰整个南湖，再抬起头对着天空发呆。</p><p>那正是长春初夏的时候，每天的傍晚时分，湖边总有阵阵微风吹来，我从桥的一边慢步走到另一边，望着路上川流不息的车流从我身边经过，天空此时美丽的令人着迷。我拍下了那个瞬间，直至今日仍令我难以忘怀。现在回想起来，那些平常的日子已转瞬即逝，而我的青春也随着时间的洪流踉跄地流逝了。</p><p>留恋一座城市，往往是因为在那里生活了太多年，偶然的离别，让伤感和回忆随着时间的推移变得越来越清晰。作为一个东北孩子，我已经太久没有呼吸到带着清爽沁凉感的空气，太久没有听到熟悉的东北乡音，太久没有穿梭在熟悉的大街小巷了。其实，我的内心是充满矛盾的，我深知留在家乡不会有太大的发展，家里人也说“男孩子嘛，就该出去闯一闯，去南方绝对比在长春更有发展。”于是我来到了这里，我曾以为上了大学后自己会变得更加独立和自由，可如今两年时光匆匆过去，在这两年多的时间里，我的确去过很多座城市，遇见了不同的风景，但我在如今的生活中似乎找不到一点这样的感觉：我真的已经独立自由了吗？我真的成为了自己想要成为的样子了吗？</p><p>笼中鸟，何时飞？似乎这个牢笼把我圈的更加深了。</p><p>初一的时候，那时我还不到十三岁，那是我记事以来第一次自己出门远行，我去了上海的舅舅家过年。姥姥和姥爷尚都健在人世，一周多的时间里，我跟着舅舅一家走亲访友、自驾郊游。回家之后，因为爸爸妈妈平日都要上班，绝大多数时间，我都是独自在家里度过。在那段稚嫩的记忆里，我留下的是无尽的空虚和不安。我像是一只囚鸟，被短暂地放了出来而又重新回到了原点。后来我慢慢长大，这段记忆似乎已被青春的风暴给席卷走了，但它却一直在我的心底埋藏着，不知什么时候，我又会回想起那种感觉，心头不由得一紧。</p><p>如今物是人非，姥姥已过世多年，姥爷也在去年的冬天离开了我们。可是生活还要继续，我也要好好生活，对吗？即使现在的一切不那么完美，但似乎也不算太糟糕。这一天我抬起了头，恍惚间，我仿佛看到了十八岁的自己正在痴痴地凝望着同一片天空。</p><p>那是故乡的天空。</p><ri>2024.10.26 于成都</ri>`;
	basicInfo('故乡的天空','');
	break;
case '20241213':
	var op = `<p style="line-height:2;">文章名称：愿人生中的每段旅程，都有故事娓娓可道
<br/>
类别：新年献词
<br/><br/>
此文即将上线微信公众号春潮SPRIDE，欢迎您提前预约，以便在文章上线后第一时间通知您。此文是微信用户专享文章，暂无计划在春潮网发布。
<br/>
预约方式：发送标题为“2025新年献词上线预约”的电子邮件至hello@spride.asia即刻预约。待文章正式发布后，我们将通过电子邮件的方式通知您。</p>
`;
	basicInfo('【预约】愿人生中的每段旅程，都有故事娓娓可道——春潮2025新年献词','<script>document.getElementById(\'art-poster\').style.display=\'none\';</script>');
	break;
default:
	if(IS==='article') {
		elHide('article_main');
		elShow('article_404');
	}
	break;
}
if(SC==='0') {elHide('ifauth');}

switch(TP) {
case 'post':
	var ox = `投稿电子邮箱：hello#spride.asia（将#替换为@）<br/><!--纸稿邮寄地址：吉林省长春市朝阳区桂林街道东北师大附中食堂丰巢快递柜-->自2022年5月起，不再接受纸质投稿邮寄，请统一使用电子邮箱。<br/>联 系 人：杨先生（编辑部）<bi>稿件要求：</bi>1.稿件应当文字流畅、叙事清晰、情感真挚；<br/>2.稿件主题不限、体裁不限，标题自拟；<br/>3.稿件字数在400-3500之间为佳（诗歌类稿件无此限制）；<br/>4.稿件具有鲜明个人特色的为佳；<br/>5.稿件应当接受适当范围内修改；<bi>注意事项：</bi>*不接受一稿多投，稿件确定被选中后默认投放在微信公众号、春潮网2个平台。投稿结果一般在1-5个工作日内通过与投稿相同方式告知您。若20个工作日内仍未收到回复，稿件可自行处理；`;
	specialInfo('栏目投稿');
	break;
case 'aboutus.2022':
	var ox = `\u3000\u3000春潮网2021年10月正式上线，由春潮编辑部和微信公众号春潮SPRIDE主办。我们的内容广泛，涵盖哲史、文学、时事、社会纪实等，展现当代青年风采，弘扬优秀精神文化。<br/>\u3000\u3000自成立以来，在中国共产党光辉的照耀下，春潮网始终深刻领悟“两个确立”的决定性意义，增强“四个意识”、坚定“四个自信”、做到“两个维护”，始终以宣传中国特色社会主义、宣传社会正能量内容为己任，始终以弘扬中国特色社会主义先进文化、弘扬社会正气为荣。<br/>\u3000\u3000拥抱智能互联网，加快全体系向智能互联转型升级。未来，春潮网将不断努力，为建设社会主义美好明天而继续砥砺前行。`;
	specialInfo('关于本站');
	break;
case 'lxhz':
	var ox = `春潮网网站商务合作请联系电子邮箱：hello#spride.asia（将#替换为@，来信标注：网站合作）<br/>公众号商务合作请联系电子邮箱：2140567150#qq.com（将#替换为@，来信标注：公众号合作）`;
	specialInfo('商务合作');
	break;
case 'readmore':
	var ox = `<bi>关注微信公众号春潮SPRIDE，阅读更多精品文章。<br/>id：spring_tide2020</bi>`;
	specialInfo('关注公众号看更多');
	break;
case 'shouquan':
	var ox = `授权转载事宜请联系微信公众号：春潮SPRIDE（id:spring_tide2020）`;
	specialInfo('授权转载');
	break;
case 'author:铁柱':
	var ox = `<zuoz>铁 柱<w>站在山顶，向往宇宙</w></zuoz><zzxq><ti>2022-12-09</ti>祝你这个冬天快乐<br/><ti>2021-10-09</ti>奋斗赋予时间以意义，精神照亮民族的未来<br/><ti>2021-06-01</ti>儿童节快乐<br/><ti>2021-02-20</ti>界碑永存，英雄不朽<br/><ti>2020-10-20</ti>还有你陪我数星星</zzxq>`;
	authorPage();
	break;
case 'author:Abel':
	var ox = `<zuoz>Abel<w>心怀希望，向阳而生</w></zuoz><zzxq><ti>2024-10-26</ti>故乡的天空</zzxq>`;
	authorPage();
	break;
case 'author:给你一拳':
	var ox = `<zuoz>给你一拳<w>我一肚子烂泥却有万人敬仰啊</w></zuoz><zzxq><ti>2022-11-19</ti>等待尘烟散去</zzxq>`;
	authorPage();
	break;
case 'author:豆腐泡杀手':
	var ox = `<zuoz>豆腐泡杀手<w>冇豆泡的麻辣烫莫得灵魂</w></zuoz><zzxq><ti>2023-11-08</ti>写在没有疫情的第一个冬天<br/><ti>2022-11-16</ti>写在疫情时代的第四个冬天<br/><ti>2021-11-16</ti>写在疫情时代的第三个冬天</zzxq>`;
	authorPage();
	break;
case 'author:杨二狗':
	var ox = `<zuoz>杨二狗<w>人要有梦想，万一实现了呢？</w></zuoz><zzxq><ti>2023-03-30</ti>《不止不休》：黄金年代理想主义的挽歌<br/><ti>2021-05-04</ti>五四青年，我们为何而纪念</zzxq>`;
	authorPage();
	break;
case 'author:沐星雨人':
	var ox = `<zuoz>沐星雨人<w>想要回到那时候无忧无虑的美好，让我穿越时光的隧道</w></zuoz><zzxq><ti>2021-09-26</ti>迪迦：致以光明<br/><ti>2021-05-26</ti>追不上时代脚步的人<br/><ti>2021-05-14</ti>热血难凉<br/><ti>2021-05-01</ti>我看见，我祈愿<br/><ti>2021-03-28</ti>影子与你<br/><ti>2021-01-13</ti>夜晚，很累的人睡不着<br/><ti>2020-10-17</ti>愿爱无忧</zzxq>`;
	authorPage();
	break;
case 'author:NLS':
	var ox = `<zuoz>NLS<w>Life is a fucking movie.</w></zuoz><zzxq><ti>2023-03-08</ti>疫年整<br/><ti>2022-12-13</ti>当我们告别行程卡时，我们在告别什么<br/><ti>2021-07-24</ti>我不喜欢那种一眼就能望得到头的未来<br/><ti>2021-06-09</ti>再见，青华<br/><ti>2021-05-23</ti>死亡与新生<br/><ti>2021-03-31</ti>我们每个人其实都挺累的</zzxq>`;
	authorPage();
	break;
case 'author:春潮编辑部':
	var ox = `<zuoz>春潮编辑部</zuoz><zzxq><ti>2024-12-31</ti>愿人生中的每段旅程，都有故事娓娓可道——春潮2025新年献词<br/><ti>2023-12-31</ti>像流水一样不再回头——春潮2024新年献词<br/><ti>2022-12-31</ti>告别未来十年里最好的一年——春潮2023新年献词</zzxq>`;
	authorPage();
	break;
case 'author:307':
	var ox = `<zuoz>307<w>咖喱饭还是鸡排的好吃</w></zuoz><zzxq><ti>2023-03-23</ti>葬尸湖</zzxq>`;
	authorPage();
	break;
default:
	if(IS==='special') {
		window.location.href = '/';
	}
	break;
}


function basicInfo(x1,x2) {5
	document.getElementById('art-title').innerHTML = x1;
	var y = Math.floor(ID/10000);
	var m = Math.floor((ID/100)%100);
	var d = Math.floor(ID%100);
	m = m.toString().padStart(2, '0');
	d = d.toString().padStart(2, '0');
	document.getElementById('art-time').innerText = y + '-' + m + '-' + d;
	document.getElementById('art-poster').innerText = x2;
	if(op) {
		document.getElementById('art-content').innerHTML = op;
	}
	if(ox===1) {
		document.getElementById('art-content').innerHTML = `<p style="line-height:1;text-align:center;font-size:14px;color:#9f9f9f;margin:200px 0;"><img src="https://1.s140i.faiscm.com/4/AIwBCAAQBBgAIM_Mu94FKJXmt6sGMHM4cw.png" style="width:90px!important;user-select:none;"/>暂时无法呈现此文章, 请在微信公众号内阅读。<br/><br/><br/><br/><br/><!--<a id="gmcwan" class="paybtn" href="javascript:;" onclick="readPay(9.9);">打赏文章</a><a id="gmsban" href="javascript:;">打赏文章</a>--></p>`;
	}
 	elTitl(x1);
} 

function authorPage() {
	elHide('special_toptit');
	document.getElementById('spec_mdb').style.border = 'none';
	document.getElementById('spec_mdb').style.boxShadow = 'none';
	document.getElementById('spec_mdb').style.marginTop = '10px';
	document.getElementById('special-content').style.width = '100%';
	document.getElementById('special-content').style.padding = '18px 0';
	var Cwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if(Cwidth >= 900) {
		document.getElementById('spec_mdb').style.background = 'none';
	}
	specialInfo('作者信息');
}
function swp(x00) {
	window.location.href = '?articleCategorySelect='+x00;
}
function checkSiteStatus() {
	var userConfirmed = confirm("confirm");
	if(userConfirmed) {
		alert('时间：2000年1月1日0时0分\n状态：OL\n流量：A');
	}
}
function specialInfo(x1) {
	document.getElementById('special_toptit').innerText = x1;
	document.getElementById('special-content').innerHTML = ox;
	elTitl(x1);
}
function elHide(x) {
	document.getElementById(x).style.display = 'none';
}
function elShow(x) {
	document.getElementById(x).style.display = 'block';
}
function elTitl(x) {
	document.title = x + ' - 春潮网';
}
function openArticle(x) {
	window.open('?is=article&ID=' + x + '&skin=skin0&scheck=1', '_blank');
}
function openAArticle(x) {
	window.open('?is=article&ID=' + x + '&skin=skin0&scheck=0', '_blank');
}
function openSpecial(x) {
	window.open('?is=special&p_typ=' + x + '&skin=skin0&scheck=1', '_blank');
}
function addList(w, x, y, z) {
	var addListContent = `<a href="javascript:void(0);" onclick="openArticle('${x}${y}${z}');"><b>${w}</b><t>${x}-${y}-${z}</t></a>`;
	document.getElementById('news_addlist').insertAdjacentHTML('beforeend', addListContent);
}
function addAList(w, x, y, z) {
	var addListContent = `<a href="javascript:void(0);" onclick="openAArticle('${x}${y}${z}');"><b>${w}</b><t>${x}-${y}-${z}</t></a>`;
	document.getElementById('news_addlist').insertAdjacentHTML('beforeend', addListContent);
}
function iname(span) {
	var x = span.innerText;
	window.open('?is=special&p_typ=author:' + x + '&skin=skin0&scheck=1&sp_pg=w_info', '_blank');
}

function readPay(price) {
	elShow('paybox_1');
	document.getElementById('paybox_2').innerHTML = '正在打开支付页面付款「' + price + '元」，请勿离开...';
	setTimeout(function() {
		alert('error');
		elHide('paybox_1');
		elHide('gmcwan');
		elShow('gmsban');
	}, 3000);
}
function closesjcc() {elHide('sjccxctc');}
function showSJCCPAGE() {elShow('sjccxctc');}


if(!IS || IS==='') {
	elShow('p_index');
	elTitl('首页');
}
if(IS==='article') {
	elShow('p_article');
}
if(IS==='special') {
	elShow('p_special');
}
if(SK==='new') {
	var alertSearch = document.getElementsByTagName("alert");
	for (var i = 0; i< alertSearch.length; i++) { 
	    alertSearch[i].style.display = "none";
	}
}

if(ID !== ''&& ID) {
		document.getElementById('isid').innerText = '此文章不存在';
	}
	if(ID === '' || !ID) {
		document.getElementById('isid').innerText = '暂无内容';
	}

function openNavMobile() {
	document.getElementById('navbar').style.left = '0';
	document.getElementById('navbar').style.opacity = '1';
	document.getElementById('navbarzz').style.left = '0';
	document.getElementById('navbarzz').style.opacity = '1';
	document.body.style.overflow='hidden';
}
function closeNavMobile() {
	document.getElementById('navbar').style.left = '-82%';
	document.getElementById('navbar').style.opacity = '0';
	document.getElementById('navbarzz').style.left = '-102%';
	document.getElementById('navbarzz').style.opacity = '0';
	document.body.style.overflow='visible';
}


function ctstbos() {
	var w = document.getElementById('dazi').innerText;
	if(w === '大') {
		document.getElementById('art-content').style.fontSize = '24px';
		document.getElementById('art-title').style.fontSize = '32px';
		document.getElementById('dazi').innerText = '小';
	}
	if(w === '小') {
		document.getElementById('art-content').style.fontSize = '';
		document.getElementById('art-title').style.fontSize = '';
		document.getElementById('dazi').innerText = '大';
	}
}

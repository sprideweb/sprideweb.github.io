document.oncopy = function(e) {
    e.preventDefault();
    alert('为保护知识产权，本站所有内容禁止复制。如想要获取文章内容，请联系网站管理员。');
    return false;
}

function tz(link) {
    window.location.href=link;
}

        function hashChangeHandler() {
            var hash = window.location.hash.substr(1); 
            var arthash = window.location.hash.substr(1,7); 
            var articlehash = window.location.hash.substr(8);
            var zzhash = window.location.hash.substr(1,14);
               if (arthash ==='/') {
                sL();
                window.scrollTo(0,0);
                document.getElementById("spride").style.display = "none";
                document.getElementById("index").style.display = "none";
                document.getElementById("column").style.display = "none";
                setTimeout(function() {
    document.getElementById("index").style.display = "block";  }, 388);
         document.getElementById("about_btn").classList.remove("active"); 
       document.getElementById("contact_btn").classList.remove("active");                 
 document.getElementById("index_btn").classList.add("active"); 
 document.title = "首页 | 《惊时》电子刊";
               }
            if (arthash ==='/spride') {
                sL();
                window.scrollTo(0,0);
               document.getElementById("index").style.display = "none";
                document.getElementById("column").style.display = "none";
                document.getElementById("spride").style.display = "none";
                setTimeout(function() {
    document.getElementById("spride").style.display = "block";
  }, 388);
                var elements = ['index_btn', 'about_btn', 'contact_btn'].map(id => document.querySelector(`#${id}`));
                elements.forEach(element => {
                    if (element) {
                        element.classList.remove('active');
                    }
                });
                
                 /*document.getElementById("srtbtp").style.display = "none";
                 document.getElementById("srtbtp").style.display = "block";  
                 */
setTimeout(function() {document.getElementById("zzhash2").innerHTML = '';
                document.getElementById("srtbtp").innerHTML = '';
                if(zzhash === '/spride/author') {
                    document.getElementById("zzhash2").innerHTML = '人物信息仅供参考，更正或补充请联系网站管理员。';
                }

                if(articlehash === '/about') {
                    document.getElementById("about_btn").classList.add("active"); 
                    document.getElementById("srtbtp").innerHTML = '<img src=\"https://1.s140i.faiscm.com/2/AIwBCAAQAhgAIKrVm-QFKNDOl5UHMIAPOKAB.jpg\"/>';
                    document.getElementById("spridetit").innerText = '关于本刊';
                    document.getElementById("spridediv").innerHTML = '<h4 class=\"gywmh4\">惊时电子刊简介</h4><span class=\"gyccw\">《惊时：东北师大附中2019级20班班刊》创刊于2019年9月，是时东北师大附中2019级20班主办的原创班级刊物，班主任王锦川老师。本刊原计划于2020年初完成制作并出版印刷，因疫情原因至今未能成册。<br/><br/>值此创刊四周年之际，我们将当时收到的原创稿件找出并投放在了惊时电子刊网站，希望您阅读愉快。（稿件正陆续更新中）</span><span class=\"gyccw\" style=\"text-align:right;\">2023.12&nbsp;&nbsp;&nbsp;&nbsp;</span><br/><h4 class=\"gywmh4\"><img src=\"https://www.msannu.cn/file/2201023001/584039ebfa0c40c88910c8b323ca0552/41483be3695645e4b5301b0c93e9bdb0.jpg\" width=\"65%\"/></h4>';
                }
                if(articlehash === '/contact') {
                    document.getElementById("contact_btn").classList.add("active"); 
                    document.getElementById("spridetit").innerText = '联系本站';
                    document.getElementById("srtbtp").innerHTML = '<img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgzsOqtAYosrTCcDCADziVBA.png\"/>';
                    document.getElementById("spridediv").innerHTML = '<h4 style=\"color:#272727;background:#f0f0f0;line-height:2;\"><b>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如想要更新作者信息、文章内容请联系惊时网站管理员：<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2140567150（惊时管理员QQ）<br/>&nbsp;</b></h4><br/><br/><h4 style=\"color:#272727;background:#f0f0f0;line-height:2;\"><b>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如遇页面打不开、文字图片显示错误等网站bug请直接反馈至春潮网总站邮箱：<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hello#spride.asia（将#替换为@）<br/>&nbsp;</b></h4>';
                }
                if(articlehash === '/page/bkbwh') {
                    document.getElementById("spridetit").innerText = '班刊编委会';
                    document.getElementById("spridediv").innerHTML = '总顾问：<a href=\"#/spride/author/zhshao\">邵志豪</a><br/><br/>总主编：<a href=\"#/spride/author/jcwang\">王锦川</a><br/><br/>主&nbsp;&nbsp;编：<a href=\"#/spride/author/hrjiang\">姜浩然</a><br/><br/>编&nbsp;&nbsp;委：<a href=\"#/spride/author/jydu\">杜佳依</a>&nbsp;&nbsp;&nbsp;<a href=\"#/spride/author/kxliu\">刘可心</a>&nbsp;&nbsp;&nbsp;<a href=\"#/spride/author/zxliu\">刘子希</a>&nbsp;&nbsp;&nbsp;<a href=\"#/spride/author/jhwang\">王景弘</a>&nbsp;&nbsp;&nbsp;<a href=\"#/spride/author/pbwang\">王鹏博</a>&nbsp;&nbsp;&nbsp;<a href=\"#/spride/author/yfwang\">王一帆</a>&nbsp;&nbsp;&nbsp;<a href=\"#/spride/author/shyang\">杨士赫</a>&nbsp;&nbsp;&nbsp;<a href=\"#/spride/author/ycyu\">于跃晨</a>&nbsp;&nbsp;&nbsp;<a href=\"#/spride/author/yuezhang\">张 月</a>&nbsp;&nbsp;&nbsp;<a href=\"#/spride/author/xyzhu\">朱晓雅</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（按拼音顺序排列）';
                }
                if(articlehash === '/page/cengfanditu') {
                    document.getElementById("srtbtp").innerHTML = '';
                    document.getElementById("spridetit").innerText = '东师附中2019级9班毕业蹭饭地图';
                    document.getElementById("spridediv").innerHTML = '<a href=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAghZG8tAYosL2u8gYwgBQ4oAs.png\" target=\"_blank\"><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAghZG8tAYosL2u8gYwgBQ4oAs.png\" width=\"100%\"/></a><center><br/><br/>点击图片查看高清大图</center>';
                }
                if(articlehash === '/author/xiaochen') {
                    document.getElementById("spridetit").innerText = '陈 骁';
                    document.getElementById("spridediv").innerHTML = '陈骁，现就读于吉林大学数学学院 。（截至2023年）';
                }
                if(articlehash === '/author/shyang') {
                    document.getElementById("spridetit").innerText = '杨士赫';
                    document.getElementById("spridediv").innerHTML = '杨士赫，本刊编委。';
                }
                if(articlehash === '/author/jcwang') {
                    document.getElementById("spridetit").innerText = '王锦川';
                    document.getElementById("spridediv").innerHTML = '王锦川，东北师范大学附属中学教师、曾任东北师大附中2019级9班班主任。<center><br/><br/><br/><br/><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgjvSXtAYo8IX-yQMwVzhy.png\" width=\"200px\"/><br/><br/></center>';
                }
                if(articlehash === '/author/zhshao') {
                    document.getElementById("spridetit").innerText = '邵志豪';
                    document.getElementById("spridediv").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邵志豪，男，1974年6月生，浙江宁波人，教育学博士，正高级教师，省级学科带头人，东北师范大学博士生导师。<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现任东北师范大学附属中学校长、第十三届全国人大代表、国家教师教育咨询专家委员会委员、中国教育学会高中教育专业委员会常务理事、教学管理改革指导专委会委员、吉林省教育学会副会长、吉林省督学、吉林省享受省政府津贴专家，长春市青年联合会副主席。<center><br/><br/><br/><br/><img src=\"https://www.msannu.cn/ms-mcms/upload/1/editor/1683769659840.png\" width=\"200px\"/><br/><br/></center>';
                }
                if(articlehash === '/author/zhandong') {
                    document.getElementById("spridetit").innerText = '董 展';
                    document.getElementById("spridediv").innerHTML = '董展，现就读于山东大学。（信息截至2023年）';
                }
                if(articlehash === '/author/xyzhu') {
                    document.getElementById("spridetit").innerText = '朱晓雅';
                    document.getElementById("spridediv").innerHTML = '朱晓雅，本刊编委，现就读于华东师范大学。（信息截至2023年）';
                }
                if(articlehash === '/author/yuezhang') {
                    document.getElementById("spridetit").innerText = '张 月';
                    document.getElementById("spridediv").innerHTML = '张月，本刊编委。';
                }
                if(articlehash === '/author/yfwang') {
                    document.getElementById("spridetit").innerText = '王一帆';
                    document.getElementById("spridediv").innerHTML = '王一帆，本刊编委。';
                }
                if(articlehash === '/author/hrjiang') {
                    document.getElementById("spridetit").innerText = '姜浩然';
                    document.getElementById("spridediv").innerHTML = '本刊主编，吉林教育学院（2022-2023），现就读于长春理工大学光电工程学院。（信息截至2023年）<center><br/><br/><br/><br/><img src=\"https://13511974.s21i.faiusr.com/2/ABUIABACGAAg5OiWtAYo9qTWhgMw4gI42AM.jpg\" width=\"200px\"/><br/><br/></center>';
                }
                if(articlehash === '/author/ycyu') {
                    document.getElementById("spridetit").innerText = '于跃晨';
                    document.getElementById("spridediv").innerHTML = '于跃晨。本刊编委。';
                }
                if(articlehash === '/author/ytwang') {
                    document.getElementById("spridetit").innerText = '王艺曈';
                    document.getElementById("spridediv").innerHTML = '王艺曈，现就读于香港理工大学。（信息截至2023年）';
                }
                if(articlehash === '/author/xinliang') {
                    document.getElementById("spridetit").innerText = '梁 鑫';
                    document.getElementById("spridediv").innerHTML = '梁鑫，现就读于东北林业大学。（信息截至2023年）';
                }
                if(articlehash === '/author/zxliu') {
                    document.getElementById("spridetit").innerText = '刘子希';
                    document.getElementById("spridediv").innerHTML = '刘子希，本刊编委。';
                }
                if(articlehash === '/author/jhwang') {
                    document.getElementById("spridetit").innerText = '王景弘';
                    document.getElementById("spridediv").innerHTML = '王景弘，本刊编委。';
                }
                if(articlehash === '/author/jtcui') {
                    document.getElementById("spridetit").innerText = '崔锦棠';
                    document.getElementById("spridediv").innerHTML = '崔锦棠，男。';
                }
                if(articlehash === '/author/yczhao') {
                    document.getElementById("spridetit").innerText = '赵禹淳';
                    document.getElementById("spridediv").innerHTML = '赵禹淳，男，现就读于四川农业大学。（信息截至2023年）';
                }
                if(articlehash === '/author/yqdong') {
                    document.getElementById("spridetit").innerText = '董宇骐';
                    document.getElementById("spridediv").innerHTML = '';
                }
                if(articlehash === '/author/pbwang') {
                    document.getElementById("spridetit").innerText = '王鹏博';
                    document.getElementById("spridediv").innerHTML = '王鹏博，本刊编委。现就读于吉林大学（南岭校区）。（信息截至2023年）';
                }
                if(articlehash === '/author/bzwang') {
                    document.getElementById("spridetit").innerText = '王柄智';
                    document.getElementById("spridediv").innerHTML = '王柄智，男，现就读于浙江大学。（信息截至2023年）';
                }
                if(articlehash === '/author/kxliu') {
                    document.getElementById("spridetit").innerText = '刘可心';
                    document.getElementById("spridediv").innerHTML = '刘可心，本刊编委，现就读于北京外国语大学。（信息截至2023年）';
                }
                if(articlehash === '/author/jydu') {
                    document.getElementById("spridetit").innerText = '杜佳依';
                    document.getElementById("spridediv").innerHTML = '杜佳依，本刊编委，现就读于上海戏剧学院。（信息截至2023年）';
                }
                if(articlehash === '/author/hangzhou') {
                    document.getElementById("spridetit").innerText = '周 航';
                    document.getElementById("spridediv").innerHTML = '周航，现就读于辽宁大学。（信息截至2023年）';
                }
                if(articlehash === '/author/tongmu') {
                    document.getElementById("spridetit").innerText = '牟 彤';
                    document.getElementById("spridediv").innerHTML = '牟 彤，现就读于厦门大学。（信息截至2023年）';
                }
                if(articlehash === '/author/rfli') {
                    document.getElementById("spridetit").innerText = '李若凡';
                    document.getElementById("spridediv").innerHTML = '李若凡，现就读于上海财经大学。（信息截至2023年）';
                }
                if(articlehash === '/author/moding') {
                    document.getElementById("spridetit").innerText = '丁 末';
                    document.getElementById("spridediv").innerHTML = '朱洛萱，现就读于吉林大学。（信息截至2023年）';
                }
                if(articlehash === '/author/nuoxu') {
                    document.getElementById("spridetit").innerText = '许 诺';
                    document.getElementById("spridediv").innerHTML = '许 诺，现就读于大连理工大学。（信息截至2023年）';
                }
                if(articlehash === '/author/yxmao') {
                    document.getElementById("spridetit").innerText = '毛宇轩';
                    document.getElementById("spridediv").innerHTML = '毛宇轩，现就读于吉林大学。（信息截至2023年）';
                }

                document.title = document.getElementById("spridetit").textContent + " | 《惊时》电子刊"; },388);
            }
            if (arthash === '/column') {
                sL();
                window.scrollTo(0,0);
               document.getElementById("spride").style.display = "none";
                document.getElementById("index").style.display = "none";
                document.getElementById("column").style.display = "none";
                document.getElementById("wenzbt").innerText = "";
                document.getElementById("wenzdiv").innerHTML = '';
                document.getElementById("wenzby").innerHTML = '';
                    document.getElementById("wenzjd").innerText = '';
                setTimeout(function() { 
    document.getElementById("column").style.display = "block";
  }, 388);  document.getElementById("wenztime").innerText = '';
                var elements = ['index_btn', 'about_btn', 'contact_btn'].map(id => document.querySelector(`#${id}`));
                elements.forEach(element => {
                    if (element) {
                        element.classList.remove('active');
                    }
                });
        setTimeout(function() {
                if(articlehash === '/3605/view') {
                    document.getElementById("wenzbt").innerText = '关于我';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/xiaochen\">陈 骁</a>';
                    document.getElementById("wenzjd").innerText = '王一帆';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzdiv").innerHTML = '<p>我本想说些与别人大同小异的话。但与其那样，为了以说自己为目的，那么那些就没必要说了。</p><p>我是由我吃过的东西，见过的人、事，听过的、说过的话，有过的想法感受组成的。而并非是由我的细胞，我的器官组成的。假如有一个克隆的我，仅仅身体上一模一样，那他真的是我吗？所以较好的了解一个人的方式是了解他真正的组成部分。</p><p>我现在能说些关于自己的真正的话了。我很少说这种东西。真正的话是能成为自己的话。比如爱因斯坦，人人皆知相对论，而谁又知道他在学会说话后说的第一句是“这汤太烫了”。现在我能说些关于自己的话了。</p><p>我习惯了压制自己，有时我想说些什么却做不出声，想挥拳却鼓不起气力。我像是被什么东西钝化了，形成一层隔膜阻碍着反应。究竟是它驯化了我，或者我就是它？我现在很少见到自己的第一反应。我感觉自己成了千层饼，但我还没忘了自己是什么馅的。我有时羡慕那些单层无馅的白馍，但它们也使我无语、无奈。</p><p>我寻找真正的人。我不确定什么是真正的人，但起码不是白馍。我有时一眼望不到真正的人。我看到了太多众多的人类，说着各种的声音。仔细辨认，说的都是一种东西。这种东西最大的好处就是通俗易懂。于是我感觉自己身处别的动物之中。动物的叫声千奇百怪，但意义上向来差别不大。但眼前的这种动物是用东西遮住了自己扭韧的皮，一样动着的肌肉，一样有铁锈味的血液。好像这样就能决别开并傲视其它动物一样。我有时实在难找到真正的人。</p><p>有人总会受到愤世嫉俗的诱惑，而这是不可取的，也是我不会去做的。</p><p>我还有很多话要说。我试着去把自己新鲜的解剖，但不幸撕成了碎片；我想过幽默风趣，可我没找到合适的颜色。我继续这样做的时候，有时会感觉身体中有絮状的东西往下沉，伸出的丝把内脏勒出了痕。这大概又是我在压制自己了。即使我还有很多要说的话，我也暂时只能说这些了。</p><p>原来我是除了除了我以外的所有人以外的所有人。</p>';
                }
                if(articlehash === '/8217/view') {
                    document.getElementById("wenzbt").innerText = '有一种足球叫亚泰';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/zhandong\">董 展</a>';
                    document.getElementById("wenzjd").innerText = '杨士赫';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgx92-rAYola6R8QEwmQY43hE.png\" width=\"100%\"/>版式设计：杨士赫</p>';
                }
                if(articlehash === '/3489/view') {
                    document.getElementById("wenzbt").innerText = '梦';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/yfwang\">王一帆</a>';
                    document.getElementById("wenzjd").innerText = '杨士赫';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg1Nm-rAYo06y65AQwzgg4lww.png\" width=\"100%\"/><br/><br/><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg8dm-rAYoy9SIlgIwzgg4lww.png\" width=\"100%\"/>版式设计：杨士赫</p>';
                }
                if(articlehash === '/9152/view') {
                    document.getElementById("wenzbt").innerText = '六尺之下';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/ycyu\">于跃晨</a> <a href=\"#/spride/author/ytwang\">王艺曈</a>';
                    document.getElementById("wenzjd").innerText = '杨士赫';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgw-2-rAYouI7X0QQwsww4658B.png\" width=\"100%\"/></p>';
                }
                if(articlehash === '/0833/view') {
                    document.getElementById("wenzbt").innerText = '谁人回顾';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/zxliu\">刘子希</a>';
                    document.getElementById("wenzjd").innerText = '刘可心';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzdiv").innerHTML = '<p>初冬，天早已冷了。门外细雪飘然，像极了故人的几缕银丝，直向道长的心底扎。女孩幼嫩的脸被华山的冽风吹得生疼，却还是痴痴地望着眼前凭栏看雪的道长。她伸出冻红了的手，拽了拽道长的衣角：</p><p>“师父，你在等谁？”</p><p>…… “师父？”</p><p>…… 师父，你在等谁？</p><p>时不待人，人不如故。院儿里几株桃枝被新雪压得很低。道姑含笑，接过满斟的茶，一饮而尽。 “俯首作揖谢师恩。呐，我喝了你的茶，就是你师父啦！咱们师徒一心，同去同归！”少年的手紧紧攥着道姑递回的茶碗，手冻得有些皲裂，一言不发，生怯等点了点头。道姑被他这幅模样弄得发笑，摸了摸他的头，“你先站在这儿别动，师父去给你买包包和糖葫芦。”</p><p>“等、等一下！”</p><p>少年惊慌地拉住道姑的衣角，迟疑了一会儿，又忙将手缩到背后。道姑噗嗤一声笑了出来，“怎么，害怕了？”“才、才没有！”“没有？那你方才，为何拽我衣角？”或许是少年知道，只要他伸手，她就会回头。</p><p>少年曾对道姑说，想要名扬天下。道姑很是欣慰，为他配了一把称手的剑。她喜欢在冬日的暖阳里，一面为剑穗缠着流苏，一面听小徒弟讲自己的远大抱负。每逢入冬，道姑还亲手为他缝冬衣。若徒弟正跟师门其他师兄弟在外游历，她便再附上书信，寄去一两句叮嘱。“你爱喝的酒，师父已经备好了，正等你回来呢。”可时光从来残酷，将落雁迟作修竹，却不曾把月升化为日暮。“你做的衣服太丑了。”他将道姑为他缝的冬衣还给了她。几年不见，他褪 去了昔日的怯懦，也消散了原本的天真稚嫩。“穿着这样的衣服，我还怎么名扬天下。”道姑许久没有回话。</p><p>“那……那师父带你去扬州买衣裳吧。”</p><p>一棵桃树，一位道姑，一段乐府，唱了十许年。“当年那名剑大会，我记得可清嘞！那蓝衣女侠，准是纯阳弟子！”“嗐！这谁看不出？我瞧那小少侠该是她徒弟。”“可不，两人练的那太虚剑法啊……”酒楼平日就嘈杂喧嚣。自徒弟出师，道姑清闲时便来此饮酒。说是饮酒，酒楼却少有真酒客——这人多嘴杂的地方，总能听些江湖事。她呢？她想她或许能听到有关徒弟的事。</p><p>“两位前辈，你们说的那位女侠，可否还有消息？”身后一位年轻人开口道。道姑闻声，温酒的手微微一顿。“她打完名剑大会就回去了吧……再我就不知了。诶，听说后来她徒弟出师，也挺厉害！”“哦？那位小少侠又成了何方大侠，可否说来听听？”“这——”</p><p>“小辈而已，不足提起。”</p><p>年轻人打断了那位前辈的话，眼中晃过一丝失措，闷声饮酒。明知眼前为何人，道姑还是笑着，像初见少年的那年冬天，她接过茶碗时，一样。岁岁风霜，这次，茶换做酒，却是又一杯满斟。</p><p>“不然。后生可畏。”</p><p>一盏酒，散尽了余温，藏着欣喜、藏着无奈、藏着感慨、藏着道不完的思念，也藏着那天离别时的风雪。凛冽的寒风中，道姑撑着伞，为道长拍落衣服上的雪。</p><p>“你到了那里，记得给我回个信。如果还缺衣裳就告诉我一声——”“我衣服够用。”“啊……啊，这是你的马驹吧，挺俊的嘛！马毛要经常刷，这样毛色才会——”“这些我都知道。”“那……”</p><p>“师父，你的亲友呢？”</p><p>“……你路上小心，一个人要照顾好自己……”</p><p>“……师父。”</p><p>“啊？”</p><p>“你在等谁？”</p><p>“我……”道姑转开脸，“你回来了我们就再一起喝酒吧，那时候估计桃花也开了……”</p><p>她撑着伞。大雪纷飞。“我谁也没等，谁也不会来。”道姑不会去挽留。</p><p>或许，她也不知，如果她伸手，他会不会回头。</p><p>华山，风停了。</p><p>道长转身摸了摸女孩的头。</p><p>“我谁也没等，谁也不会来。”</p>';
                }
                if(articlehash === '/5931/view') {
                    document.getElementById("wenzbt").innerText = '叹红颜';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/xinliang\">梁 鑫</a>';
                    document.getElementById("wenzjd").innerText = '王景弘';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzdiv").innerHTML = '<p class=\"yinyan\">在旧社会的中国，地位尊卑导致了许多女子虽才貌双全，却难觅得如意郎君。这也就让“自古红颜多薄命，难得称心如意郎”一句广为流传。红颜薄命，不禁惹人叹息。</p><p class=\"zwbt_x\">悲叹红颜多薄命</p><p>青梅竹马，两小无猜，这是无数人所向往的爱情，身为大家闺秀的唐琬在与丈夫陆游成亲后，伉俪相得，如胶似漆，日子甜蜜而幸福。但自幼才华横溢的唐琬，并不像普通女子只知端庄贤淑，事事顺从，再加之与陆游的亲密感情，引起了陆母的嫉妒不满。陆母认为唐琬把儿子的前程耽误殆尽。在百般刁难后，以无子为由命陆游休了唐琬。身为孝子的陆游无奈只能顺从母亲意愿。在陆游的承诺下，唐琬住在后街上等着丈夫再将自己娶回，可却等来了陆家再娶的消息。心灰意冷的唐琬顺从父母再嫁。</p><p>数年后游园时二人再度相遇，身份却早已不同。唐琬能做的只有敬酒一杯，而陆游也只得题写一首凄美的《钗头凤》。分别后悲痛欲绝的唐琬亦作《钗头凤》，“世情薄，人情恶，雨送黄昏花易落”写尽满腔不满无奈，“人成各，今非昨，病魂常似秋千索。”道尽无限思念悲愁。在无尽的思念与哀痛中，仅有二十几岁的唐琬香消玉殒，一命呜呼。</p><p>在所谓“孝”的面前，陆游终是舍弃了唐琬，也导致那痴情的女子思念成疾，英年早逝，谱写了一段凄美的爱情悲剧。</p><p>本为青梅竹马情相悦，终是相思断肠永离别。</p><p class=\"zwbt_x\">赞叹红颜当自强</p><p>说到著名诗人徐志摩，大家无疑想到的是他与才女林徽因的感情，以及与美人陆小曼的惊世爱情，但无法忽视的是他的原配张幼仪。</p><p>15岁的张幼仪因家庭联姻辍学嫁作徐家少奶奶，二人之间并没有感情，于是在生下长子阿欢不就后徐志摩便出国留学。</p><p>自结婚以来，徐志摩对张幼仪的态度似乎只有不耐烦。在那个连打胎都会有生命危险的年代，徐志摩却冷冰冰地命令她自己去打胎；在婚内与林徽因陷入热恋时，又丝毫不顾及其产期将至，逼她离婚。</p><p>但她并没有从此一蹶不振。产子后，她迅速调整自己，先是随二哥去了德国，入裴斯塔洛齐学院攻读幼儿教育，随后在东吴大学教德语，后来在张嘉璈的支持下出任上海女子商业银行副总裁，在八弟张禹九与徐志摩等四人开了一家云裳服装公司，张幼仪又出任该公司总经理，并应邀管理二哥所成立国家社会党的财务。</p><p>她终于以自己的努力，活出了所有人羡慕的样子，也终于收获了属于自己的幸福。</p><p>所谓叹红颜，叹红颜，是悲叹，亦是赞叹。</p><p>若要说更偏向一种，那无疑是第二种。痴情才女无疑让人心疼惋惜，但身为新时代的女性，我们更要敢于放弃无法得到的爱情，勇于追求属于自己的未来与事业，努力变成自己向往的模样，用最高傲的姿态站在金字塔的最顶端，享受属于你的成功与辉煌！</p>';
                }

if(articlehash === '/1145/view') {
                    document.getElementById("wenzbt").innerText = '主编的自我修养';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/hrjiang\">姜浩然</a>';
                    document.getElementById("wenzjd").innerText = '王鹏博';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzdiv").innerHTML = '<p>题目是个大寡(〃´-ω･)<br/>……因为实在想不出该给这段文字起个什么题目，所以就这样吧。都是我的个人观点，各位看客就一键三连（什）随便看看就好。（这文写得我想去世……</p><p>放小标题——</p><p class=\"zwbt_x\">（一）主编干活的心态</p><p>作为全编委会最没用的主编，我的工作一直是做领导（包工头）。就是分配工作，做一些没有人做的工作。表面上是这样，其实挺难的，最可怕的是上面和下面的压力，加上一些客观因素一起蜂拥而至。那种情况下，你会不由自主的想要逃避，最想先抛弃的就是班刊。你可能会觉得少了一个主编没什么，我只能说“屁!”你走了，无论谁再被填上来，必然与你的想法有出入，然后整个班刊就会混乱的一批，功亏一篑。再或者下一位主编重新规划，你觉得会有人乐意么。记住，你身后没有人，只剩你一个，所以请坚强一点。</p><p>再就是压力了。</p><p>我兴冲冲地提笔写了满满8页的征文通知，直至贴出来我仍是自豪又满意。可一切都被一句轻飘飘的话改变了，“班刊的主题是自律或者校园生活。”头疼。接着就有同学反映，不会写。两天后的月考，同学的议论埋怨，老师的不理解，巨大的压力压在我身上。记得那次音乐鉴赏课，我倒在那里哭了一节课。但我不能出声。因为当时的编委会几乎已经出不下去了，我如果把我的崩溃展示给他们，班刊就不用出了。哭了一节课，我做了一个我这辈子最刚的决定——</p><p>“把他的屁当话放掉，之前一切计划正常运行！所有人好好复习，任何什么其他的，月考之后再说。”</p><p>作为主编，千万不要崩了。你才是主编你说了算，无论遇到什么，你永远都是主编。</p><p class=\"zwbt_x\">（二） 主编一定要有的特长</p><p>1.骂人</p><p>遇到任何对编委会的决策反对并且是无理取闹的人，不用多想，直接开喷。而且一定要句句在理，对于那些顽固抵抗，严重拖稿的人，就采取边骂边墨迹的措施，和他一直耗下去，反正错在他…</p><p>2.暖男</p><p>经常会有死皮赖脸的人以不会的名义拖稿，措施请看上一条。但如果是真不会，可以采取一定帮助。再就是在编委会中出现矛盾或工作分配不均的情况时，记得保持永远的中立，让所有人都要参与进来，因为班刊是属于班里每个人的。而且记住，考虑到每一个编委的感受，他们是你的枪，保持绝对的自愿和尽可能的公平，就是分工的原则。</p><p>3.绝对的地位</p><p>我不知道你是怎么当上的主编，我是老师直接任命的。但不论如何，既然你是主编，这个东西它出好了或坏了，最后都是你的责任，因为你是领导。你在编委会里不论是什么角色，只有一件事——责任。你不需要把所有的工作揽下来，但你也要把你的工作展示给你的组员，还有该强硬的时候你就是绝对的。当然，前提是你是对的。</p><p>当然，当个主编挺爽的，总之记住，一法通，万法通，切忌得过且过。以进为进，以退为进和以进为退便是工作态度，把握好其中关系，大局就是稳的，不必亲力亲为，因为你的工作是比他们的工作高一个层面的。工作的时候，你们是一个团队；有问题的时候，你想的是你的团队；而你是代表的时候，你就是整个团队。</p>';
                }
                if(articlehash === '/1783/view') {
                    document.getElementById("wenzbt").innerText = '如果能重来，让我做李白';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/bzwang\">王柄智</a>';
                    document.getElementById("wenzjd").innerText = '杨士赫';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgrrTKrAYo_PPB4AEwsww43TQ.png\" width=\"100%\"/></p>';
                }
                if(articlehash === '/1928/view') {
                    document.getElementById("wenzbt").innerText = '东野圭吾的推理世界';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/kxliu\">刘可心</a>';
                    document.getElementById("wenzjd").innerText = '杨士赫';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgn_C-rAYohr6qogcwsww4ozU.png\" width=\"100%\"/></p><p>版式设计：杨士赫</p>';
                }
                if(articlehash === '/1389/view') {
                    document.getElementById("wenzbt").innerText = '来振华做一场不愿醒的梦';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/jydu\">杜佳依</a>';
                    document.getElementById("wenzjd").innerText = '杨士赫';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg3q-KrAYohOPa2QYwsww4xXs.png\" width=\"100%\"/></p>';
                }
                if(articlehash === '/8364/view') {
                    document.getElementById("wenzbt").innerText = '来 客';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/hangzhou\">周 航</a>';
                    document.getElementById("wenzjd").innerText = '王一帆';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgheK-rAYoiqudgwMwsww4tiM.png\" width=\"100%\"/></p><p>版式设计：杨士赫</p>';
                }
                if(articlehash === '/jsxy/view') {
                    document.getElementById("wenzbt").innerText = '卷首献语：惊时少年说';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/page/bkbwh\">班刊编委会</a>';
                    document.getElementById("wenzjd").innerText = '杨士赫';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgvYPArAYorO3QmgEwoAs4viA.png\" width=\"100%\"/></p>';
                } 
                if(articlehash === '/0135/view') {
                    document.getElementById("wenzbt").innerText = '盘点我活泼可爱的二十班';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/tongmu\">牟 彤</a>';
                    document.getElementById("wenzjd").innerText = '刘可心';
                    document.getElementById("wenzdiv").innerHTML = '<p class=\"yinyan\">同志们好，作为一个“刚刚”“被”高中生的中国好青年，我最终还是走进了三年的高（有）中（期）生（徒）活（刑），走进了我活（各）泼（种）可（作）爱（死）的十二二十班。</p><p class=\"zwbt_x\">第一帧</p><p>（运动会前，体育老师带领着二百多人的方队）<br/>老师：“步——走！”<br/>众人：“一、二——三四五六七！”<br/>于是，到了第七步，整个二百多人的方队居然停下了！下了！了！<br/>老师：......要不你们集体做首诗？<br/>——————————我是一条华丽的分割线————————————<br/>老师：（举着喇叭）“刀旗队老师，你们队挡道了，能让一下吗？”<br/>刀旗队老师：（完全听不见）“最后一排那个男生！你刚才动作慢了，下次注意！对，就是你！还有你你你......”<br/>老师：“刀旗队！你们让一下！”<br/>刀旗队老师：（我听不见我听不见）“你！看哪呢！看我！”<br/>老师：“emmmmm......”<br/>弱弱的声音：“老师，咱们挡道了......”<br/>刀旗队老师：“哈？！”</p><p class=\"zwbt_x\">第二帧</p><p>【数学习题课】<br/>数学老师（刚哥）：“说几遍了这个答案不要写成不等式！不要写成不等式”<br/>“谁再写不对，谁......谁小狗！”<br/>（只见一位年过半百的人民教师开始嘟嘴卖萌模式）<br/>     “要学狗叫！”<br/>众人：已笑疯，惨不忍睹。</p><p class=\"zwbt_x\">第三帧</p><p>【某数学课上，同学们都在专（一）心（脸）致（懵）志（B）地听讲】<br/>刚哥：（面带微笑）“某某，你给我站起来！”<br/>“把嘴里泡泡糖吐了！”<br/>“脸整通红，手搁下边干啥呢？”<br/>“这小丫头蛋，你最近不好啊”<br/>“前后搁那唠，你说你做得对不对？！”<br/>两秒后......<br/>“对！？”<br/>【刚の人体函数广播体操现在开始】<br/>第一节~千手观音式：“二次函数a不定时，开口有大有小......”<br/>第二节~单手祈祷式：“同学们平移反函数千万别忘渐近线啊！”<br/>第三节~九十度侧弯腰伸展式：“二次函数的反函数就是把它旋转九十度，哎.......就是这样哒！”<br/>第四节~举手机器人侧点地式：“这个函数其实就是基本函数这样这样这样平移过去的，大家看！”<br/>第五节~口出狂言式：“高中数学？在我眼里没有难题！有难题吗？（众人：.............）”<br/>第六节~莫名问候式：“来这道题谁错了，站起来！......”<br/>“How（怎么） old （老）are（是） you（你）？”<br/>未完待续.........</p><p class=\"zwbt_x\">第四帧</p><p>【物理课】<br/>物理老师：“emmmmm......我上节课提问到哪组了？”<br/>甲组：“那边那边！老师你忘了吗？就是那组那组！”<br/>乙组：“不对不对！”<br/>物理老师：（一脸认真）“由于空气阻力，我手里的这只粉笔比这张纸下落速度快，大家看。”<br/>众人：“wooooooooooaaaaaaaa”<br/>物理老师：“........大家之前没做过实验吗？”<br/>众人：“木有哎！好神奇哎！woooooooaaaa”<br/>稻花香里说丰年，听取哇声一片.........</p><p class=\"zwbt_x\">第五帧</p><p>（还记得刚开学的英语课）<br/>英语老师：“Good morning,class!”<br/>众人：“Good morning,teacher!”<br/>英语老师：“你们可以叫我陈sir，我今年六岁了（谜一般的自我介绍中）So,what do you like?”<br/>众人：.......（沉浸在谜一般的自我介绍中不能自拔）<br/>陈sir：“emmmmm，如果一个英语老师问你What do you like?的时候，他最希望听到什么？”<br/>弱弱的声音：“English?”<br/>陈sir:“还有呢？”<br/>众人：？？？（黑人问号脸）<br/>陈sir:（傲娇的小白眼）“我呢？”<br/>众人：“oouuuuu”<br/>陈sir:“那以后上课之前我就问你们‘What do you like?’然后你们就说‘We like English and chen sir!’好不好丫？”<br/>众人os：.........果然是六岁</p><p class=\"zwbt_x\">第六帧</p><p><br/>【英语课】<br/>陈sir:“这个英文人名其实是某动画片上的，叫‘———’”<br/>众人：？？？？<br/>陈sir:“哦我忘了，你们这些老人是不看动画片的，只有我这样的六岁宝宝，才看动画片的。”<br/>“里面有一个 ‘A little fox!’(欢脱地蹦起来）”<br/>讲台：“咔！”（讲台完美地从中间裂开了...开了...了...）<br/>讲台：“我尽力了......我不是故意的......”<br/>众人：吓死（全剧终）</p><p class=\"zwbt_x\">第七帧</p><p><br/>【论同志们的戏精指数】<br/>第一式：（耳朵上插充电线）“喂喂？有一亿的投资是吗？好好好，打到我账上。”<br/>第二式：（手捧大字典）“喂？”<br/>“你说我前面那人是个傻子对吗？哦，我知道我知道啊。”<br/>第三式：<br/>第三式：(标准微笑)白内障，看不清，高锰酸钾滴眼睛，药物直达患处，可能会有一点痛，要坚持滴哦！</p><p class=\"zwbt_x\">第八帧</p><p><br/>【甲刚从水房回来】<br/>甲：（拿着杯子中的铁勺，郑重其事）“你知道这是什么吗？”<br/>乙：（？？？）“勺子啊？”<br/>甲：“这是拿铁！！！”<br/>————对没错还是我，那条华丽的分割线——————————<br/>摁个暂停键！<br/>这种事情怎么能少得了我们英俊潇洒风流倜傥一表人才的（可以把刀放下了），氚川哥呢？！<br/>“表白间操时在后面扎马步练功的老师，太帅了！”<br/>“越自律，越自由！”<br/>“附中宪法规定，二十班必须是优秀班级！”<br/>未完待续…….（我一定会回来的！）</p>';
                } 
                if(articlehash === '/1103/view') {
                    document.getElementById("wenzbt").innerText = '英雄联盟是一种信仰';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/jtcui\">崔锦棠</a>';
                    document.getElementById("wenzjd").innerText = '刘可心';
                    document.getElementById("wenzdiv").innerHTML = '<p>关于游戏，有的人认为它是一种休闲娱乐方式，有的人会说它是一种毒品，染上则会上瘾。然而英雄联盟不一样，它是一群人的信仰，它填满了我们的青春。</p><p>这是一款由美国Riot Games创造的一款游戏，游戏中分为两个阵营，每个阵营有五个队员，分上中下三路对决，最终以推倒对方的家园水晶为胜利。简单的游戏规则背后，却是暗藏玄机。战略，分析，反应，全局观……这游戏中的变化莫测正是最吸引人的。有时虽前半段以压倒性的优势碾压对方，但可能后面的一波团战就会将前功尽弃。这样的貌似无常变化，才让我无数次为之着迷。</p><p>英雄联盟不仅仅是一个推塔游戏，每一个英雄的人物故事，每一句话语，甚至每一个人物背后国家的故事都震撼人心。</p><p>曾记得第一次接触英雄联盟的青涩，小学四年级的我还非常的懵懂，受一群同学邀请，我来到了英雄联盟，来到这片召唤师峡谷。曾记得第一次听到盖伦的声音高呼“德玛西亚万岁！”那个幽默的声音不由得让我笑出了声。但当我逐渐了解到盖伦属于的德玛西亚，那古老而高贵的冕卫家族。他一生毫无保留地守卫着德玛西亚王国的疆土，守卫家族的荣耀，为了国家的安危，哪怕再危险、再残酷的战斗，他都会身先士卒，挺身而出。他身披抵御魔法的重甲，手持阔剑，时刻准备着用正义的钢铁风暴在战场上正面迎战一切操纵魔法的狂人时，我内心不由得为之一震，他们也有自己的故事么？</p><p>我想起发条魔灵。她叫奥莉安娜，她也曾是一个活蹦乱跳的小女孩。而现在，她全身上下除了心脏，都是铜干铁皮。在一次祖安的爆炸事故中，泄漏的毒气污染让大地枯草不生，使人间犹如炼狱。听说这件事情的奥莉安娜却执意前往祖安帮助人们，她甚至将自己的防毒面具给予一个小男孩，而引得自己被感染，器官一个个损坏。她的父亲不惜倾家荡产，付出了一切代价，终于保住了奥莉安娜的性命。但最后她的父亲因毒气而死，而她却以一个机器人的身份活了下来。</p><p>这样一个个感人的故事在游戏背后，让人为之动容，受之吸引。</p><p>听着主机箱散热片的轰鸣声和键盘清脆而有节奏的声响，我再次回到了英雄联盟中，熟悉的客户端，熟悉的游戏画面，可是那些熟悉的人却已经不在身旁了。再也听不到团队之间的交流，因为失误而给对方安慰。一局游戏结束，我发现我缺少的并不是时间，而是那群陪我一起战斗的小伙伴。因为成长，我们失去了最初的本心。因为成熟，我们褪掉了当初的稚嫩。因为时间，我们渐行渐远。希望有朝一日我们还能重逢，在那召唤师峡谷中挥洒自己汗水。希望人生只如初见……</p><p>英雄联盟不只是一款游戏，它陪伴了太多人的青春，承载了太多人的信仰。即便与英雄联盟见面的机会越来越少，但我相信，只要心中还有信仰，联盟永不磨灭！</p>';
                }
                if(articlehash === '/9100/view') {
                    document.getElementById("wenzbt").innerText = '晨熹如洪，一骑逸凡';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/yczhao\">赵禹淳</a>';
                    document.getElementById("wenzjd").innerText = '刘可心';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzdiv").innerHTML = '<p class=\"yinyan\">在此说明，二位均为男性，也无意冒犯。我仅是以一个旁观者的角度来记录点点滴滴的......提及这二位的“爱恨纠缠”，便有说上整整一天都不够。下面先了解一下这两个人的基本信息吧。</p><p>洪宇凡，身型中等，不高不矮，不胖不瘦，大眼睛双眼皮，来自福建，看起来就一副“秀色可餐”的样子，并且性情温柔好相处，擅长卖萌等手段。</p><p>宫逸晨，身型与他的“另一半”接近。脾气同样温和，来自山东。而谁能想到这一南一北，看似不搭边的两个人在看似平凡的彼此的生活中，能建立起最深的羁绊。</p><p>令人最印象深刻的便是那次牵手。他们时常会“暧昧”，当着大家的面拉拉扯扯，但是大庭广众，在陈sir的注视下，潇洒地牵起手，我想也就他们两人能够做到了。牵着手，又不仅仅是牵手，目光相对，眉眼相交，只留下一阵甜甜的空气，仿佛西欧中世纪坠入爱河的情侣。<br/>倘若要寻找二人关系如此亲密的原因，亲和温柔的性格，两人之间冥冥之间的吸引，让他们越走越近，在人生地不熟的新集体中找到了心灵依靠的彼岸。</p><p>以下是我的观察记录：</p><p class=\"zwbt_x\">“情比金坚”</p><p>虽然他们已经许久没有同桌了，但还是经常谈天说地，好似这段情缘从未断绝，他们也从未分开。他们还是会傻笑，还是会你追我赶，好像认识了许多年的知己一般，总有说不完的话题。大到国家时政，科技要闻，小到某人绯闻，生活糗事。无论有多无聊，他们都会讲的眉飞色舞，然后捧腹大笑，直到缺氧为止，做彼此的欢乐，只为看见你的笑容。</p><p class=\"zwbt_x\">“患难与共”</p><p>对于从来不太擅长认真做事的两个马马虎虎的人来说，老师突然降临的演讲任务让他们头昏眼花。可是怎么可以一个人独自享受这种曼妙的感觉，那必定要传递给自己的好知己。所谓爱情，就是推荐对方参与一切不擅长或者不愿意的事情。于是久而久之，礼尚往来，每当有什么大型活动，都会在一个人的口中，听见另一个人的名字。就像班里总有类似这样的对话:<br/>“谁想要报名数学竞赛？”<br/>不等话完全说完，就会听见两个人争先恐后地喊：“宫逸晨！”，“洪宇凡！”“不不不，您比我厉害，还是你来吧。”</p><p class=\"zwbt_x\">“相爱相杀”</p><p>校园中，如影随形，如胶似漆的两人，有时也会因为一些无聊透顶的小事情而绊嘴。例如：“你拿我格尺了。”或者是“还我卷子。”情况愈演愈烈，变成了小矛盾，不过好在他们两个人的感情一直保持在线状态，纠纷很快就不攻自破了。<br/>他们的关系呢，亲昵但不过分，不会影响到其他同学，我想这也是这段“爱情”历久弥坚的原因了罢。<br/>高中生活还有三年的路要走，这两个人之间的情缘将要漫步花路与否，还是个谜……</p>';
                }
                if(articlehash === '/6380/view') {
                    document.getElementById("wenzbt").innerText = '山河根脉';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/rfli\">李若凡</a>';
                    document.getElementById("wenzjd").innerText = '杨士赫';
                    document.getElementById("wenzdiv").innerHTML = '<p>还未分别，<br/>我就开始想念。</p><p>我内心的净土，<br/>这个万物悄然绽放的地方，<br/>饮马潭溪，<br/>垂钓江中。</p><p>一白映目，<br/>与山间松柏的耳语，<br/>与幽谷麋鹿的邂逅，<br/>东风吹来醒客醉。</p><p>拟把当初，<br/>红叶浸染，<br/>稻谷飘香山楂碎，<br/>山楂碎，<br/>香气逸三村。</p><p>林籁微倦，<br/>青山多妩媚，<br/>叶叶凝翠蝉声沸，<br/>蝉声沸，<br/>留客到天明。</p><p>四季反复，<br/>爱你每个角度，<br/>朝朝暮暮。</p>';
                }
                if(articlehash === '/3723/view') {
                    document.getElementById("wenzbt").innerText = '兽 性';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/moding\">丁 末</a>';
                    document.getElementById("wenzjd").innerText = '杨士赫';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzdiv").innerHTML = '<p class=\"zwbt_x\">一</p><p>节假日与父亲周游，堵车在大城市的隧道中，看见旁边有只哈士奇从副驾驶窗探出头来。它两爪承载窗框上，露着舌头眯着眼，贪婪地喝着西北风。它的绒毛在风里如漆黑的麦浪在起伏，有种迷人的光影效果，看得母亲愣了几秒，咂咂嘴说：“不行，我也要赶紧退休，在家养条狗。</p><p>这话说得我心头一紧。那些关于动物的回忆争相涌上来，逼我讲述。</p><p class=\"zwbt_x\">二</p><p>追溯到最年幼的时期，关于宠物的印象其实不甚深刻。三五岁时家教严格，是绝不可能让我养宠物的，我也就只能玩玩虫子之类。毕竟是在城市，研究所大院里捉蚂蚱逮蛐蛐网蜻蜓实在不易，所以玩的最多的是常见的蚂蚁。</p><p>我用各种食物或毒物调戏过众蚁，早就懂得了经由实验检验事物的客观规律，并总结出蚂蚁对散发香甜气息的食物颗粒感兴趣，尤其是粮食类。然而，他们对我精心混杂在面包屑中同样散发着迷人香气的鼻屎颗粒却毫不关心，并且识别得极为精确——我曾在某颗新鲜的鼻屎旁蹲守良久，一直等到不冒热乎气了硬了干了，也没盼来伯乐——记得当时有种莫名的失落感和憋屈感，说不清楚是因为自尊心受挫还是别的什么。</p><p>孩子是最残忍最恶毒的，无论是水淹、踩踏、用石头砸死还是用草绳在地上勒死，对孩子来说都是一种主宰世界的快感，或者就用那个词“帝王感”</p><p class=\"zwbt_x\">三</p><p>很多年之后，我在海边捡了些五彩的贝壳，想做一串项链，可是脑中总想着它们都是被海潮冲上岸的斑斓的尸体们。我抬头看，开始羡慕那些踏在贝壳碎屑上自由奔放的孩子们，他们在开心地笑，他们不会有我脑中那些想法。当认识改变之后，有些事是不能回首的。我已经知道蚁群是为它们真正的君王在劳动，他们只是蚁王的仆人，只是棋子和工具。这让我尤其不能直面曾经的残杀，因为我己见到了太多的生命被视为弃子。</p><p>初中的某日，操场因为甜食而聚集了大量的蚂蚁，我也在一旁看。可未来及唤醒蚂蚁的记忆，一只脚就悬了上来。我一急，大喊：“别踩！”</p><p>嘎吱一声。我当时浑身也嘎吱一声。那天我几乎崩溃，因为记忆深处那些被触及的罪恶感、那些无声的死去、那些绕开鼻屎去搬粮食的蚂蚁和那些痛苦挣扎的人们的脸庞，一股脑地涌了上来。但我还能看清眼前那张脸，和满脸的君王感。</p><p class=\"zwbt_x\">四</p><p>之后，我养过一只乌龟。我记得那个带透气的塑料箱比乌龟和龟粮合在一起还要贵，只是箱底有点彩色的玻璃珠而已。我把它放在厨房的水池旁。</p><p>那是我第一次养宠物，因此我对这只王八怀揣了极大的热情。“饲”是养宠物的一个重要的，甚至带有仪式感的动作，只有给他喂食才能让我有宠物主的代入感，并且为了持续获得心理满足，通常会喂得很频繁。所幸乌龟不会像热带鱼那样活活撑死，我便只是失落于它的胃口不好罢了。</p><p class=\"zwbt_x\">五</p><p>它大概在我手里活了两三个月。那段时间里笼子越来越脏，但我确实一直悉心地照顾它，并且明显养大了一些。那时候，春节是一定要回老家的。我本来有很挂念着乌龟，但这些挂念没过多久就在除夕夜随绚丽烟花一同消逝了。再回来是元宵节前后，我进门很久了才无意瞥到了那只被我遗忘的乌龟，四脚伸展，头颈伸长伏地，散发着些许异味，眼眶腐化，干瘪亏空。母亲走过来说：“哎呀，饿死了啊，你看眼珠都让自己吃了。”我“哇”地大哭。母亲跑过来安慰我，以为我是因为宠物死亡而过度伤悲，殊不知其实是被吃眼珠的黑色幽默吓坏的。我当时懵懂地感到自己策划了一场一级谋杀，恐惧并自责了很久。它的甲壳完全不像以前那么坚硬，脆弱到可以压出变形。我不能接受他被扔进垃圾桶的事实。这是我的宠物，我甚至还没给它起名字，它就成了垃圾。</p><p>那时的我一直不理解为什么讲人是动物，却要把人和动物分成两个词。然而在楼下倒垃圾的那一刻，我茅塞顿开。</p><p class=\"zwbt_x\">六</p><p>从那以后我不再养宠物，连接触动物的机会都刻意回避。除了上文提及的那些蚂蚁、死在孩子们脚下的还有在雨后冒出来蠕动的蚯蚓，恰巧落在地上的马蜂和正在热烈交媾的蛾子。所以为数不多的“拯救”场景让我印象深刻。三年级的冬天，我们乐团的一个姑娘捡了一只受了伤的麻雀，和家长一起医治。麻雀被绑上了绷带，一只脚系上了绳，固定在半个纸壳箱子里，引来许多小女生和小男生的围观，他们也一同为麻雀祈福。</p><p>还有一次春游，一行人对一只蜻蜓展开了抢救手术。我捏住它的一对翅膀，感到它的震动微弱无力，持续传递着旁人感受不到的苦痛。费尽周折终于除去了绕在他身上的线圈，姑娘们小心翼翼地把它放在了一片阔叶上，才转身离去。有人低喃，不如一脚踩死算了。这次我心里默默同意。我清楚那只几乎被勒断了的蜻蜓再也不会飞起来，他定会从叶上滚落下去，在落日的余晖里虚弱的振翅几下，最后任由自己的身体和地表一起变凉。</p><p>最后的初中课堂上，大家协力弄死了一只无意扰乱课堂的丑陋暗淡的千足虫，对着飞溅的黄色粘液皱眉，没人表示怜悯。</p><p>多愁善感这样的事总是一发不可收拾。那个救麻雀的姑娘，我也想起来它残杀昆虫时的笑靥。</p><p>我没看到麻雀和蜻蜓最终的尸体，现实中不知所踪的它们让我在“善”字中迷失，最终只能猜测：丑陋的或者不甚可爱的动物，无论大小，是不属于“保护小动物”那话里“小动物”所指的范围的。</p><p>又是一个很久以后，我在看《唐山大地震》时又被震撼了。解放军在孤儿群中直指着方登说：“咦，你看这小姑娘挺不错的，长的又漂亮。长大了可以搞艺术，就她吧！”下一个镜头里，扫过了方登的身后，那些被当作背景模糊了的挤满了的无人认领的孤儿。我忽然仿佛看到了小时候的蜻蜓、蚂蚁和千足虫。</p><p class=\"zwbt_x\">七</p><p>回到隧道，我对母亲养宠物的决定，五味杂陈，不知该说些什么。</p><p>我记得《独唱团》里赵忠祥说，他很少去动物园。把动物圈在人类居住地附近，以人工的方式饲养，本就违背保护野生动物的理念，所以不愿意去。我也讨厌动物园，其实我对人与动物相处的情绪更大。小时候我学到一个词，“阴霾”。笔画很多，很文艺。我尝试在诗歌里使用它，却总是空洞牵强。可我一想到动物，心头就契合地笼上一大片阴霾，触之不及挥之不去，也有点像突然驶进隧道，是一种可以被具体化的感受。</p><p class=\"zwbt_x\">八</p><p>我是能下厨的，要以适应掏鱼肠子和煮活螃蟹，频繁地为了我的生存与利益去砰杀别的生灵，但还算符合自然界的消费规律。可那些因为人类娱乐而死去的蚂蚁乌龟马蜂蛾子麻雀蜻蜓，始终不能让我忘怀。</p><p>口蜜腹剑的人类总是把自己和“动物”这个概念撇清，一直在嚷嚷与自然与动物和谐共处，却从未停止过居高临下地主宰其他物种的命运。我们宣扬着理性控制情感，见面微笑和寒暄。这些难以剥去的外壳让年少的我难以从社会中认识人类，却从别的动物身上得到了认识。它们都死了，可我脑子里印着它们生命轨迹交汇的画面。撑死的鱼、逃脱的耗子、盯着鹦鹉流口水的猫和那只追着母狗爬的狗……赤裸地暴露出那些原始的陌生却又让人感到熟悉的欲望。我认识到太多的联系与相似，开始对“人和动物”对区分感到心虚。</p><p>我一直在认识动物的过程中成长甚至成熟，从兽性中挖掘规律。我总是尝试认识到人性的弊端。而今我终于接通了这条隧道，却失望的发现，隧道的两端，不过是一模一样的兽性罢了。</p>';
                }
                if(articlehash === '/0933/view') {
                    document.getElementById("wenzbt").innerText = '独自成长，不惧远方';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/slxu\">徐硕良</a>';
                    document.getElementById("wenzjd").innerText = '王景弘';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg5vG7tAYokPeMvwIwrAw4tg8.png\" width=\"100%\"/></p>';
                }
                if(articlehash === '/8321/view') {
                    document.getElementById("wenzbt").innerText = '屹立在历史长河中的痴情王子';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/nuoxu\">许 诺</a>';
                    document.getElementById("wenzjd").innerText = '王鹏博';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg2-i7tAYols74mwEwsww4jRA.png\" width=\"100%\"/></p>';
                }
                if(articlehash === '/0611/view') {
                    document.getElementById("wenzbt").innerText = '过 节';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/xyzhu\">朱晓雅</a>';
                    document.getElementById("wenzjd").innerText = '刘可心';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgn-y7tAYogMLGJTCsDDj7Dw.png\" width=\"100%\"/></p>';
                }
                if(articlehash === '/7735/view') {
                    document.getElementById("wenzbt").innerText = '反向进化论';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/yqdong\">董宇骐</a>';
                    document.getElementById("wenzjd").innerText = '王鹏博';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAgp-_7tAYonunHKDCzDDjCEg.png\" width=\"100%\"/></p>';
                }
                if(articlehash === '/3319/view') {
                    document.getElementById("wenzbt").innerText = '一件小事';document.getElementById("wenztime").innerText = '2019/11/02';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/spride/author/yxmao\">毛宇轩</a>';
                    document.getElementById("wenzjd").innerText = '王景弘';
                    document.getElementById("wenzdiv").innerHTML = '<p><img src=\"https://13511974.s21i.faiusr.com/4/ABUIABAEGAAg_IS8tAYo7ond5QEwrAw4mCA.png\" width=\"100%\"/></p>';
                }


 document.title = document.getElementById("wenzbt").textContent + " | 《惊时》电子刊";

            },800);










               
            }
            

        }

function sL() {
  var loadingDiv = document.getElementById('loading');
  loadingDiv.style.display = 'block';
  setTimeout(function() {
    loadingDiv.style.display = 'none';
  }, 388);
}        


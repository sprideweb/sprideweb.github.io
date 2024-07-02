/*var topNav = document.getElementById('nav-content');
topNav.innerHTML = '';*/


/*var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('lang') && urlParams.get('lang') === 'en') {
	document.getElementById('changelang').innerHTML = '<a class=\"nav-link\" href=\"?lang=cn\"><button class=\"btn btn-primary btn-sm\">中文</button></a>';
	document.getElementById('logosrc').innerHTML = '<img src=\"https://13511974.s21i.faiusr.com/4/5/ABUIABAEGAAg7Pz-swYowsOt4AEwtQE4QA.png\" height=\"40px\"/>';	
}*/
/*
if (hash === '/about/index') {
                document.getElementById("index").style.display = "none";
                document.getElementById("contact").style.display = "none";
                document.getElementById("index_btn").classList.remove("active");
                document.getElementById("contact_btn").classList.remove("active");
                document.getElementById("about_btn").classList.add("active"); 
                document.getElementById("about").style.display = "block";
            }
            if (hash === '/contact/index') {
                document.getElementById("index").style.display = "none";
                document.getElementById("index_btn").classList.remove("active");
                document.getElementById("contact_btn").classList.add("active");
                document.getElementById("about_btn").classList.remove("active"); 
                document.getElementById("contact").style.display = "block";
            }
*/

        function hashChangeHandler() {
            var hash = window.location.hash.substr(1); 
            var arthash = window.location.hash.substr(1,7); 
            var articlehash = window.location.hash.substr(8); 
            if (arthash ==='/list01') {
                document.getElementById("index").style.display = "none";
                document.getElementById("list03").style.display = "none";
                document.getElementById("list01").style.display = "block";
                var elements = ['index_btn', 'about_btn', 'contact_btn'].map(id => document.querySelector(`#${id}`));
                elements.forEach(element => {
                    if (element) {
                        element.classList.remove('active');
                    }
                });
                if(articlehash === '/about') {
                    document.getElementById("about_btn").classList.add("active"); 
                    document.getElementById("list01tit").innerText = '关于春潮网';
                    document.getElementById("list01div").innerHTML = '<span class=\"gyccw\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;春潮网 (spride.asia) 成立于后疫情时代的2020年， 现由长春市春潮网络工作室和微信公众号“春潮SPRIDE”团队共同运营和维护。春潮网现有特邀作者团成员近10人。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021年，成立短视频专项，拍摄校园题材原创短视频。春潮网站专栏文章同步发表在微信公众号“春潮SPRIDE”。</span>';
                }
                if(articlehash === '/contact') {
                    document.getElementById("contact_btn").classList.add("active"); 
                    document.getElementById("list01tit").innerText = '联系我们';
                    document.getElementById("list01div").innerHTML = '&nbsp;&nbsp;站长邮件：hello@spride.asia（仅接受网站相关问询）';
                }
                if(articlehash === '/author/id/chunchaozuozhe') {
                    document.getElementById("list01tit").innerText = '春潮作者';
                    document.getElementById("list01div").innerHTML = '<h5>作者介绍</h5><p>春潮作者。</p>';
                }
                if(articlehash === '/author/id/dfpss') {
                    document.getElementById("list01tit").innerText = '豆腐泡杀手';
                    document.getElementById("list01div").innerHTML = '<h5>作者介绍</h5><p class=\"gyccw\">男，春潮网特邀作者，春潮SPRIDE特邀作者。</p><h5>他的作品</h5><p><a href=\"#/list03/2023/1108/0001\">写在没有疫情的第一个冬天</a></p>';
                }
            }
            if (arthash === '/list03') {
                document.getElementById("index").style.display = "none";
                document.getElementById("list01").style.display = "none";
                document.getElementById("list03").style.display = "block";
                var elements = ['index_btn', 'about_btn', 'contact_btn'].map(id => document.querySelector(`#${id}`));
                elements.forEach(element => {
                    if (element) {
                        element.classList.remove('active');
                    }
                });
                if(articlehash === '/2023/1231/0001') {
                    document.getElementById("wenzbt").innerText = '像流水一样不再回头 | 2024新年献词';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/list01/author/id/chunchaozuozhe\" target=\"_blank\">春潮作者</a>';
                    document.getElementById("wenztime").innerText = '2023/12/31 23:29';
                    document.getElementById("wenzdiv").innerHTML = '<p>跨年总是一件值得期盼的事情。曾经，每到12月底，我的心就已经飞往下一个年头了。对下一年的全新的幻想、几个大概率不会完成的新年目标已经把我的精神先于肉体拽进了新年的和乐光景里。</p><p>但是今年，这种感觉已经日趋平淡了。面对即将敲响的新年钟声，身体仿佛还在旧日时光的余温里盘旋，而2024的身影已经悄然将至，按着我的头告诉我，别再为过去的日子神伤了，只要你不回头看，每一年都是新的开始，不是吗？</p><p>人们总是愿意在这样的说辞里反复麻痹自己。但事实上，零点一过，我还是我，生活依然是生活。计算机上的日期会重新回到01-01 0:00，可我的生活依然像流水一样在一路向前。我们在过去的一年里经历过的种种人和事，都会在身体的某个层面留下烙印，那些东西不会随着新旧的更迭清空。</p><p>当然，我们仍然愿意庆祝这个看似无意义的时刻的原因，是我们仍旧期待着某种“清空”，丢掉过去的很多东西，只把最值得的记忆留下，然后奔赴下一段旅程。</p><p>于是，每到这天，我们就朝过去看一看，然后像流水一样，不再回头。</p><p>2024，新年快乐，祝你祝我。</p>';
                }
                if(articlehash === '/2023/1108/0001') {
                    document.getElementById("wenzbt").innerText = '写在没有疫情的第一个冬天';
                    document.getElementById("wenzby").innerHTML = '<a href=\"#/list01/author/id/dfpss\" target=\"_blank\">豆腐泡杀手</a>';
                    document.getElementById("wenztime").innerText = '2023/11/08 06:48';
                    document.getElementById("wenzdiv").innerHTML = '<p>雪休这个词对我来说已经十分陌生了。记忆中的上一次因雪放假，还是21年的冬天，冻雨结成的积冰和厚雪把青华的电线压了，全校停电，提前放学，晚课取消。</p><p>记得当时还戴着口罩。放学回家的路上，鼻腔中的热气从口罩的缝隙钻出来，死死地贴在我的眼镜片上，视线一片模糊。那时候我在长庆街附近租房子住，离学校还算近，一心着急回家，也顾不得擦擦镜片，直直的就往前走，结果差点撞到树干。</p><p>现在回想一下，似乎从2020年初冬开始，口罩和冬天便早已经绑定了。那年年初和同学在外面玩的时候，看着手机推送里武汉发生不明原因传染性肺炎的消息，几个人很有默契的同时瞟到了街角的一家药店，然后一人买了一包口罩立刻戴上。那应该是我在疫情时期戴上的第一只口罩，也是我人生中第一次自己主动买口罩。坐地铁回家的路上，整个车厢里戴口罩的只有寥寥数位。大家应该也都看见了肺炎的消息，但无人在意。</p><p>那时候没有人会想到，口罩即将成为接下来三年里炙手可热的好货，也会成为把四个冬天联系起来的，像是纽带一般的存在。</p><p>前两天，长春下起了今年冬天的第一场坐冬雪。冻雨和暴雪交替，让雪休重新回归了。曾经的雪休确实是真的放假，看着朋友圈里各位大学生“我也想放假”的呐喊，又看到长春市教育局发的“转线上教学”通知，不禁感慨，疫情确实留下了一些东西。不管你是否承认，在疫情被结束以后，那些看似毫不相关的东西，熟练的网课流程、全国爆发的支原体肺炎感染和大型流感，以及这个冬天摘下又戴上的口罩，冥冥之中都有了关联。</p><p>去年年末，在写完“疫情时代的第四个冬天”之后一个月，小区理发店里从初中开始一直给我剪头的理发师没了，阳了之后突发的心肌炎。后来我再也没去过那家理发店，剪头的时候也总是换着理发店去。具体的原因我自己也说不清楚，可能是觉得，在面对一个认识多年但是一直也不熟悉的人的离去，也会觉得悲伤吧。</p><p>二阳以后脑子一直很浑，最近躺着睡不着的时候，闭上眼睛，心中总是一阵恍惚。疫情到底是什么时候结束的呢？是去年年末放开的时候吗？是大家集体官宣“阳康”之后吗？是腾讯会议宣布会员功能不再免费的时候吗？还是，还没结束呢？</p><p>我实在想不明白，但总觉得也是时候该为过去的某些事画上个句号了。又是一年立冬，在没有疫情的第一个冬天，半岛和长春的气候仿佛在两个世界，气候变暖也还在继续。当然，对于这个世界来说，气候的差异和变化显然不值一提。</p><p>对它来说，可能上面发生过的所有事也都是很细微、不值一提的吧。</p><p class=\"youbianww\">2023.11.8</p>';
                }
            }
            

        }

        

/*var topDiv = document.getElementById('ifwidthistoosmall');
topDiv.innerHTML = '<div class=\"if_width_less_than_900px\"><h3>谨防网络诈骗提示</h3><p>我们（活动主办方、组委会）不会以任何形式向您主动索要任何个人隐私信息、身份信息和财物，也不会在QQ群内主动加您的好友或拉您进新群。如果您疑似遭遇网络诈骗，请及时向警方寻求帮助。</p><br/><p><button class=\"if_width_less_than_900px_close\">我知道了</button></p></div>';*/








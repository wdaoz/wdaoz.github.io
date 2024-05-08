var posts=["5a1e2cac.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://docs.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"LXGW","link":"https://github.com/lxgw","avatar":"https://fastly.jsdelivr.net/gh/wdaoz/tuku/myimg/LXGW.png","descr":"落霞与孤鹜齐飞，秋水共长天一色"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Butterfly","link":"https://butterfly.js.org/","avatar":"https://fastly.jsdelivr.net/gh/wdaoz/tuku/myimg/butterfly.jpg","descr":"大佬Jerry的主题"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋"},{"name":"JayHrn","link":"https://blog.lvhrn.cn/","avatar":"https://npm.onmicrosoft.cn/hrn-img@1.0.0/img/avatar.jpg","descr":"念念不忘，必有回响","siteshot":"https://npm.onmicrosoft.cn/hrn-img@1.0.0/img/siteshot.jpg"},{"name":"Guo Le's Blog","link":"https://blog.guole.fun/","avatar":"https://blog.guole.fun/img/gl.jpg","descr":"生命是独立是自由是爱与和平"},{"name":"攻城狮杰森","link":"https://pdpeng.github.io/","avatar":"https://s2.loli.net/2024/04/28/LTKckyjDmSiBwPs.png","descr":"计算机专业在读，阿里云专家博主，华为云云享专家，51CTO 博客专家，喜欢各类竞赛，熟悉 c/c++，java，html，css，javascript，python…竭力成为一名 Full Stack Developer."},{"name":"竹山一叶","link":"https://zsyyblog.com","avatar":"https://img.zsyyblog.com/favicon.jpg","descr":"来了就不想走的小家","siteshot":"https://img.zsyyblog.com/siteshot.png"},{"name":"sheerkvc","link":"https://sheerkvc.top/","avatar":"https://sheerkvc.top/avatar/avatar.jpeg","descr":"脱离低级趣味"},{"name":"Bore's Notes","link":"https://bore.vip","avatar":"https://bore.vip/img/avatar.jpg","descr":"博观而约取，厚积而薄发。"},{"name":"半方池水半方田","link":"https://uuanqin.top/","avatar":"https://cdn.gallery.uuanqin.top/img/avatar.webp","descr":"只能懂一点点"},{"name":"会飞的小弋","link":"https://lovelijunyi.gitee.io/","avatar":"https://s2.loli.net/2024/04/29/oZC3TYMhS4gjX5d.gif","descr":"喜欢大数据，嵌入式和机器视觉"},{"name":"Fifish's BBlog","link":"https://hififish.github.io/","avatar":"https://s2.loli.net/2024/04/29/gsytnEZTqu4MvHA.gif","descr":"快乐最重要"},{"name":"NX の 博客","link":"https://nickxu.me/","avatar":"https://s2.loli.net/2024/04/29/ewEFGXrdHm7ZvJx.jpg","descr":"这家伙真勤奋，什么都留下了"},{"name":"海拥","link":"https://haiyong.site/","avatar":"https://haiyong.site/img/favicon.png","descr":"一枚乐于分享技术与快乐的博主"},{"name":"Android","link":"https://android99.com","avatar":"https://android99.com/img/avatar.png","descr":"边缘矩阵"},{"name":"既往不恋","link":"https://deusyu.app/","avatar":"https://deusyu.app/img/avatar-2023.png","descr":"Beauty will save the world."},{"name":"怕冷爱上雪","link":"https://blog.4t.pw/","avatar":"https://blog.4t.pw/img/favicon.webp","descr":"千里之行，始于足下。"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
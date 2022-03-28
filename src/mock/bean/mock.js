
let Mock = require("mockjs")
// let arrs = {
  let arrs = [
       {
           "title":"Pistachio YYDS",
           "imgurl":require('@/assets/img/1.jpg'),
            "txt":"第一次吃到开心果冰激凌是在希腊旅游的时候，惊为天人！彻底沦陷！回国后倒是少见，而且还挺贵机缘巧合,外派荷兰,再次吃到开心果冰激凌,而且才1.5欧/ball,真是开心🥳",
            "from":"冰淇淋好吃研究所小组",
            "tag":["19","喜欢"]
       },
       {
        "title":"Wensleydale",
        "imgurl":require('@/assets/img/2.jpg'),
         "txt":"raspberry太好吃了更新一下cheese 种类是Wensleydale，lz在国外超市买的，口感很像芝士蛋糕，或者奶疙瘩？奶味很足，软软的很绵密，看我用量就知道我多爱这个cheese…😅除了树莓口...",
         "from":"奶酪猴子 Cheese Monkey小组",
         "tag":["65","喜欢"]
       },
       {"title":"this could be us.",
       "imgurl":require('@/assets/img/3.jpg'),
        "txt":"",
        "from":"街猫也可爱小组",
        "tag":["317","喜欢"]},
       {
        "title":"vivo originOS ocean",
        "imgurl":require('@/assets/img/4.jpg'),
         "txt":"更新了系统 虽迟但到🥰",
         "from":"我的桌面小组",
         "tag":["48","喜欢"]
       },
       {
        "title":"小村子",
        "imgurl":require('@/assets/img/5.jpg'),
         "txt":"说实话我真的好喜欢我老家啊宿醉早醒，窝在床里发呆，怎么睡也睡不着。大约五点半的时候，窗外一片漆黑，漆黑深处露出星星点点的灯光。这几天接连都是阴雨天气，太阳能供电的路灯早就微弱...",
         "from":"我的桌面小组",
         "tag":["48","喜欢"]
       },
       {
        "title":"dun",
        "imgurl":require('@/assets/img/6.jpg'),
         "txt":"虽然有点乱但是真的好可爱😆（个人习惯从资料库里找app）图片放在主楼啦，有喜欢但没放上的提醒我放上哦",
         "from":"我的桌面小组",
         "tag":["48","喜欢"]
       },
       {
        "title":"Is there a second chance?",
        "imgurl":require('@/assets/img/7.jpg'),
         "txt":"更新20211205感谢uu们的鼓励和分享😭我好爱你们❤️与此同时想分享我最新的心态➡️一直以来我的喜好和愿望还有兴趣被家庭和社会阉割了，现在没有感兴趣的了，仿佛已经麻木。那就从现有的专业开始，不妨骑... ",
         "from":"你社会时钟小组",
         "tag":["48","喜欢"]
       },
       {
        "title":"VIVO Origin OS",
        "imgurl":require('@/assets/img/8.jpg'),
         "txt":"大半夜不睡觉还在捣鼓桌面的我😇我又来更新啦🤗",
         "from":"我的桌面小组",
         "tag":["48","喜欢"]
       },
       {
        "title":"Sweet boy",
        "imgurl":require('@/assets/img/9.jpg'),
         "txt":"虽然有点乱但是真的好可爱😆（个人习惯从资料库里找app）图片放在主楼啦，有喜欢但没放上的提醒我放上哦",
         "from":"西狗小组",
         "tag":["111","喜欢"]
       },
       {
        "title":"Audun #Norwegian roast",
        "imgurl":require('@/assets/img/10.jpg'),
         "txt":"",
         "from":"我的桌面小组",
         "tag":["111","喜欢"]
       },
       {
        "title":"全家福",
        "imgurl":require('@/assets/img/11.jpg'),
         "txt":"猫妈妈生了四个崽，可是全都好胆小",
         "from":"可持续.极简小姐小组",
         "tag":["52","喜欢"]
       },
       {
        "title":"1100租的小卧室",
        "imgurl":require('@/assets/img/12.jpg'),
         "txt":"昨天换的灰色床品，睡觉比较安心，白色靠垫还不错，可拆洗，颜色搭配刚好合适。本来是四件套，因为我被套要买大一些的，枕套只要一个就好，然后跟客服商量的199三件套，使用感受，应该是棉的...",
         "from":"下厨房小组",
         "tag":["456","喜欢"]
       }

    ]

    let asid = [
      {
        "imgurl":require("@/assets/img/bd1.jpg"),
        "title":"自己做饭自己吃",
        "num":"687188个饭粒",
        "join":"+加入小组"
      
      },
      {
        "imgurl":require("@/assets/img/bd2.jpg"),
        "title":"Starbucks Fans Club 星巴克迷...",
        "num":"426677个饭粒",
        "join":"+加入小组"
      
      },
      {
        "imgurl":require("@/assets/img/bd3.jpg"),
        "title":"猫咪俱乐部",
        "num":"263478个饭粒",
        "join":"+加入小组"
      
      },
      {
        "imgurl":require("@/assets/img/bd4.jpg"),
        "title":"上海宠物救助领养Adoption",
        "num":"34456个饭粒",
        "join":"+加入小组"
      
      },
      {
        "imgurl":require("@/assets/img/bd5.jpg"),
        "title":"成都饮食乌托邦",
        "num":"822575个饭粒",
        "join":"+加入小组"
      
      },
      {
        "imgurl":require("@/assets/img/bd6.jpg"),
        "title":"烘培之家",
        "num":"94948个饭粒",
        "join":"+加入小组"
      
      },
      {
        "imgurl":require("@/assets/img/bd7.jpg"),
        "title":"自己做饭自己吃",
        "num":"263478个饭粒",
        "join":"+加入小组"
      
      },
      {
        "imgurl":require("@/assets/img/bd8.jpg"),
        "title":"猫",
        "num":"130075个饭粒",
        "join":"+加入小组"
      
      },
      {
        "imgurl":require("@/assets/img/bd9.jpg"),
        "title":"宠物领养",
        "num":"65602个饭粒",
        "join":"+加入小组"
      
      },
      {
        "imgurl":require("@/assets/img/bd10.jpg"),
        "title":"开咖啡是正经事",
        "num":"263478个饭粒",
        "join":"+加入小组"
      
      }
    ]

Mock.mock("/api/bean",arrs)
Mock.mock("/api/asid",asid)
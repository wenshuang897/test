let Mock = require("mockjs");
let cultureData = {
    "culture": [{
        "id": 1,
        "likes": 38,
        "title": "Theories of Neoliberalism Syllabus",
        "text": "搬运的是做流行音乐和声音研究、新自由主义批判的学者 Robin James的课程syllabus [https://docs.google.com/document/d/1WYh2biNcTGa3K3QAPq6P--j7HF8aQyh8y2BXDLlalLM/edit?usp=sharing] 大家也可关注她的个人网站 [http...",
        "from": "人文社科syllabus交换计划",
        "textImg": ""
    }, {
        "id": 2,
        "likes": 27,
        "title": "the thin red line",
        "text": "",
        "from": "无感主义者",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 3,
        "likes": 133,
        "title": "【更新p5】THU Law & Economics",
        "text": "看到组里有人要，在主楼里分享一下~ 感谢评论提醒，补充上了p5！",
        "from": "人文社科syllabus交换计划",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 4,
        "likes": 33,
        "title": "about May，about hug",
        "text": "成都母亲 5.12 5.17 水稻之父 地震 甘肃白银越野赛",
        "from": "行为实验者",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 5,
        "likes": 432,
        "title": "kaws热气球",
        "text": "高42米 世界上最大的热气球之一 cr水印",
        "from": "BDOER巨大沉默物体迷恋者",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 6,
        "likes": 100,
        "title": "南京博物院",
        "text": "",
        "from": "博物馆里怪事多",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 7,
        "likes": 102,
        "title": "THRIVE",
        "text": "Creative Director / Lead artist : Daniel Popper Lead Structural Designer: Robert Bernicchi https://www.danielpopper.com/thrive",
        "from": "BDOER巨大沉默物体迷恋者",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 8,
        "likes": 133,
        "title": "水下瀑布",
        "text": "",
        "from": "BDOER巨大沉默物体迷恋者",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 9,
        "likes": 31,
        "title": "删",
        "text": "删",
        "from": "买书如山倒 读书如抽丝",
        "textImg": ""
    }, {
        "id": 10,
        "likes": 70,
        "title": "巨大鲤鱼",
        "text": "平常事物的非常尺寸",
        "from": "BDOER巨大沉默物体迷恋者",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 11,
        "likes": 75,
        "title": "清书架",
        "text": "价格从左到右",
        "from": "买书如山倒 读书如抽丝",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 12,
        "likes": 51,
        "title": "初雪",
        "text": "",
        "from": "古典建筑与城市讨论组小组",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 13,
        "likes": 23,
        "title": "UCLA media/entertainment law",
        "text": " 分享一份UCLA的entertainment law。 2018 年的了， 有点老， 感兴趣可以参考一下。 附了一下课本和教学目标。 ",
        "from": "人文社科syllabus交换计划",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 14,
        "likes": 99,
        "title": "纸质｜Chinese young woman",
        "text": "",
        "from": "当代伟大的拼贴诗",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 15,
        "likes": 25,
        "title": "リラックス",
        "text": "昨晚用车站拿的广告剪了一首小诗，今天就到了公园和自然接触´o｀ 此时小鸭子在我面前游动🦆",
        "from": "当代伟大的拼贴诗",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }, {
        "id": 16,
        "likes": 196,
        "title": "引起舒适",
        "text": "by Artist Etienne Jacob",
        "from": "BDOER巨大沉默物体迷恋者",
        "textImg": "https://img3.doubanio.com/view/group_topic/small/public/p476574700.webp"
    }],
    "others": [{
        "id": 120,
        "member": "122188个成员",
        "infoTitle": "每天一首古典诗词",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 121,
        "member": "642841个诗人",
        "infoTitle": "像一位孤独的诗人",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 122,
        "member": "102944个成员",
        "infoTitle": "舊書鋪",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 123,
        "member": "180224个平社員",
        "infoTitle": "自学日语中",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 124,
        "member": "145916个思想者",
        "infoTitle": "哲学人",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 125,
        "member": "48592个组员",
        "infoTitle": "笔友-用信交流",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 126,
        "member": "寻找笔友(电邮)",
        "infoTitle": "53839个铅笔",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 127,
        "member": "224536个书虫",
        "infoTitle": "英文原版书友会",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 128,
        "member": "142203个逗号",
        "infoTitle": "路过心上的句子",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 129,
        "member": "958560个书本",
        "infoTitle": "每天提前上床N小时我们一起读书",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 130,
        "member": "371222个喜欢好句子的句子迷",
        "infoTitle": "句子迷",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 131,
        "member": "35797个成员",
        "infoTitle": "自学韩语",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 132,
        "member": "105222个成员",
        "infoTitle": "西班牙语",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 133,
        "member": "3389个成员",
        "infoTitle": "Vitamin音樂電子雜志",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 134,
        "member": "377914个小组成员",
        "infoTitle": "◎变态学英语交流小组◎",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }, {
        "id": 135,
        "member": "129369个成员",
        "infoTitle": "英语口语学习",
        "pic": "https://img1.doubanio.com/view/group/sqxs/public/af65cfd6e2c8559.webp"
    }]
}
Mock.mock('/api/culture', cultureData)
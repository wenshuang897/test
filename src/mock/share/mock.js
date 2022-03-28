let Mock = require('mockjs');
let datas = {
    left:[
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },{
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },{
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },{
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },{
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
        {
            like:85,
            title:"浓缩光影瞬间：小小方形照片，记录大大建筑之美",
            imgUrl:"https://img2.doubanio.com/view/group_topic/small/public/p330883691.webp",
            text:"对于摄影同好们来说，除了迷人的大自然风光外，建筑物也是非常受欢迎的拍摄题材。一是因为建筑物到处可见，二是因为建筑物有着风格迥异的美学特质。 光拍建筑物并不难，但如果想真正拍出艺...",
            group:"拍立得相机爱好小组"
        },
    ],
    right:[
        {
            name:"Python编程",
            imgUrl:"https://img2.doubanio.com/icon/g10003-1.jpg",
            group:"116541个Pythonista"
        },
        {
            name:"手机乐园",
            imgUrl:"https://img1.doubanio.com/img/files/file-1608540118.png",
            group:"4664个成员"
        },
        {
            name:"豆瓣排行榜",
            imgUrl:"https://img2.doubanio.com/icon/g69296-1.jpg",
            group:"199222个成员"
        },
        {
            name:"苹果产品二手转卖",
            imgUrl:"https://img1.doubanio.com/view/group/sqxs/public/d83fd82a3b7ebba.webp",
            group:"63791个果迷"
        },
        {
            name:"一二手相机市场",
            imgUrl:"https://img2.doubanio.com/view/group/sqxs/public/098f33c8cffb442.webp",
            group:"110245个小红帽"
        },
        {
            name:"KINDLE",
            imgUrl:"https://img2.doubanio.com/view/group/sqxs/public/0401f222aae9c63.webp",
            group:"380755个书虫"
        },
        {
            name:"烧耳机",
            imgUrl:"https://img1.doubanio.com/view/group/sqxs/public/1ac3b85d5e3e797.webp",
            group:"96527个烧豆"
        },{
            name:"iPhone&App",
            imgUrl:"https://img2.doubanio.com/view/group/sqxs/public/bf3408872c12f93.webp",
            group:"136793个果粉+爱屁屁"
        },
        {
            name:"微信",
            imgUrl:"https://img1.doubanio.com/view/group/sqxs/public/e4f4c120e2f5488.webp",
            group:"55210个小组成员"
        },
        {
            name:"iPhone&IPad二手交易区",
            imgUrl:"https://img1.doubanio.com/view/group/sqxs/public/773e91b421ecbda.webp",
            group:"33262个果粉"
        },
        {
            name:"邀请码",
            imgUrl:"https://img2.doubanio.com/view/group/sqxs/public/7063245ad8b0ca2.webp",
            group:"68671个邀请码发放者总人数"
        },
        {
            name:"大连软件园&高新园区",
            imgUrl:"https://img1.doubanio.com/view/group/sqxs/public/4cdf0ce03d2250a.webp",
            group:"17559个小盆友"
        },
        {
            name:"Photoshop",
            imgUrl:"https://img1.doubanio.com/view/group/sqxs/public/babce0b3bdf3869.webp",
            group:"293322个PSer"
        },
        {
            name:"职人社 × 产品经理交流",
            imgUrl:"https://img9.doubanio.com/view/group/sqxs/public/9d641852b5aebc6.webp",
            group:"36522个小碗泡面"
        },
        {
            name:"说服力-让你的PPT会说话",
            imgUrl:"https://img1.doubanio.com/view/group/sqxs/public/d8bbb438ad148ea.webp",
            group:"42578个成员"
        }
    ]
}
Mock.mock('/api/share',datas)
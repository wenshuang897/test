<template>
  <div>
    <div class="container">
      <div class="header-nav">
        <h1 class="head-title">生活</h1>
        <p>运动、手工、宠物、美食</p>
      </div>
      <div class="content clearfix">
        <div class="article">
          <div class="channel-item clearfix" v-for="(item, index) in arrs" :key="index">
            <div class="likes">
              {{ item.tag[0] }}
              <br />
              {{ item.tag[1] }}
            </div>
            <div class="bd">
              <h3>{{ item.title }}</h3>
              <div class="block">
                <div class="pic">
                  <img :src="item.imgurl" alt />
                </div>
                <p>{{ item.txt }}</p>
              </div>
              <div class="author">{{ item.from }}</div>
            </div>
          </div>
          <div class="page">
            <span class="prev">&lt;前页</span>
            <a href="javascript:;" class="active">1</a>
            <a href="javascript:;">2</a>
            <a href="javascript:;">3</a>
            <a href="javascript:;">4</a>
            <a href="javascript:;">5</a>
            <a href="javascript:;">6</a>
            <a href="javascript:;">7</a>
            <a href="javascript:;">8</a>
            <a href="javascript:;">9</a>
            <a href="javascript:;">...</a>
            <a href="javascript:;">2076</a>
            <a href="javascript:;">2077</a>
            <a class="next">后页&gt;</a>
          </div>
        </div>
        <div class="asid">
          <h2>生活类别值得加入的小组</h2>
          <ul class="bd">
            <li v-for="(item, index) in asid" :key="index">
              <div class="pic">
                <img :src="item.imgurl" alt />
              </div>
              <div class="info">
                <div class="title">{{ item.title }}</div>
                <span class="num">{{ item.num }}</span>
                <span class="join">{{ item.join }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BeanView",
  data() {
    return {
      arrs: null,
      asid: null,
      img: require("@/assets/img/1.jpg")
    };
  },
  methods: {
    async getbean() {
      let { data } = await axios.get("/api/bean");
      this.arrs = data;
      console.log(this.arrs);
    },
    async getasid() {
      let { data } = await axios.get("/api/asid");
      this.asid = data;
      console.log("asid的数据", this.asid);
    }
  },
  created() {
    this.getbean(), this.getasid();
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
body {
  font-size: 14px;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
.container {
  width: 1024px;
  margin: 0 auto;
}
.nav {
  width: 1024px;
  height: 74px;
  margin-bottom: 40px;
}
.header-nav {
  margin-bottom: 20px;
}
.header-nav .head-title {
  font-weight: 500;
  display: inline-block;
}
.channel-item .bd {
  float: right;
  width: 608px;
  height: 145px;
  zoom: 1;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
}
.header-nav p {
  display: inline-block;
  margin-left: 16px;
  padding: 0;
  font-size: 12px;
  color: #666;
}
.channel-item {
  margin-bottom: 20px;
}
.article {
  float: left;
  width: 675px;
  padding-right: 40px;
}
.asid {
  float: left;
  width: 300px;
}
.channel-item .likes {
  float: left;
  margin-right: 19px;
  padding: 8px 0;
  width: 48px;
  line-height: 1.3;
  text-align: center;
  font-size: 13px;
  color: #ca6445;
  background: #fae9da;
}
.channel-item h3 {
  font-size: 15px;
  margin-bottom: 12px;
  line-height: 1.3;
  font-weight: normal;
  color: #37a;
}
.channel-item .block {
  width: 588px;
  height: 64px;
  padding: 10px;
  color: #999;
  background: #f9f9f9;
}
.channel-item .pic {
  float: left;
  margin-right: 16px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  white-space: nowrap;
}
.channel-item .pic img {
  min-width: 60px;
  min-height: 60px;
  vertical-align: middle;
}
.author {
  margin-top: 10px;
  color: #666;
}
.asid h2 {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.3;
  color: #666;
  font-weight: normal;
}
.asid .bd {
  border-top: 1px solid #e5e5e5;
}
.bd li {
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  color: #666;
}
.bd li .pic {
  float: left;
  margin-right: 16px;
  width: 48px;
  height: 48px;
  position: relative;
}
.bd li .pic img {
  width: 48px;
  height: 48px;
}
.bd li .info {
  font-size: 13px;
  overflow: hidden;
  zoom: 1;
}
.bd .title {
  margin-bottom: 10px;
  line-height: 1.3;
  font-size: 14px;
  color: #37a;
}
.bd li .num {
  margin-right: 10px;
}
.bd .join {
  color: #37a;
}
.page {
  font-size: 14px;
  color: #aaa;
  margin: 20px 0;
  line-height: 150%;
  text-align: center;
}
.page .prev {
  margin-right: 20px;
}
.page a {
  padding: 0px 4px;
  margin: 2px;
  color: #37a;
}
.page a:hover {
  background: #3377aa;
  color: #fff;
}
.page a.active {
  background: #6ebfc3;
}
.page .next {
  margin-left: 20px;
}
</style>

<template>
  <div class="db-top-box">
    <ul class="top-ul">
      <li>娱乐</li>
      <li>影视、</li>
      <li>音乐、</li>
      <li>动漫、</li>
      <li>游戏、</li>
      <li>桌游、</li>
    </ul>

    <div class="main-box">
      <ul class="lef-ul">
        <li v-for="(item, index) of arrs" :key="index">
          <div class="like-box">
            <span>{{ item.likesCount }}</span>
            <span>{{ item.likes }}</span>
          </div>
          <div class="xx-box">
            <p class="db-title">{{ item.bdTitle }}</p>
            <div class="db-box">
              <img :src="item.bdPic" alt />
              <span class="db-text">{{ item.bdCon }}</span>
            </div>
            <p class="foot-txt">{{ item.bdForm }}</p>
            <p class="foot-hr"></p>
          </div>
        </li>
      </ul>

      <div class="rig-box">
        <ul class="rig-ul">
          <li>
            <p class="rig-top-txt">娱乐类别值得加入的小组</p>
          </li>
          <li v-for="(item,index) of arrR" :key="index">
            <img :src="item.imgSrc" alt />
            <div class="rig-rigbox">
              <p class="rig-title">{{item.title}}</p>
              <p class="rig-span">
                <span>{{item.num}}</span>
                <span class="add">{{item.join}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.add {
  color: dodgerblue;
  margin-left: 10px;
}
.rig-rigbox {
  margin-left: 20px;
}
.rig-span {
  font-size: 13px;
  color: #666;
}
.rig-title {
  color: deepskyblue;
}
.rig-title,
rig-span {
  padding: 0;
  margin: 0;
}
.rig-box li img {
  width: 48px;
  height: 50px;
}
.rig-box li:nth-child(1) {
  border: none;
}
.rig-box li:last-child {
  border-bottom: 1px solid #ccc;
}
.rig-box li {
  display: flex;
  padding: 10px 0;
  border-top: 1px solid #ccc;
}
.rig-box {
  margin-left: 50px;
  width: 300px;
  padding: 0;
}
.rig-top-txt {
  font-size: 14px;
  color: #666;
}
.xx-box .foot-hr {
  width: 620px;
  height: 1px;
  background-color: #ccc;
}
.foot-txt {
  font-size: 13px;
  color: #666;
}
.db-title {
  font-size: 14px;
  color: dodgerblue;
}
.lef-ul li .db-box .db-text {
  font-size: 13px;
  color: #666;
}
.lef-ul li .db-box {
  display: flex;
  width: 600px;
  padding: 10px;
  background-color: #f9f9f9;
  justify-content: space-between;
}
.lef-ul li .db-box img {
  width: 60px;
  height: 60px;
  margin-left: 10px;
  margin-right: 20px;
}
.lef-ul li .like-box {
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  background-color: #fae9da;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  color: #d36466;
}
.lef-ul li {
  margin-top: 35px;
  display: flex;
}
.lef-ul li .xx-box {
  margin-left: 10px;
  margin-top: -10px;
  width: 600px;
}
.main-box {
  width: 73%;
  margin: 0 auto;
  display: flex;
}
.db-top-box {
  width: 100%;
  padding: 10px;
}
.top-ul {
  width: 70%;
  margin: 0 auto;
  display: flex;
}
.top-ul li:nth-child(1) {
  font-size: 20px;
  margin-top: 2px;
  margin-left: 0;
  margin-right: 10px;
}
.top-ul li {
  margin-left: 5px;
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
  font-size: 13px;
}
li,
ul {
  list-style: none;
}
</style>

<script>
import axios from "axios";
export default {
  name: "AboutView",
  data() {
    return {
      arrs: null,
      arrR: null,
    };
  },
  components: {},
  methods: {
    async getHome() {
      let { data } = await axios.get("/api/dbL");
      this.arrs = data;
      console.log(this.arrs);
    },
    async getDbR() {
      let { data } = await axios.get("/api/dbR");
      this.arrR=data
    },
  },
  created() {
    this.getHome();
    this.getDbR();
  },
};
</script>


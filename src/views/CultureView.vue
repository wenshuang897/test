<template>
  <div class="culture">
    <div class="header">
      <h2>文化</h2>
      <p>文学、语言、人文、建筑、哲学、宗教、展览</p>
    </div>
    <div class="main">
      <ul class="groupList">
        <li v-for="(item, value) in culture" :key="item.id">
          <div class="likes">
            {{ item.likes }}
            <br />
            喜欢
          </div>
          <div class="content">
            <h3 class="title">{{ item.title }}</h3>
            <div class="article">
              <div class="textImg" v-show="item.textImg">
                <img :src="item.textImg" alt="" />
              </div>
              <p class="text">
                {{ item.text }}
              </p>
            </div>
            <div class="from">来自{{ item.from }}小组</div>
          </div>
        </li>
      </ul>
      <div class="others">
        <h2 class="o-title">文化类别值得加入的小组</h2>
        <ul class="othersList">
          <li v-for="(itemOthers, value) in others" :key="itemOthers.id">
            <div class="pic">
              <img :src="itemOthers.pic" alt="" />
            </div>
            <div class="info">
              <div class="info-title">{{ itemOthers.infoTitle }}</div>
              <span class="info-text">{{ itemOthers.member }}</span>
              <span class="join">+加入小组</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CultureView",
  data() {
    return {
      culture: null,
      others: null,
    };
  },
  methods: {
    async getCulture() {
      let { data } = await axios.get("/api/culture");
      this.culture = data.culture;
      this.others = data.others;
    }
  },
  created() {
    this.getCulture();
  },
};
</script>

<style scoped>
.culture {
  width: 1040px;
  margin: 0 auto;
}
.header {
  display: flex;
  align-items: baseline;
  margin-bottom: 25px;
}
.header h2 {
  color: #494949;
  font-size: 26px;
  font-weight: 500;
}
.header p {
  margin-left: 16px;
  font-size: 12px;
  color: #666;
}
.main {
  display: flex;
}
.groupList {
  width: 675px;
  margin-right: 40px;
  padding-right: 40px;
}
.others {
  width: 300px;
}
.groupList li {
  display: flex;
  margin-bottom: 20px;
}
.groupList .likes {
  margin-right: 19px;
  min-width: 40px;
  height: 40px;
  line-height: 20px;
  padding: 5px;
  text-align: center;
  font-size: 13px;
  color: #ca6445;
  background: #fae9da;
}
.content {
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  flex-grow: 1;
}
.text {
  line-height: 1.62;
}
.title {
  font-size: 15px;
  color: #37a;
  margin-bottom: 12px;
  font-weight: normal;
}
.article {
  display: flex;
  padding: 10px;
  color: #999;
  background: #f9f9f9;
  font-size: 12px;
}

.from {
  margin-top: 10px;
  font-size: 13px;
  color: #666;
}
.o-title {
  font-weight: normal;
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}
.othersList {
  border-top: 1px solid #e5e5e5;
}
.othersList li {
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  color: #666;
}
.othersList .pic {
  margin-right: 16px;
}
.othersList .pic img {
  width: 48px;
  height: 48px;
}
.info-title {
  margin-bottom: 10px;
  line-height: 1.3;
  font-size: 14px;
  color: #37a;
}
.info {
  padding-right: 40px;
}
.info span {
  font-size: 13px;
}
.info-text {
  margin-right: 10px;
}
.join {
  color: #37a;
}
.content .textImg {
  min-width: 60px;
  height: 60px;
  margin-right: 20px;
}
.content .textImg img {
  width: 100%;
  height: 100%;
}
</style>
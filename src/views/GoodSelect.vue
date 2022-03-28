<template>
  <div class="goodSelect">
    <p class="select-title">讨论精选</p>
    <div class="select-wrapper">
      <ul class="select-list">
        <li v-for="item in selectList" :key="item.id">
          <p class="likes">
            {{item.number}}
            <br />喜欢
          </p>
          <div class="info">
            <p class="title">{{item.title}}</p>
            <div>
              <img src=".././assets/select1.webp" alt />
              <!-- <img :src="item.imgsrc" alt /> -->
              <p class="text">{{item.text}}</p>
            </div>
            <p class="source">{{item.source}}</p>
          </div>
        </li>
      </ul>
      <div class="select-group">
        <p class="select-groupTitle">值得加入的小组</p>
        <ul class="group-list">
          <li v-for="item in selectGroup" :key="item.id">
            <img :src="item.imgsrc" alt />
            <!-- <img src=".././assets/group1.webp" alt /> -->
            <div>
              <p class="title">{{item.title}}</p>
              <p class="info">
                <span class="num">{{item.num}}</span>
                <span class="join">{{item.join}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:"GoodSelect",
    data(){
        return{
            selectList:null,
            selectGroup:null
        }
    },
    methods:{
        async getGoodSelect(){
            let {data} = await axios.get("/api/goodselect")
            this.selectList = data.selectList;
            this.selectGroup = data.selectGroup;
        }
    },
    created(){
        this.getGoodSelect();
    }
}
</script>

<style scoped>
.goodSelect {
  width: 69%;
  margin: 0 auto;
}
.select-title {
  font-size: 26px;
  color: #494949;
  margin-bottom: 35px;
}
.select-wrapper {
  display: flex;
  justify-content: space-between;
}
.select-list {
  width: 675px;
  display: flex;
  flex-wrap: wrap;
}
.select-list li {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.select-list li .likes {
  width: 48px;
  height: 34px;
  font-size: 13px;
  color: #ca6445;
  background: #fae9da;
  padding: 8px 0;
  text-align: center;
  margin-right: 19px;
}
.select-list li .info {
  width: 95%;
}
.select-list li .info .title {
  font-size: 15px;
  color: #3377aa;
  margin-bottom: 12px;
}
.select-list li .info > div {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 13px;
  color: #999;
}
.select-list li .info > div img {
  /* width: 90px; */
  height: 70px;
  margin-right: 15px;
}
.select-list li .info > div .text {
  line-height: 25px;
}
.select-list li .info .source {
  width: 100%;
  height: 41px;
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}
.select-group {
  width: 320px;
  height: 200px;
  /* background: red; */
}
.select-groupTitle {
  width: 100%;
  font-size: 14px;
  color: #666;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
}
.group-list li {
  width: 100%;
  font-size: 13px;
  color: #3377aa;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
}
.group-list li img {
  width: 48px;
  height: 48px;
  margin-right: 15px;
}
.group-list li .title {
  font-size: 14px;
  margin-bottom: 10px;
}
.group-list li .num {
  color: #666;
  margin-right: 10px;
}
</style>
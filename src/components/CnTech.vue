<template>
  <div class="cntech">
    <p>
      科技
      <span>数码、互联网、软件、硬件</span>
    </p>
    <section>
      <div class="left">
        <ul>
          <li v-for="(item,index) in cntechs" :key="index">
            <p>
              {{item.like}}
              <br />喜欢
            </p>
            <div class="right">
              <p class="title">{{item.title}}</p>
              <div>
                <img :src="item.imgUrl" />
                <p class="text">{{item.text}}</p>
              </div>
              <p class="group">
                来自
                <span>{{item.group}}</span>
              </p>
            </div>
          </li>
        </ul>
        <div class="pages">
          <p>&lt;前页</p>
          <p class="p">1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>...</p>
          <p>37</p>
          <p>后页&gt;</p>
        </div>
      </div>
      <aside>
        <p>科技类别值得加入的小组</p>
        <ul>
          <li v-for="(item,index) in groups" :key="index">
            <img :src="item.imgUrl" alt />
            <p>
              {{item.name}}
              <br />
              <span>{{item.group}}</span>
              <a href="#">+加入小组</a>
            </p>
          </li>
        </ul>
        <img src="https://tpc.googlesyndication.com/simgad/2258973048844704701" alt />
      </aside>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"CnTech",
    data(){
        return{
            cntechs:null,
            groups:null
        }
    },
    methods:{
        async getdatas(){
            let {data} = await axios.get('/api/share');
            // console.log(data);
            this.cntechs = data.left
            this.groups = data.right
        }
    },
    created(){
        this.getdatas()
    }
}
</script>
<style scoped>
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.cntech {
  width: 100%;
  padding: 0 13%;
  box-sizing: border-box;
}
.cntech > p {
  text-align: left;
  font-size: 25px;
}
.cntech > p span {
  font-size: 14px;
  margin-left: 20px;
}
.cntech section {
  display: flex;
}
.cntech section .left {
  width: 100%;
  flex: 2;
}
.cntech section .left ul li {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid rgb(235, 233, 233);
}
.cntech section .left ul li > p {
  width: 120px;
  height: 45px;
  color: rgb(206, 158, 68);
  padding-top: 10px;
  background: wheat;
  text-align: center;
  font-size: 14px;
  margin-right: 17px;
}
.cntech section .left ul li .text {
  color: rgb(168, 167, 167);
}
.cntech section .left ul li .group {
  color: rgb(121, 118, 118);
  font-size: 14px;
}
.cntech section .left ul li .right {
  text-align: left;
  /* background:red; */
}
.cntech section .left ul li .right .title {
  color: rgb(35, 133, 172);
}
.cntech section .left ul li .right div {
  display: flex;
  align-items: flex-end;
  padding: 10px;
  padding-top: 0;
  background: rgb(245, 242, 242);
  font-size: 14px;
}
.cntech section .left ul li .right div img {
  width: 70px;
  height: 70px;
  margin-right: 15px;
}
.cntech section .left .pages {
  display: flex;
  justify-content: center;
}
.cntech section .left .pages p {
  padding: 1px 5px;
  margin: 0 10px;
  font-size: 12px;
  color: rgb(35, 133, 172);
}
.cntech section .left .pages .p {
  background: paleturquoise;
  color: #fff;
}
.cntech section aside {
  flex: 1;
  text-align: left;
  margin-left: 40px;
}
.cntech section aside > p {
  font-size: 14px;
  margin-left: 40px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.cntech section aside ul li {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.cntech section aside ul li img {
  width: 48px;
  height: 48px;
  margin-right: 20px;
}
.cntech section aside ul li p {
  color: rgb(35, 133, 172);
  font-size: 14px;
}
.cntech section aside ul li p span {
  color: #000;
  margin-right: 20px;
}
.cntech section aside ul li p a {
  color: rgb(35, 133, 172);
}
.cntech section aside > img {
  margin: 20px 0 0 40px;
}
</style>
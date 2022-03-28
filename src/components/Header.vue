<template>
  <!-- 头部导航 -->
  <div class="nav">
    <div class="nav-wrapper">
      <div class="nav-left">
        <p class="nav-title">豆瓣小组</p>
        <div class="nav-list">
          <router-link to="/goodselect">精选</router-link>
          <router-link to="/culture">文化</router-link>
          <router-link to="/about">娱乐</router-link>
          <router-link to="/fashion">时尚</router-link>
          <router-link to="/bean">生活</router-link>
          <router-link to="/cntech">科技</router-link>
        </div>
      </div>
      <div class="nav-search">
        <input type="text" placeholder="小组、话题" />
        <img
          src="https://img3.doubanio.com/f/shire/f71f15922ebd7c0ff0ea0e7a25577529efd8981a/pics/icon/bn_srh_1.png"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
.nav {
  box-sizing: border-box;
  width: 100vw;
  margin-bottom: 40px;
  background: #f0f6f3;
}
.nav-wrapper {
  width: 69%;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.nav-left {
  display: flex;
}
.nav-left .nav-title {
  color: #09829e;
  font-size: 30px;
  margin-right: 40px;
}
.nav-left .nav-list {
  width: 442px;
  display: flex;
  align-items: center;
}
.nav-left .nav-list a {
  font-size: 15px;
  color: #037b82;
  margin-right: 30px;
}
.nav-left .nav-list a:hover {
  background: #037b82;
  color: #fff;
}
.nav-search {
  box-sizing: border-box;
  width: 278px;
  height: 30px;
  padding-right: 10px;
  background: #fff;
  border: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-search input {
  width: 242px;
  height: 100%;
  border: none;
  font-size: 13px;
  background: #fff;
  padding-left: 10px;
}
.nav-search img {
  cursor: pointer;
}
</style>
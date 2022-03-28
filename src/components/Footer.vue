<template>
  <!-- 页脚 -->
  <div class="footer">
    <p class="footer-text">© 2005－2022 douban.com, all rights reserved 北京豆网科技有限公司</p>
    <ul class="footer-infoList">
      <li>
        关于豆瓣
        <span>.</span>
      </li>
      <li>
        在豆瓣工作
        <span>.</span>
      </li>
      <li>
        联系我们
        <span>.</span>
      </li>
      <li>
        法律声明
        <span>.</span>
      </li>
      <li>
        帮助中心
        <span>.</span>
      </li>
      <li>
        移动应用
        <span>.</span>
      </li>
      <li>豆瓣广告</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style scoped>
.footer {
  width: 69%;
  height: 34px;
  margin: 0 auto;
  font-size: 13px;
  color: #999;
  border-top: 1px dashed #ddd;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-infoList {
  display: flex;
  color: #3377aa;
}
.footer-infoList li {
  height: 15px;
}
.footer-infoList li span {
  height: 100%;
  display: inline-block;
  margin: 0 5px;
  position: relative;
  top: -2px;
}
</style>
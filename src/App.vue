<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
// import AboutView from './views/AboutView.vue'
// import MyFashion from "./views/MyFashion.vue";
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components:{
    // AboutView,
    // MyFashion,  
    Header,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
nav {
  padding: 30px;
}
img {
  display: block;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
input {
  outline: none;
}
body {
  overflow-x: hidden;
}
</style>

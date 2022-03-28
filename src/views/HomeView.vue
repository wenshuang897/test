
<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      arrs: null,
    };
  },
  methods: {
    async getHome() {
      let { data } = await axios.get("/api/home");
      this.arrs = data;
      console.log(this.arrs);
    },
    async deletefn(id) {
      console.log("======");
      // let {data} = await axios.post("/api/post",{id:id}) post
      let {data} = await axios.delete("/api/delete/"+id)
      console.log(data);
      this.getHome();
    },
    async putfn(){
      
    }
  },
  created(){
    this.getHome()
  }
  // created() {
  //   axios.get("/api/home").then((res) => console.log(res.data));
  //   axios.get("/api/person").then((res) => console.log(res.data));
  //   axios.get("/api/sons").then((res) => console.log(res.data));
  // },
};
</script>

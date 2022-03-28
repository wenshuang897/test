import Vue from "vue";
import VueRouter from "vue-router";
import GoodSelect from "../views/GoodSelect.vue"
import CultureView from "../views/CultureView.vue"
import BeanView from "../views/BeanView.vue"
import AboutView from "../views/AboutView.vue"
import MyFashion from '../views/MyFashion.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "goodselect",
    component: GoodSelect,
  },
  {
    path: "/goodselect",
    name: "select",
    component: GoodSelect
  },
  {
    path: "/culture",
    component: CultureView
  },
  {
    path: "/about",
    component: AboutView
  },
  {
    path: "/fashion",
    component: MyFashion
  },
  {
    path: '/bean',
    component: BeanView
  },
  {
    path: "/cntech",
    component: () => import("@/components/CnTech.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;

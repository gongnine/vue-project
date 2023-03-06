import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/Index.vue";
import Login from "@/views/login/Index.vue";
import Home from "@/views/home/AppHome.vue";

const Product = () => import("@/views/product/Index.vue");
const List = () => import("@/views/product/list/Index.vue");
const Category = () => import("@/views/product/category/Index.vue");
const Order = () => import("@/views/order/Index.vue");
const OrderList = () => import("@/views/order/list/Index.vue");
const OrderCollect = () => import("@/views/order/collect/Index.vue");
const Advert = () => import("@/views/advert/Index.vue");
const AdvertList = () => import("@/views/advert/list/Index.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/product",
        name: "product",
        component: Product,
        children: [
          {
            path: "list",
            // 访问路径 /product/list
            name: "list",
            component: List,
          },
          {
            path: "category",
            name: "category",
            component: Category,
          },
        ],
      },
      {
        path: "/order",
        name: "order",
        component: Order,
        children: [
          {
            path: "orderlist",
            // 访问路径 /order/orderlist
            name: "orderlist",
            component: OrderList,
          },
          {
            path: "ordercollect",
            name: "ordercollect",
            component: OrderCollect,
          },
        ],
      },
      {
        path: "/advert",
        name: "advert",
        component: Advert,
        children: [
          {
            path: "advertlist",
            // 访问路径 /advert/advertlist
            name: "advertlist",
            component: AdvertList,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Index from "../view/Index.vue";
import Home from "../view/Home.vue";
import Card from "../view/card.vue";
import Result from "../view/Result.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
      children: [
        {
          path: "/Card",
          name: "Card",
          component: Card
        }
      ]
    },
    {
      path: "/Result",
      name: "Result",
      component: Result
    }
  ]
});

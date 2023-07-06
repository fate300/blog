import { createWebHistory, createRouter } from "vue-router";
import List from './List.vue';
import Home from './Home.vue';
import Detail from './Detail.vue';

const routes = [
  { path: "/detail/:id",
  component: Detail,

  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 

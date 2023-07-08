import { createWebHistory, createRouter } from "vue-router";
import List from './List.vue';
import Home from './Home.vue';
import Detail from './Detail.vue';
import Author from './Author.vue';
import Comment from './Comment.vue';

const routes = [
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ]
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

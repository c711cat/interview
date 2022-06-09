import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/Root.vue"),
    children: [
      {
        path: "",
        component: () => import("@/components/Home.vue"),
      },
      {
        path: "conversation/:friendId",
        component: () => import("@/components/Conversation.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

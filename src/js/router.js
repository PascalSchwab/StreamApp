import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Settings from "../pages/Settings.vue"
import Stream from "../pages/Stream.vue"
import Obs from "../pages/Obs.vue"

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/stream", component: Stream, name: "stream" },
  { path: "/obs", component: Obs, name: "obs" },
  { path: "/settings", component: Settings, name: "settings" }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
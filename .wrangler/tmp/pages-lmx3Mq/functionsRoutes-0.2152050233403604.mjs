import { onRequestGet as __api_post___id___js_onRequestGet } from "D:\\bili\\blog-frontend\\functions\\api\\post\\[[id]].js"
import { onRequestGet as __api_post_js_onRequestGet } from "D:\\bili\\blog-frontend\\functions\\api\\post.js"
import { onRequestGet as __api_posts_js_onRequestGet } from "D:\\bili\\blog-frontend\\functions\\api\\posts.js"

export const routes = [
    {
      routePath: "/api/post/:id*",
      mountPath: "/api/post",
      method: "GET",
      middlewares: [],
      modules: [__api_post___id___js_onRequestGet],
    },
  {
      routePath: "/api/post",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_post_js_onRequestGet],
    },
  {
      routePath: "/api/posts",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_posts_js_onRequestGet],
    },
  ]
import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7410a862 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _12031d01 = () => interopDefault(import('../pages/chapterfive/index.vue' /* webpackChunkName: "pages/chapterfive/index" */))
const _3100b275 = () => interopDefault(import('../pages/chapterfour/index.vue' /* webpackChunkName: "pages/chapterfour/index" */))
const _6425e005 = () => interopDefault(import('../pages/chapterthree/index.vue' /* webpackChunkName: "pages/chapterthree/index" */))
const _7ec43e33 = () => interopDefault(import('../pages/chaptertwo/index.vue' /* webpackChunkName: "pages/chaptertwo/index" */))
const _2612da3c = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _054be911 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _b505dd50 = () => interopDefault(import('../pages/film/index.vue' /* webpackChunkName: "pages/film/index" */))
const _1e203a1e = () => interopDefault(import('../pages/team/index.vue' /* webpackChunkName: "pages/team/index" */))
const _64f9ef96 = () => interopDefault(import('../pages/trailer/index.vue' /* webpackChunkName: "pages/trailer/index" */))
const _888ca340 = () => interopDefault(import('../pages/chapterthree/index copy.vue' /* webpackChunkName: "pages/chapterthree/index copy" */))
const _6f00688b = () => interopDefault(import('../pages/chapterthree/index25052022.vue' /* webpackChunkName: "pages/chapterthree/index25052022" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7410a862,
    name: "about___ar"
  }, {
    path: "/chapterfive",
    component: _12031d01,
    name: "chapterfive___ar"
  }, {
    path: "/chapterfour",
    component: _3100b275,
    name: "chapterfour___ar"
  }, {
    path: "/chapterthree",
    component: _6425e005,
    name: "chapterthree___ar"
  }, {
    path: "/chaptertwo",
    component: _7ec43e33,
    name: "chaptertwo___ar"
  }, {
    path: "/contact",
    component: _2612da3c,
    name: "contact___ar"
  }, {
    path: "/en",
    component: _054be911,
    name: "index___en"
  }, {
    path: "/film",
    component: _b505dd50,
    name: "film___ar"
  }, {
    path: "/team",
    component: _1e203a1e,
    name: "team___ar"
  }, {
    path: "/trailer",
    component: _64f9ef96,
    name: "trailer___ar"
  }, {
    path: "/chapterthree/index%20copy",
    component: _888ca340,
    name: "chapterthree-index copy___ar"
  }, {
    path: "/chapterthree/index25052022",
    component: _6f00688b,
    name: "chapterthree-index25052022___ar"
  }, {
    path: "/en/about",
    component: _7410a862,
    name: "about___en"
  }, {
    path: "/en/chapterfive",
    component: _12031d01,
    name: "chapterfive___en"
  }, {
    path: "/en/chapterfour",
    component: _3100b275,
    name: "chapterfour___en"
  }, {
    path: "/en/chapterthree",
    component: _6425e005,
    name: "chapterthree___en"
  }, {
    path: "/en/chaptertwo",
    component: _7ec43e33,
    name: "chaptertwo___en"
  }, {
    path: "/en/contact",
    component: _2612da3c,
    name: "contact___en"
  }, {
    path: "/en/film",
    component: _b505dd50,
    name: "film___en"
  }, {
    path: "/en/team",
    component: _1e203a1e,
    name: "team___en"
  }, {
    path: "/en/trailer",
    component: _64f9ef96,
    name: "trailer___en"
  }, {
    path: "/en/chapterthree/index%20copy",
    component: _888ca340,
    name: "chapterthree-index copy___en"
  }, {
    path: "/en/chapterthree/index25052022",
    component: _6f00688b,
    name: "chapterthree-index25052022___en"
  }, {
    path: "/",
    component: _054be911,
    name: "index___ar"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

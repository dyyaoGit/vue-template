import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: "首页"
      },
      component: () => import('@/views/index')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const headerTitle = to.meta.title || from.meta.title || 'title';
  document.title = headerTitle;
  next();
})

export default router;

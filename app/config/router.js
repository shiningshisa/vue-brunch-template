import Vue from 'vue'
import VueRouter from 'vue-router'
import AppRoutes from './routes.js'

Vue.use(VueRouter)

const AppRouter = new VueRouter({
  mode: 'history',
  base : '/',
  routes : AppRoutes
})

AppRouter.beforeEach((to, from, next) => {
  // removeEventListeners?

  window.scrollTo(0,0);
  next()
});

export default AppRouter

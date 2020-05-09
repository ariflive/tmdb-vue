import VueRouter from 'vue-router'

let routes = [
  {
    name: 'home',
    path: '/',
    components: {
      'list-router-view': require('./components/Home.vue')
    }
  },
  {
    name: 'stats',
    path: '/stats',
    components: {
      'list-router-view': require('./components/Stats.vue')
    }
  },
  {
    name: 'movie',
    path: '/movie/:id',
    components: {
      'page-router-view': require('./components/Single.vue')
    }
  }
];

const router =  new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;

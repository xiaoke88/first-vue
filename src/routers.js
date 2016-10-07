export default function (VueRouter) {
  return new VueRouter({
      mode: 'history',
      base: __dirname,
      routes: [{
        path: '/',
        component: require('./components/Hello.vue')
      },
        {
          path: '/bar',
          component: require('./components/Bar.vue')
        },
        {
          path: '/kenko',
          component: require('./components/kenko.vue')
        },
        {
          path: '*',
          component: require('./components/NotFound.vue')
        }
      ]
    }
  );
}

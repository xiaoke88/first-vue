export default function (router) {
  routes:[{
    '/': {
      name: 'home',
      component: require('./components/Hello.vue')
    },
    'bar': {
      name: 'bar',
      component: require('./components/Bar.vue')
    },
    'kenko': {
      name: 'kenko',
      component: require('./components/kenko.vue')
    },
    '*': {
      component: require('./components/NotFound.vue')
    }
  }]
}

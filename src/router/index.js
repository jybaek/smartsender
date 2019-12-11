import Vue from 'vue'
import Router from 'vue-router'
import sender from '@/components/sender'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sender',
      component: sender
    }
  ]
})

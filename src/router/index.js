import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import ProjectsFrame from '@/components/Projects/Frame'
import ProjectsOverview from '@/components/Projects/Overview'
import BobProject from '@/components/Projects/Bob'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Landing
    },
    {
      path: '/projects',
      component: ProjectsFrame
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FootBar from '@/components/FootBar'
import List from '@/components/List.vue'
import Details from '@/components/Details.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    },
  	{
  	  path: '/',
  	  name: 'FootBar',
  	  component: FootBar,
  	  children:[

  		  // {path:"/HelloWorld",component:HelloWorld},
  		  // {path:"/Details",component:Details},
      //   {path:"/List",component:List}
  	  ]
  	},

    ]
  })

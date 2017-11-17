import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/Home'
import Classification from '../components/classification/Classification'
import Shopcar from '../components/shopcar/Shopcar'
import My from '../components/my/My'
import Login from '../components/login/Login'
import Goods from '../components/goods/Goods'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  move: 'history',
  routes: [
    {path: '/home', name: 'Home', component: Home},
    {path: '/classification', name: 'Classification', component: Classification},
    {path: '/shopcar', name: 'Shopcar', component: Shopcar},
    {path: '/my', name: 'My', component: My},
    {path: '/login', name: 'Login', component: Login},
    {path: '/goods', name: 'Goods', component: Goods}
  ]
})

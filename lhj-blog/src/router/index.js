import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Note from '../components/Note'
import Article from '../components/Article'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    components: {
      header: Header,
      main: Home
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      header: Header,
      main: About
    }
  },
  {
    path: '/note',
    name: 'Note',
    components: {
      header: Header,
      main: Note
    }
  },
  {
    // 传参id
    path: '/article/:id',
    name: 'Article',
    components: {
      header: Header,
      main: Article
    }
  }
]

const router = new VueRouter({
  // url去除'#'
  mode: 'history',
  routes
})

export default router

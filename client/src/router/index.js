import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
import AuthorArticle from '@/components/AuthorArticle'
import MyStory from '@/components/MyStory'
import CreateStory from '@/components/CreateStory'
import EditStory from '@/components/EditStory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/articles/:id/edit',
      name: 'ArticleEdit',
      component: EditStory,
      beforeEnter: (to, from, next) => {
        const token = localStorage.token
        if (token !== undefined) {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/articles/author/:id',
      name: 'AuthorArticle',
      component: AuthorArticle
    },
    {
      path: '/my-articles',
      name: 'MyStory',
      component: MyStory,
      beforeEnter: (to, from, next) => {
        const token = localStorage.token
        if (token !== undefined) {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/create-article',
      name: 'CreateStory',
      component: CreateStory,
      beforeEnter: (to, from, next) => {
        const token = localStorage.token
        if (token !== undefined) {
          next()
        } else {
          next('/')
        }
      }
    }
  ]
})

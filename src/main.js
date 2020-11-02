import Vue from 'vue'
import VueRouter from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@/assets/css/font-face.css';
import '@/assets/css/all.min.css';

import '@/assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
import '@/assets/vendor/font-awesome-5/css/fontawesome-all.min.css';

import '@/assets/vendor/mdi-font/css/material-design-iconic-font.min.css';

import '@/assets/css/theme.css';


import App from './App.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '', name:'home',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/books', name:'books',
    component: () => import('./components/Books.vue')
  },
  {
    path: '/book/:bookId', name:'bookDetails',
    component: () => import('./components/BookDetails.vue')
  },
  {
    path: '/genders', name:'genders',
    component: () => import('./components/Genders.vue')
  },
  {
    path: '/admin', name:'admin',
    component: () => import('./components/Admin.vue')
  },
  {
    path: '/admin/books/new', name:'adminBooksNew',
    component: () => import('./components/AdminBooksNew.vue')
  },
  {
    path: '/admin/books', name:'adminBooks',
    component: () => import('./components/AdminBooks.vue')
  },
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');

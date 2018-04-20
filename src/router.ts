import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Work from './views/Work.vue';
import UiDesign from './components/UiDesign.vue';
import GraphicDesign from './components/GraphicDesign.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
    },
  ],
});

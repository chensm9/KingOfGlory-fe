import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hero',
      hidden: true
    },
    {
      path: '/hero',
      name: 'Hero',
      component: resolve => require(['@/components/Hero'], resolve)
    },
    {
      path: '/equip',
      name: 'Equip',
      component: resolve => require(['@/components/Equip'], resolve)
    },
    {
      path: '/rune',
      name: 'RuneInfo',
      component: resolve => require(['@/components/Rune'], resolve)
    },
    {
      path: '/summoner',
      name: 'Summoner',
      component: resolve => require(['@/components/Summoner'], resolve)
    },
    {
      path: '/skin',
      name: 'Skin',
      component: resolve => require(['@/components/Skin'], resolve)
    },
    {
      path: '/hero/*',
      name: 'HeroDetailInfo',
      component: resolve => require(['@/components/HeroDetail'], resolve)
    },
    {
      path: '/equip/*',
      name: 'EquipDetail',
      component: resolve => require(['@/components/EquipDetail'], resolve)
    },
    {
      path: '*', redirect: '/', hidden: true
    }
  ]
});

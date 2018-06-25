import Vue from 'vue';
import Router from 'vue-router';
import HeroInfoPage from '@/components/Hero';
import EquipInfoPage from '@/components/Equip';
import RuneInfoPage from '@/components/Rune';
import Summoner from '@/components/Summoner';
import Skin from '@/components/Skin';

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
      name: 'HeroInfo',
      component: HeroInfoPage
    },
    {
      path: '/equip',
      name: 'EquipInfo',
      component: EquipInfoPage
    },
    {
      path: '/rune',
      name: 'RuneInfo',
      component: RuneInfoPage
    },
    {
      path: '/summoner',
      name: 'Summoner',
      component: Summoner
    },
    {
      path: '/skin',
      name: 'Skin',
      component: Skin
    },
    {
      path: '/hero/*',
      name: 'HeroDetailInfo',
      component: () => import('@/components/HeroDetail')
    },
    {
      path: '*', redirect: '/', hidden: true
    }
  ]
});

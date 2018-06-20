import Vue from 'vue';
import Router from 'vue-router';
import HeroInfoPage from '@/components/HeroInfo';
import EquipInfoPage from '@/components/EquipInfo';
import RuneInfoPage from '@/components/RuneInfo';
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
      component: () => import('@/components/HeroDetailInfo')
    },
    {
      path: '*', redirect: '/', hidden: true
    }
  ]
});

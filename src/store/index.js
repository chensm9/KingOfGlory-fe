import Vue from 'vue';
import Vuex from 'vuex';
import heroInfo from './modules/heroInfo';
import summoner from './modules/summoner';
import skillInfo from './modules/skillInfo';
import skinInfo from './modules/skinInfo';
import rune from './modules/rune';
import collocation from './modules/collocation';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    heroInfo,
    summoner,
    skillInfo,
    skinInfo,
    rune,
    collocation,
  },
  getters
});
export default store;

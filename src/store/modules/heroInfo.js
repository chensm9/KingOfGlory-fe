import { getAllHeroInfo, getCurrentHero } from '@/api/heroInfo';

const heroInfo = {
  state: {
    all_hero_info: [],
    current_hero: {},
  },
  mutations: {
    SET_ALL_HERO_INFO: (state, all_hero_info) => {
      state.all_hero_info = all_hero_info;
    },
    SET_CURRENT_HERO: (state, current_hero) => {
      state.current_hero = current_hero;
    },
  },
  actions: {
    GetAllHeroInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getAllHeroInfo().then(response => {
          const data = response;
          console.log('all heros: ', response);
          commit('SET_ALL_HERO_INFO', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    GetCurrentHero({ commit }, heroName) {
      return new Promise((resolve, reject) => {
        getCurrentHero(heroName).then(response => {
          var current_hero = response[0];
          current_hero.story = current_hero.story.split('\r\n');
          current_hero.baseAttribute = JSON.parse(current_hero.baseAttribute);
          commit('SET_CURRENT_HERO', current_hero);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};
export default heroInfo;

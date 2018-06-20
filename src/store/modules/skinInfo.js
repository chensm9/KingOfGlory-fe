import { getSkinInfoByHeroName } from '@/api/skinInfo';

const skinInfo = {
  state: {
    current_skin: []
  },
  mutations: {
    SET_CURRENT_SKIN: (state, current_skin) => {
      state.current_skin = current_skin;
    }
  },
  actions: {
    GetCurrentSkin({ commit }, heroName) {
      return new Promise((resolve, reject) => {
        getSkinInfoByHeroName(heroName).then(response => {
          const data = response;
          commit('SET_CURRENT_SKIN', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};
export default skinInfo;

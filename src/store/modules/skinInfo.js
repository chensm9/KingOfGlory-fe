import { getSkinInfoByHeroName, getAllSkin } from '@/api/skinInfo';

const skinInfo = {
  state: {
    current_skin: [],
    all_skin: [],
  },
  mutations: {
    SET_CURRENT_SKIN: (state, current_skin) => {
      state.current_skin = current_skin;
    },
    SET_ALL_SKIN: (state, all_skin) => {
      state.all_skin = all_skin;
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
    },
    GetAllSkin({ commit }) {
      return new Promise((resolve, reject) => {
        getAllSkin().then(response => {
          const data = response;
          commit('SET_ALL_SKIN', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};
export default skinInfo;

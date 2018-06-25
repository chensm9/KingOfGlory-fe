import { getAllRune, getCurrentRune } from '@/api/rune';

const Rune = {
  state: {
    all_rune: [],
    current_rune: []
  },
  mutations: {
    SET_CURRENT_RUNE: (state, current_rune) => {
      state.current_rune = current_rune;
    },
    SET_ALL_RUNE: (state, all_rune) => {
      state.all_rune = all_rune;
    }
  },
  actions: {
    GetCurrentRune({ commit }, runeJson) {
      return new Promise((resolve, reject) => {
        getCurrentRune(runeJson).then(response => {
          const data = response;
          console.log(data);
          commit('SET_CURRENT_RUNE', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    GetAllRune({ commit }) {
      return new Promise((resolve, reject) => {
        getAllRune().then(response => {
          const data = response;
          commit('SET_ALL_RUNE', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};
export default Rune;

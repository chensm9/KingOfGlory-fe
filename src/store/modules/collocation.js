import { getCurrentCollocation } from '@/api/collocation';

const Collocation = {
  state: {
    current_collocation: []
  },
  mutations: {
    SET_CURRENT_COLLOCATION: (state, current_collocation) => {
      state.current_collocation = current_collocation;
    }
  },
  actions: {
    GetCurrentCollocation({ commit }, heroName) {
      return new Promise((resolve, reject) => {
        getCurrentCollocation(heroName).then(response => {
          const data = response;
          console.log(data);
          commit('SET_CURRENT_COLLOCATION', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
  }
};
export default Collocation;

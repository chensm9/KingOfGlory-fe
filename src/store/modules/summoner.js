import { getAllSummoner } from '@/api/summoner';

const summoner = {
  state: {
    all_summoner: []
  },
  mutations: {
    SET_ALL_SUMMONER: (state, all_summoner) => {
      state.all_summoner = all_summoner;
    }
  },
  actions: {
    GetAllSummoner({ commit }) {
      return new Promise((resolve, reject) => {
        getAllSummoner().then(response => {
          const data = response;
          console.log('all summoner: ', response);
          commit('SET_ALL_SUMMONER', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};
export default summoner;

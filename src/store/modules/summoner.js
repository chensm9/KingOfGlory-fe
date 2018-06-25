import { getAllSummoner, getSummonerByName } from '@/api/summoner';

const summoner = {
  state: {
    all_summoner: [],
    current_summoner: {},
  },
  mutations: {
    SET_ALL_SUMMONER: (state, all_summoner) => {
      state.all_summoner = all_summoner;
    },
    SET_CURRENT_SUMMONER: (state, current_summoner) => {
      state.current_summoner = current_summoner;
    }
  },
  actions: {
    GetAllSummoner({ commit }) {
      return new Promise((resolve, reject) => {
        getAllSummoner().then(response => {
          const data = response;
          commit('SET_ALL_SUMMONER', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    GetSummonerByName({ commit }, heroName) {
      return new Promise((resolve, reject) => {
        getSummonerByName(heroName).then(response => {
          const data = response[0];
          commit('SET_CURRENT_SUMMONER', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};
export default summoner;

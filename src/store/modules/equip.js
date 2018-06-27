import { getCurrentEquip, getAllEquip } from '@/api/equip';

const equip = {
  state: {
    all_equip: [],
    current_equip: {},
    same_equip: []
  },
  mutations: {
    SET_ALL_EQUIP: (state, all_equip) => {
      state.all_equip = all_equip;
    },
    SET_CURRENT_EQUIP: (state, current_equip) => {
      state.current_equip = current_equip;
    },
    SET_SAME_EQUIP: (state, same_equip) => {
      state.same_equip = same_equip;
    }
  },
  actions: {
    GetAllEquip({ commit }) {
      return new Promise((resolve, reject) => {
        getAllEquip().then(response => {
          const data = response;
          console.log('all equip', data);
          commit('SET_ALL_EQUIP', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    GetCurrentEquip({ commit }, equipName) {
      return new Promise((resolve, reject) => {
        getCurrentEquip(equipName).then(response => {
          const data = response;
          console.log(data);
          commit('SET_CURRENT_EQUIP', data.equip);
          commit('SET_SAME_EQUIP', data.same_equip);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
  }
};
export default equip;

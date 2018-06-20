import { getSkillInfoByHeroName } from '@/api/skillInfo';

const skillInfo = {
  state: {
    current_skill: []
  },
  mutations: {
    SET_CURRENT_SKILL: (state, current_skill) => {
      state.current_skill = current_skill;
    }
  },
  actions: {
    GetCurrentSkill({ commit }, heroName) {
      return new Promise((resolve, reject) => {
        getSkillInfoByHeroName(heroName).then(response => {
          const data = response;
          commit('SET_CURRENT_SKILL', data);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};
export default skillInfo;

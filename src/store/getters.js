
const getters = {
  all_hero_info: state => state.heroInfo.all_hero_info,
  all_summoner: state => state.summoner.all_summoner,
  current_skill: state => state.skillInfo.current_skill,
  current_hero: state => state.heroInfo.current_hero,
  current_skin: state => state.skinInfo.current_skin,
};
export default getters;

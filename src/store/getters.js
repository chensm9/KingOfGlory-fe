
const getters = {
  all_hero_info: state => state.heroInfo.all_hero_info,
  all_summoner: state => state.summoner.all_summoner,
  all_skin: state => state.skinInfo.all_skin,
  all_rune: state => state.rune.all_rune,
  current_hero: state => state.heroInfo.current_hero,
  current_skill: state => state.skillInfo.current_skill,
  current_skin: state => state.skinInfo.current_skin,
  current_summoner: state => state.summoner.current_summoner,
  current_rune: state => state.rune.current_rune,
  current_collocation: state => state.collocation.current_collocation,
  current_equip: state => state.equip.current_equip,
  same_equip: state => state.equip.same_equip
};
export default getters;

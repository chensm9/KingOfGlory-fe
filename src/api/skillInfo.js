import request from '@/utils/request';
export function getSkillInfoByHeroName(heroName) {
  heroName = '/api/skill/' + encodeURI(heroName);
  return request({
    url: heroName,
    method: 'get'
  });
}


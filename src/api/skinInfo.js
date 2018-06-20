import request from '@/utils/request';
export function getSkinInfoByHeroName(heroName) {
  heroName = '/api/skin/' + encodeURI(heroName);
  return request({
    url: heroName,
    method: 'get'
  });
}


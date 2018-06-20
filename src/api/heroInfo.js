import request from '@/utils/request';
export function getAllHeroInfo() {
  return request({
    url: '/api/hero',
    method: 'get'
  });
}

export function getCurrentHero(heroName) {
  return request({
    url: '/api/hero/' + encodeURI(heroName),
    method: 'get'
  });
}


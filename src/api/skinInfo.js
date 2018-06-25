import request from '@/utils/request';
export function getSkinInfoByHeroName(heroName) {
  var url = '/api/skin/' + encodeURI(heroName);
  return request({
    url: url,
    method: 'get'
  });
}

export function getAllSkin() {
  return request({
    url: '/api/skin/',
    method: 'get'
  });
}

import request from '@/utils/request';
export function getAllSummoner() {
  return request({
    url: '/api/summoner',
    method: 'get'
  });
}

export function getSummonerByName(heroName) {
  var url = '/api/summoner/' + encodeURI(heroName);
  return request({
    url: url,
    method: 'get'
  });
}


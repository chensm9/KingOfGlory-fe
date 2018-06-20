import request from '@/utils/request';
export function getAllSummoner() {
  return request({
    url: '/api/summoner',
    method: 'get'
  });
}


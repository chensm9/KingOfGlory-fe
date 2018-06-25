import request from '@/utils/request';

export function getCurrentCollocation(heroName) {
  return request({
    url: '/api/collocation',
    method: 'post',
    data: {
      hero: heroName
    }
  });
}


import request from '@/utils/request';
export function getAllRune() {
  return request({
    url: '/api/rune',
    method: 'get'
  });
}

export function getCurrentRune(runeJson) {
  return request({
    url: '/api/rune/',
    method: 'post',
    data: JSON.parse(runeJson)
  });
}


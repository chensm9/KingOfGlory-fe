import request from '@/utils/request';

export function getCurrentEquip(equipName) {
  return request({
    url: '/api/equip',
    method: 'post',
    data: {
      equip: decodeURI(equipName)
    }
  });
}


import request from '@/shared/api/request.js';

export function getProducts() {
  return request({
    url: '/products',
    method: 'get',
  });
}

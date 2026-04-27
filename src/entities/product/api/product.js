import request from '@/shared/api/request.js';

export function getProduct(id) {
  return request({
    url: `/products/${id}`,
    method: 'get',
  });
}

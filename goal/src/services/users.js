import request from '../utils/request';
import { PAGE_SIZE, DELETE } from '../constants';

export function fetch({ page }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: { DELETE },
  });
}

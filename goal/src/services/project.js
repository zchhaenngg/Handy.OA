import request from '../utils/request';
import { PAGE_SIZE, DELETE } from '../constants';

export function GetPage({ page, pagesize = PAGE_SIZE }) {
  return request(`/api/project?_page=${page}&_limit=${pagesize}`);
}

export function remove(id) {
  return request(`/api/project/${id}`, {
    method: { DELETE },
  });
}

import axios from 'axios';
import queryString from 'query-string';
import { GuestViewInterface, GuestViewGetQueryInterface } from 'interfaces/guest-view';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGuestViews = async (
  query?: GuestViewGetQueryInterface,
): Promise<PaginatedInterface<GuestViewInterface>> => {
  const response = await axios.get('/api/guest-views', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createGuestView = async (guestView: GuestViewInterface) => {
  const response = await axios.post('/api/guest-views', guestView);
  return response.data;
};

export const updateGuestViewById = async (id: string, guestView: GuestViewInterface) => {
  const response = await axios.put(`/api/guest-views/${id}`, guestView);
  return response.data;
};

export const getGuestViewById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/guest-views/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGuestViewById = async (id: string) => {
  const response = await axios.delete(`/api/guest-views/${id}`);
  return response.data;
};

import axios from 'axios';
import queryString from 'query-string';
import { PlantDataInterface, PlantDataGetQueryInterface } from 'interfaces/plant-data';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPlantData = async (
  query?: PlantDataGetQueryInterface,
): Promise<PaginatedInterface<PlantDataInterface>> => {
  const response = await axios.get('/api/plant-data', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPlantData = async (plantData: PlantDataInterface) => {
  const response = await axios.post('/api/plant-data', plantData);
  return response.data;
};

export const updatePlantDataById = async (id: string, plantData: PlantDataInterface) => {
  const response = await axios.put(`/api/plant-data/${id}`, plantData);
  return response.data;
};

export const getPlantDataById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/plant-data/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePlantDataById = async (id: string) => {
  const response = await axios.delete(`/api/plant-data/${id}`);
  return response.data;
};

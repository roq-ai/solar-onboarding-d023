import axios from 'axios';
import queryString from 'query-string';
import { SolarPlantInterface, SolarPlantGetQueryInterface } from 'interfaces/solar-plant';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSolarPlants = async (
  query?: SolarPlantGetQueryInterface,
): Promise<PaginatedInterface<SolarPlantInterface>> => {
  const response = await axios.get('/api/solar-plants', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSolarPlant = async (solarPlant: SolarPlantInterface) => {
  const response = await axios.post('/api/solar-plants', solarPlant);
  return response.data;
};

export const updateSolarPlantById = async (id: string, solarPlant: SolarPlantInterface) => {
  const response = await axios.put(`/api/solar-plants/${id}`, solarPlant);
  return response.data;
};

export const getSolarPlantById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/solar-plants/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSolarPlantById = async (id: string) => {
  const response = await axios.delete(`/api/solar-plants/${id}`);
  return response.data;
};

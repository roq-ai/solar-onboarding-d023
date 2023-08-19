import { UserInterface } from 'interfaces/user';
import { SolarPlantInterface } from 'interfaces/solar-plant';
import { GetQueryInterface } from 'interfaces';

export interface PlantDataInterface {
  id?: string;
  data: string;
  upload_date?: any;
  user_id?: string;
  solar_plant_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  solar_plant?: SolarPlantInterface;
  _count?: {};
}

export interface PlantDataGetQueryInterface extends GetQueryInterface {
  id?: string;
  data?: string;
  user_id?: string;
  solar_plant_id?: string;
}

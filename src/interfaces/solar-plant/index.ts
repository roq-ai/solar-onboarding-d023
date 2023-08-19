import { PlantDataInterface } from 'interfaces/plant-data';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface SolarPlantInterface {
  id?: string;
  commissioning_date: any;
  location: string;
  asset_size: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  plant_data?: PlantDataInterface[];
  organization?: OrganizationInterface;
  _count?: {
    plant_data?: number;
  };
}

export interface SolarPlantGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  organization_id?: string;
}

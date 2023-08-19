import { GuestViewInterface } from 'interfaces/guest-view';
import { InvitationInterface } from 'interfaces/invitation';
import { SolarPlantInterface } from 'interfaces/solar-plant';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  guest_view?: GuestViewInterface[];
  invitation?: InvitationInterface[];
  solar_plant?: SolarPlantInterface[];
  user?: UserInterface;
  _count?: {
    guest_view?: number;
    invitation?: number;
    solar_plant?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

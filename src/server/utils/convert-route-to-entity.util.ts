const mapping: Record<string, string> = {
  'guest-views': 'guest_view',
  invitations: 'invitation',
  organizations: 'organization',
  'plant-data': 'plant_data',
  'solar-plants': 'solar_plant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

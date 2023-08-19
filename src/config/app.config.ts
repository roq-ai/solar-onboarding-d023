interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Team Member', 'Data Analyst', 'Plant Manager'],
  tenantName: 'Organization',
  applicationName: 'Solar Onboarding',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};

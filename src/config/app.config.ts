interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Create an application',
    'Read job information',
    'Read company information',
    'Read personal user information',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage jobs',
    'Manage applications',
    'Manage employees',
    'Manage HR managers',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/fcdd7096-678d-4880-a9a5-01c29243f6ce',
};

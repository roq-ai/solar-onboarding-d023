import * as yup from 'yup';

export const solarPlantValidationSchema = yup.object().shape({
  commissioning_date: yup.date().required(),
  location: yup.string().required(),
  asset_size: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});

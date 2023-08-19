import * as yup from 'yup';

export const plantDataValidationSchema = yup.object().shape({
  data: yup.string().required(),
  upload_date: yup.date().required(),
  user_id: yup.string().nullable(),
  solar_plant_id: yup.string().nullable(),
});

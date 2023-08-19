import * as yup from 'yup';

export const guestViewValidationSchema = yup.object().shape({
  view_date: yup.date().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});

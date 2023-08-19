import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  email: yup.string().required(),
  role: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
  invited_by: yup.string().nullable(),
});

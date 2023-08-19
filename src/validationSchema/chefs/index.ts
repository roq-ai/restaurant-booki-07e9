import * as yup from 'yup';

export const chefValidationSchema = yup.object().shape({
  speciality: yup.string().required(),
  experience_years: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  restaurant_id: yup.string().nullable(),
});

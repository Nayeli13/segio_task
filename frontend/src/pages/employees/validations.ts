import * as yup from 'yup';

export const validations = yup.object({
  name: yup.string().required('No puede dejar este campo vacio'),
  position: yup.string().required('No puede dejar este campo vacio'),
  salary: yup.number().required('No puede dejar este campo vacio'),
  departament: yup.string().required('No puede dejar este campo vacio'),
});

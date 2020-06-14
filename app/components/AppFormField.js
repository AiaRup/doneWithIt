import React from 'react';
import { useFormikContext } from 'formik';

import { AppTextInput } from './AppTextInput';
import { ErrorMessage } from './ErrorMessage';

export const AppFormField = ({ name, ...rest }) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

import React from 'react';
import { useFormikContext } from 'formik';

import { AppTextInput } from './AppTextInput';
import { ErrorMessage } from './ErrorMessage';

export const AppFormField = ({ name, width, ...rest }) => {
  const {
    setFieldValue,
    errors,
    setFieldTouched,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

import React from 'react';
import { useFormikContext } from 'formik';

import { AppButton } from '../AppButton';

export const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { Notifications } from 'expo';
import * as Yup from 'yup';

import { AppForm } from './forms/AppForm';
import { AppFormField } from './forms/AppFormField';
import { SubmitButton } from './forms/SubmitButton';
import { ErrorMessage } from './forms/ErrorMessage';
import messagesApi from '../api/messages';

export const ContactSellerForm = ({ listing }) => {
  const [error, setError] = useState(false);

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log('Error', result);
      setError(true);
      return Alert.alert('Error', 'Could not send the message to the seller.');
    }

    resetForm();
    setError(false);

    Notifications.presentLocalNotificationAsync({
      title: 'Awesome!',
      body: 'Your message was sent to the seller.',
    });
  };

  return (
    <AppForm
      initialValues={{ message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <ErrorMessage error="You must add a message." visible={error} />
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
};

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label('Message'),
});

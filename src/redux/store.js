import { configureStore } from '@reduxjs/toolkit';
import contactFormSlice from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactFormSlice,
  },
});

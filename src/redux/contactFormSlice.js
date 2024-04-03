import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialContactsState = { contacts: [] };

const contactFormSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContacts(state, action) {
      state.contacts = [...state.contacts, ...action.payload.contacts];
    },
  },
});

export const { addContacts } = contactFormSlice.actions;
export default contactFormSlice.reducer;

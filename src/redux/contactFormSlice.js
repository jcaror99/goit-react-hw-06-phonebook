import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = { contacts: [], filter: '' };

const contactFormSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContacts } = contactFormSlice.actions;
export default contactFormSlice.reducer;

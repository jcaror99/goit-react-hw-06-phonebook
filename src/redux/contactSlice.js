import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = { contacts: [], filter: '' };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, filterContacts } = contactSlice.actions;
export default contactSlice.reducer;

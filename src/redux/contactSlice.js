import { createSlice } from '@reduxjs/toolkit';

const initialContactsState = { contacts: [], filter: '' };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      let index = state.contacts.findIndex(
        element => element.name.toLowerCase() !== action.payload
      );

      state.contacts.splice(index, 1);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, filterContacts, deleteContacts } =
  contactSlice.actions;
export default contactSlice.reducer;

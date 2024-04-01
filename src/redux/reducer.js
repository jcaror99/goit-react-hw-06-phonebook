import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = [];

const contactFormSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addContacts } = contactFormSlice.actions;
export default contactFormSlice.reducer;

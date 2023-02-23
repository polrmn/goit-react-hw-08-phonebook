import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from 'redux/contacts/contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContactsThunk.pending](state) {
      state.isLoading = true;
    },
    [getContactsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getContactsThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.items = [];
    },
    [addContactThunk.pending](state) {
      state.isLoading = true;
    },
    [addContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
    },
    [addContactThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContactThunk.pending](state) {
      state.isLoading = true;
    },
    [deleteContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContactThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

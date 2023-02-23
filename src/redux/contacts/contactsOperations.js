import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import { addContact, deleteContact, getContacts, token } from 'services/authServices';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue, getState }) => {
    try {
      token.set(getState().auth.token);
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
    'contacts/addContact', 
    async(contact, thunkAPI)=>{
        try {   
            return await addContact(contact);
            
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
})

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      return await deleteContact(contactId);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
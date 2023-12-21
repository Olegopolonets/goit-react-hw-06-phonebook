import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  },
  reducers: {
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    addContact: {
      prepare: ({ name, number }) => {
        return {
          payload: {
            id: nanoid(5),
            name,
            number,
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
  },
});

export const { deleteContact, setFilter, addContact } = phonebookSlice.actions;

export default phonebookSlice.reducer;

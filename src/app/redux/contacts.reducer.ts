import {Contact} from '../phone-book.model';
import {Action} from '@ngrx/store';
import {AddContact, CONTACT_ACTION} from './contacts.action';

const initialState = {
  contacts: [
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg')
  ]
};

export function contactsReducer(state = initialState, action: AddContact) {
  switch (action.type) {
    case CONTACT_ACTION.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    default:
      return state;
  }
}

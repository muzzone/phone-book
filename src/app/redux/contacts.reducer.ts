import {Contact} from '../phone-book.model';
import {Action} from '@ngrx/store';
import {AddContact, CONTACT_ACTION} from './contacts.action';

const initialState = {
  contacts: [
    new Contact('Hugh', 'Laurie', '9254623345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Joseph', 'Gilgun', '9255253441', 'Google', 'JosephGilgun@gmail.com', 'http://epizod.tv/sites/default/files/styles/kino_portret_165x188/public/453543543654.jpg?itok=zV2AuUqN'),
    new Contact('David', 'William Duchovny', '9257651341', 'Apple', 'WilliamDuchovny@gmail.com', 'http://obrazovaka.ru/wp-content/uploads/2014/11/Duhovny-Devid.jpg'),
    new Contact('Aaron Paul', 'Sturtevant', '9252135348', 'Yahoo', 'AaronPaul@gmail.com', 'http://www.rxtv.ru/img/913069.jpg')
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

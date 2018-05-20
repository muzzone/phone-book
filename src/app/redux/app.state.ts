import {Contact} from '../phone-book.model';

export interface AppState {
  contactsPage: {
    contacts: Contact[]
  };
}

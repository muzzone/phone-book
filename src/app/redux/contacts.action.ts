import {Action} from '@ngrx/store';
import {Contact} from '../phone-book.model';

export namespace CONTACT_ACTION {
  export const ADD_CONTACT = 'ADD_CONTACT';
}

export class AddContact implements Action {
  readonly type = CONTACT_ACTION.ADD_CONTACT;

  constructor(public payload: Contact) {

  }
}

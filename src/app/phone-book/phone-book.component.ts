import { Component, OnInit } from '@angular/core';
import {Contact, Contacts} from '../phone-book.model';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {

  public contacts: Contact[] = [];

  searchStr = '';

  search(searchStr) {
    this.searchStr = searchStr;
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contactsPage').subscribe(({contacts}) => {
      this.contacts = contacts;
    });
  }
}

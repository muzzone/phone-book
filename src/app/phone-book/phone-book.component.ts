import { Component, OnInit } from '@angular/core';
import {Contact, Contacts} from '../phone-book.model';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  public contacts: Contact[] = [
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'),
    new Contact('Hugh', 'Laurie', '(925) 462-3345', 'Microsoft', 'HughLaurie@gmail.com', 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg')
  ];

  onAdd(contact: Contact) {
    this.contacts.push(contact);
  }

  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  public contacts = [];
  constructor() { }

  ngOnInit() {
    this.contacts = [
      {
        phone: '+1(925)462-33-4521',
        firstName: 'Hugh',
        lastName: 'Laurie',
        company: 'Microsoft',
        email: 'HughLaurie@gmail.com',
        photo: 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'
      },
      {
        phone: '+1(925)462-33-4521',
        firstName: 'Hugh',
        lastName: 'Laurie',
        company: 'Microsoft',
        email: 'HughLaurie@gmail.com',
        photo: 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'
      },
      {
        phone: '+1(925)462-33-4521',
        firstName: 'Hugh',
        lastName: 'Laurie',
        company: 'Microsoft',
        email: 'HughLaurie@gmail.com',
        photo: 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'
      },
      {
        phone: '+1(925)462-33-4521',
        firstName: 'Hugh',
        lastName: 'Laurie',
        company: 'Microsoft',
        email: 'HughLaurie@gmail.com',
        photo: 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'
      },
      {
        phone: '+1(925)462-33-4521',
        firstName: 'Hugh',
        lastName: 'Laurie',
        company: 'Microsoft',
        email: 'HughLaurie@gmail.com',
        photo: 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'
      },
      {
        phone: '+1(925)462-33-4521',
        firstName: 'Hugh',
        lastName: 'Laurie',
        company: 'Microsoft',
        email: 'HughLaurie@gmail.com',
        photo: 'http://img2.mtime.com/up/1521/1947521/1bd946db-12f8-4427-bb81-51029e6dd730_500.jpg'
      },

    ];
  }
}

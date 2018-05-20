import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog} from '@angular/material';
import { DialogComponent} from '../dialog/dialog.component';
import {Contact} from '../phone-book.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output() addContact = new EventEmitter<Contact>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600',
      data: 'Text'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== 'Cancel') {
        const contact = new Contact(
          result.first_name,
          result.last_name,
          result.phone,
          result.company,
          result.email,
          result.photo
        );

        this.addContact.emit(contact);
      }
    });
  }
}

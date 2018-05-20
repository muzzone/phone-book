import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog} from '@angular/material';
import { DialogComponent} from '../dialog/dialog.component';
import {Contact} from '../phone-book.model';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import {AddContact} from '../redux/contacts.action';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(public dialog: MatDialog, private store: Store<AppState>) { }

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

        this.store.dispatch(new AddContact(contact));
      }
    });
  }
}

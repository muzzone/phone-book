import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  dialogResult = '';

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
      this.dialogResult = result;
    });
  }
}

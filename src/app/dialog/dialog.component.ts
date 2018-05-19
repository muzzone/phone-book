import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    console.log(form);
    console.log(form.value.phone.length);
    if (form.valid) {
      this.dialogRef.close(form.value);
    }
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }
}

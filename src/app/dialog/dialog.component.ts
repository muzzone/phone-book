import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, this.checkForLength]),
      phone: new FormControl('', [Validators.required, this.phoneValidator]),
      first_name: new FormControl('', [Validators.required, this.checkForLength]),
      last_name: new FormControl('', [Validators.required, this.checkForLength]),
      company: new FormControl('', [Validators.required, this.checkForLength]),
      photo: new FormControl('', [Validators.required, this.checkForLength]),
    });
  }

  submitForm() {
    console.log(this.form);
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  checkForLength(control: FormControl) {
    if (control.value.length <= 3) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  phoneValidator(control: FormControl) {
    if (control.value.length <= 9) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }
}

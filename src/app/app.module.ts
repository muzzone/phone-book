import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskModule } from 'ngx-mask';


import { AppComponent } from './app.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { SearchComponent } from './search/search.component';
import { DialogComponent } from './dialog/dialog.component';
import { contactsReducer } from './redux/contacts.reducer';



@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    AddContactComponent,
    SearchComponent,
    DialogComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    StoreModule.forRoot({contactsPage: contactsReducer}),
    NgxMaskModule.forRoot()
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

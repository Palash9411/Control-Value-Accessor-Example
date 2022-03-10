import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from '../components/form-component/form-component';
import { ChooseQuantityComponent } from '../components/form-component/choose-quantity-component/choose-quantity-component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent ,FormComponent ,ChooseQuantityComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

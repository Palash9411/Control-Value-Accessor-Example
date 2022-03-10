import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form',
  template: `<div [formGroup]="form">
              <choose-quantity [increment]="10" formControlName="totalQuantity"></choose-quantity>
            </div>
            <button (click)="logme()">slld</button>`,
  styles: [],
})
export class FormComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      totalQuantity: [
        60,
        [Validators.required, Validators.max(100), Validators.min(10)],
      ],
    });
  }
  logme() {
    console.log(this.form.controls?.['totalQuantity'].value);
  }
  ngOnInit() {}
}

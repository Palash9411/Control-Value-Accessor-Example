import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'choose-quantity',
  template: ` <div class="choose-quantity">
        <button (click)="onRemove()" color="primary">-</button>
        <div class="quantity">{{quantity}}</div>
        <button (click)="onAdd()" color="primary">+</button>
</div>`,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ChooseQuantityComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ChooseQuantityComponent,
    },
  ],
})
export class ChooseQuantityComponent
  implements Validators, ControlValueAccessor, OnInit
{
  quantity = 0;
  onChange = (quantity) => {
    console.log('inside onchange');
  };

  onTouched = () => {
    console.log('inside onTouched');
  };

  touched = false;

  disabled = false;

  @Input()
  increment: number;

  constructor() {}
  ngOnInit() {}
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
  }
  writeValue(quantity: number) {
    console.log(quantity);
    this.quantity = quantity;
  }

  registerOnChange(onChange: any) {
    console.log(onChange);
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    console.log('onTouched');
    this.onTouched = onTouched;
  }
  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity,
        },
      };
    }
  }
}

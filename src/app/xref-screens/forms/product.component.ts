
import { Component, OnInit } from '@angular/core';
import { AbstractControl,  FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import {  ProductbyProc } from '../product';

// ****************custom validator example!***************
// tslint:disable-next-line:max-line-length
// This would be added to FormControls below inplace of validators.required. 'range' would be used in the html productForms.get('contorl')errors.range
// Could be put in its own file and then imported so it can be reused
// Wrapped in ValidatorFn in order to allow more than one parameter to be passed in
function ratingRange(min: number, max: number): ValidatorFn {
 return (c: AbstractControl): {[key: string]: boolean} | null => {
  if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
    return {'range': true};
  }
  return null;
};

}
@Component({
  selector: 'pm-product-form',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productForm: FormGroup;
 product: ProductbyProc;
  constructor(private formbuilder: FormBuilder) { }

  // Look up cross-field validations; Nested Formgroups to compare two fields
  ngOnInit(): void {
    this.productForm = this.formbuilder.group({
      // Can default value, validators, async validation
      memberCode: [null,
        [Validators.required, Validators.minLength(4) ]],
      procedureCode: [null,
       [ Validators.required ]],
      productCode: [null,
        [ Validators.required ]]
    });
    // This could be used to watch what user types and emit events based on that
   //  this.productForm.get('productCode').valueChanges.subscribe(value => console.log(value));
  }
  save() {
    console.log(this.productForm);
    console.log('Saved' + JSON.stringify(this.productForm.value));
  }
}

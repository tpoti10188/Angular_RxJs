import { Component,  OnInit,  NgModule } from '@angular/core';
import { IProduct } from './product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'pm-set-prod-based-on-proc',
  templateUrl: './set-prod-based-on-proc.component.html',
  styleUrls: ['./set-prod-based-on-proc.component.css']
})
export class SetProdBasedOnProcComponent implements OnInit {
  showForm: boolean = false;
  pageTitle: string = 'Product by Procedure';
  errorMessage: string;
  count: number;
  filteredProducts: IProduct[];
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    // if Filter is set the perform filter if empty display all results.
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  products: IProduct[];

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this._productService.getProducts()
          .subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products; // Have to fill data here to ensure it binds properly
          },
          error => this.errorMessage = <any>error, () => console.log('onCompleted'));

    this.pageTitle = 'Set Product by Procedure';
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.procedureCode.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  completed(): void {
    console.log('Executes during completion');
  }
  updateEntry(row: string): void {
    console.log(row + ': Update this entry');
  }
  removeEntry(row: string): void {

    console.log(row + ': Remove this entry');
  }
  addEntry(): void {
    console.log('Adding new entry');
  }
  toggle(): void {
  this.showForm = !this.showForm;
  }
}

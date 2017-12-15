import { ProductService } from './services/product.service';
import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  providers: [ ProductService ]
})
export class AppComponent implements OnInit {
pageTitle: string;
    constructor() { }
    ngOnInit() {
    this.pageTitle = 'Interface Cross-Reference Menu';
    }
}

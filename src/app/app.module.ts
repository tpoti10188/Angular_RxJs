import { ProductbyProc } from './xref-screens/product';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ProductModule } from './products/product.module';
import { HomeComponent } from './home/home.component';
import { SetProdBasedOnProcComponent } from './xref-screens/set-prod-based-on-proc.component';
import { ProductComponent } from './xref-screens/forms/product.component';
import { ProductData } from './xref-screens/product-data';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetProdBasedOnProcComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  //  InMemoryWebApiModule.forRoot(ProductData),
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'xref-screens', component: SetProdBasedOnProcComponent},
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

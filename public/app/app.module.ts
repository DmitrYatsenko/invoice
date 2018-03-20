import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppService} from './app.service';
import { AppComponent } from './app.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { routing } from './app.routes';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { NewItemComponent } from './new-item/new-item.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoicesComponent,
    ProductsComponent,
    CustomersComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app' }), //1. для серерной части
    HttpClientModule,
    FormsModule, 
    routing 
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

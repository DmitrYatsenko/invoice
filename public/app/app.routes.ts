import {Routes, RouterModule} from "@angular/router";
import { InvoicesComponent } from "./invoices/invoices.component";
import { ProductsComponent } from "./products/products.component";
import { CustomersComponent } from "./customers/customers.component";


const APP_ROUTES: Routes = [{
    path: '', redirectTo: 'invoices', pathMatch: 'full' },
  {  path: 'invoices', component: InvoicesComponent},
  { path: 'products', component: ProductsComponent},
  {path: 'customers', component: CustomersComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  beginCreate: boolean = false; 
  invoices: any;
  customers: any;
  customer_id: number;
  discount: number;
  total: number;
  constructor(public appService: AppService){
   
  }
    
   getInvoices(){
      this.appService.getInvoices().subscribe(c => this.invoices = c);  
   }
  ngOnInit(){
   this.getInvoices();
   //this.getCustomers(); 
  }
  createInvoice(){
     this.beginCreate = !this.beginCreate;
  }
  addInvoice(e){
   // e.preventDefault();
    const newInvoice = {
      customer_id: this.customer_id, discount: this.discount ,total: this.total
    };
    this.appService.createInvoice(newInvoice).subscribe(invoices => this.invoices = invoices );
  }
  onSubmit(s: NgForm){
     console.log(s);
    // s.resetForm();
  }
  isNumber(s) {
    return s != null && !isNaN( Number( s ) );
  }
  //getCustomers(){
    //this.appService.getCustomers().subscribe(c => this.customers = c);  
 //}
}

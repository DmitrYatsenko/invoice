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
  invoices: any[];
  customers: any[];
  
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
  addInvoice(invoice){
    this.appService.createInvoice(invoice);
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

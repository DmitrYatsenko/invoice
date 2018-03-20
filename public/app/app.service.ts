import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import  "rxjs/Rx";
import { Observable } from "rxjs/Observable";


@Injectable()
export class AppService {
       
     baseUrl: string = "http://localhost:8000";
    constructor(private http: HttpClient){}
    
   getCustomers() { 
      return this.http.get(`${this.baseUrl}/api/customers`);
      
       
    }
    getInvoices(){
        return this.http.get(`${this.baseUrl}/api/invoices`);
    }
    createInvoice(invoice){
        let headers = new HttpHeaders({"Content-Type":"application/json"});
        
        return this.http.post(`${this.baseUrl}/api/invoices`, invoice, {headers : headers}).catch(e => Observable.throw(e)); 
    }
    getProducts() { 
        return this.http.get(`${this.baseUrl}/api/products`);
        
         
      }
}
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import  "rxjs/Rx";


@Injectable()
export class AppService {
    customers: any;
     baseUrl: string = "http://localhost:8000";
    constructor(private http: HttpClient){}
    
   getCustomers() { 
      return this.http.get(`${this.baseUrl}/api/customers`).map(res => <any[]>res);
      
       
    }
    getInvoices(){
        return this.http.get(`${this.baseUrl}/api/invoices`).map(res => <any[]>res);
    }
    createInvoice(body){
        let httpOptions = new Headers();
        return this.http.post(`${this.baseUrl}/api/invoices`, body); 
    }
    getProducts() { 
        return this.http.get(`${this.baseUrl}/api/products`).map(res => <any[]>res);
        
         
      }
}
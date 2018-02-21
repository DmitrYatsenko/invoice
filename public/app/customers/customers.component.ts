import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {
custs: any[];
  constructor(private appService: AppService) { }

  getCusts(){
    this.appService.getCustomers().subscribe(c => this.custs = c);  
 }
ngOnInit(){
 this.getCusts();
   
}

}

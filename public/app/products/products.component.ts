import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: any;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.appService.getProducts().subscribe(c => this.products = c);  
 }
}

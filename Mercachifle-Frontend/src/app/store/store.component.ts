import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  Product: any = [];

  User: any;

  router: any;

  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadProducts();
  }

  
  loadUser(mail : string){
  
      window.location.href='mailto:' + mail + 'subject= Hola! vi tu producto en mercachifle y me intereso, puedo ofrecerte xxxxx'
 
  }

  // Obtiene la lista de productos
  loadProducts() {
    return this.restApi.getProducts().subscribe((data: {}) => {
      this.Product = data;
    });
  }
}

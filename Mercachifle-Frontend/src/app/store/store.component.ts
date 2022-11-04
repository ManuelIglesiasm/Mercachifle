import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  Product: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadProducts();
  }
  // Obtiene la lista de productos
  loadProducts() {
    return this.restApi.getProducts().subscribe((data: {}) => {
      this.Product = data;
    });
  }
}
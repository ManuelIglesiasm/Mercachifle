import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  Product: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadProducts();
  }
  // Get Products list
  loadProducts() {
    return this.restApi.getProducts().subscribe((data: {}) => {
      this.Product = data;
    });
  }
  // Delete Product
  deleteProduct(id: any) {
    if (window.confirm('Eh wachin, tas seguro?')) {
      this.restApi.deleteProduct(id).subscribe((data) => {
        this.loadProducts();
      });
    }
  }
}
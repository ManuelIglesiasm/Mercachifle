import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  @Input() productDetails = { name: '', detail: '', stock: 0 };
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  addProduct(dataProduct: any) {
    this.restApi.createProduct(this.productDetails).subscribe((data: {}) => {
      this.router.navigate(['/products-list']);
    });
  }
}
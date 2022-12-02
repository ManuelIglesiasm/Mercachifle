import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  productData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }
  ngOnInit() { 
    this.restApi.getProduct(this.id).subscribe((data: {}) => {
      this.productData = data;
    })
  }
  // Actualizar datos del producto
  productUpdate() {
    if(window.confirm('Che, tas seguro?')){
      this.restApi.updateProduct(this.id, this.productData).subscribe(data => {
        this.router.navigate(['/store'])
      })
    }
  }
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-product' },
  { path: 'create-product', component: ProductCreateComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



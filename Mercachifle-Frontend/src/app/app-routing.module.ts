//Importar utilidades
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
//importar modulos de producto
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
//importar modulos de login
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  { path: 'create-product', component: ProductCreateComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "store", component: StoreComponent, pathMatch: "full" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




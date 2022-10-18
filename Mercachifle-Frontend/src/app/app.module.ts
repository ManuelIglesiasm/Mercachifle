//Importar utilidades
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Importar rutas
import { AppRoutingModule } from './app-routing.module';
//Importar componente
import { AppComponent } from './app.component';
//Importar modulos de productos
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
//Importar modulos de login
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
//Importar modulos de home
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

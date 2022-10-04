import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../shared/product';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'api';
  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Obtener lista de empleados
  getProducts(): Observable<Product> {
    return this.http
      .get<Product>(this.apiURL + '/product_get_all')
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API get() method => obtener producto
  getProduct(id: any): Observable<Product> {
    return this.http
      .get<Product>(this.apiURL + '/product_get/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API post() method => Create employee
  createProduct(product: any): Observable<Product> {
    return this.http
      .post<Product>(
        this.apiURL + '/product_create',
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API put() method => Update employee
  
  updateProduct(id: any, product: any): Observable<Product> {
    return this.http
      .put<Product>(
        this.apiURL + '/products/' + id,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API delete() method => Delete employee
  deleteProduct(id: any) {
    return this.http
      .delete<Product>(this.apiURL + '/product_delete/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
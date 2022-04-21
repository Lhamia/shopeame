import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 constructor( private http: HttpClient) { }

 getProducts() {
    return this.http.get ('http://localhost:3000/products')
   
   }

   getProduct(idProducts:any){
    return this.http.get ('http://localhost:3000/products/'+idProducts)

   }

   
   postProduct(createdProduct: any){
     return this.http.post('http://localhost:3000/products', createdProduct).subscribe()
   }

   deleteProduct(createdProduct: any){
    return this.http.delete('http://localhost:3000/products', createdProduct).subscribe()
  }
  }
 

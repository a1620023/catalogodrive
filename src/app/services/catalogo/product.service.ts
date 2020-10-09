import { LaptopDell } from './../../interfaces/catalogo/laptop-dell.producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _url = '/api/productos'

  constructor(
    private http: HttpClient
  ) {
    console.log("Servicio de productos")
  }

  //método para extraer objetos de api rest
  getProducts(){
    let header = new HttpHeaders().set('Type-content', 'application/json')

    return this.http.get<LaptopDell[]>(this._url, {
      headers: header
    });

    // const path = 'http://localhost:5000/api/productos'
    // return this.http.get<LaptopDell[]>(path)
  }
}

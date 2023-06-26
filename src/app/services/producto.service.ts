import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:4000/api/productos';

  constructor(private http: HttpClient) {}
    getProductos(): Observable <any> {
      return this.http.get(this.url);
    }


}



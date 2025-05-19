import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../models/product.dto';
import { environment } from '../../../environments/environment';


const url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCProduts(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(url + 'products');
  }
}

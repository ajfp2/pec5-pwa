import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from '../models/category.dto';
import { environment } from '../../../environments/environment';

const url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  
  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(url + 'categories');
  }
}

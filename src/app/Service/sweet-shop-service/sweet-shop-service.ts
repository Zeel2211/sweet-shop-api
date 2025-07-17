import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface sweet {
  id?: number,
  name: string,
  category: string,
  price: number,
  quantity: number,
  image?: string
}

@Injectable({
  providedIn: 'root'
})

export class SweetShopService {

  baseUrl = "http://127.0.0.1:5000/sweets"
  constructor(private http: HttpClient) { }

  getSweets(name?: string, category?: string, sortBy?: string, order: string = 'asc'): Observable<sweet[]> {
    let params = new HttpParams();
    if (name) params = params.set('name', name);
    if (category) params = params.set('category', category);
    if (sortBy) params = params.set('sort_by', sortBy).set('order', order);

    return this.http.get<sweet[]>(this.baseUrl, { params });
  }

  addSweet(sweet:sweet):Observable<any>{
    return this.http.post(this.baseUrl,sweet)
  }

  updateSweet(id:number,sweet:sweet): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,sweet)
  }

  deleteSweet(id:number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
  purchaseSweet(id:number,quantity:number):Observable<any>{
    return this.http.post(`${this.baseUrl}/${id}/purchase`,{quantity})
  }

  restockSweet(id:number,quantity:number):Observable<any>{
    return this.http.post(`${this.baseUrl}/${id}/restock`,{quantity})
  }

}

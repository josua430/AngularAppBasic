import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPublicacion } from './publicacion';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    console.log('Servicio trabajando');
  }

  getdata(){
    return this.http.get<IPublicacion[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

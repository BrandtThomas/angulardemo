import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'https://api.api-onepiece.com/episodes';


  getAll(): Observable<any[]> {
    return this._http.get<any[]>(`${this.apiUrl}`);
  }

}

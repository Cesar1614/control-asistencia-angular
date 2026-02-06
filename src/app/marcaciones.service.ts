import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcacionesService {

  private apiUrl = 'http://localhost:3000/marcaciones';


  constructor(private http: HttpClient) { }

  getMarcaciones(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addMarcacion(marcacion: any): Observable<any> {
    return this.http.post(this.apiUrl, marcacion);
  }
}

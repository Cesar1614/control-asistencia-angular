import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private apiUrl = 'http://localhost:3000/colaboradores';


  constructor(private http: HttpClient) { }

  getColaboradores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addColaborador(colaborador: any): Observable<any> {
    return this.http.post(this.apiUrl, colaborador);
  }

  updateColaborador(cip: string, colaborador: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${cip}`, colaborador);
  }

  deleteColaborador(cip: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${cip}`);
  }
}

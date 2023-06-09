
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Negocio } from '../interface/negocio';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {
  //private apiUrl = 'https://localhost:7126/api/negocio';
  private apiUrl = `${environment.baseUrl}/negocio`; 

  constructor(private http: HttpClient) {}

  getAllNegocios(): Observable<Negocio[]> {
    return this.http.get<Negocio[]>(`${this.apiUrl}/getall`);
  }

  getNegocioById(negocioId: number): Observable<Negocio> {
    return this.http.get<Negocio>(`${this.apiUrl}/${negocioId}`);
  }

  getNegociosByFacultadId(facultadId: number): Observable<Negocio[]> {
    return this.http.get<Negocio[]>(`${this.apiUrl}/facultad/${facultadId}`);
  }

  addNegocio(negocio: Negocio): Observable<Negocio> {
    return this.http.post<Negocio>(`${this.apiUrl}/create`, negocio);
  }

  updateNegocio(id: number, negocio: Negocio): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, negocio);
  }

  deleteNegocio(negocioId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${negocioId}`);
  }
}

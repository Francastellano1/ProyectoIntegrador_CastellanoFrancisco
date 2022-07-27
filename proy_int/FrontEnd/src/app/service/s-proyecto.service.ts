import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {

  proURL = 'http://localhost:8080/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proURL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proURL + `detail/${id}`);
  } 

  public save(experiencia: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.proURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.proURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proURL + `delete/${id}`);
  }
}

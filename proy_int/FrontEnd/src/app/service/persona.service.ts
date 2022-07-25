import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  /* Llamo a estos archivos del back end desde el front creando una variable URL */
  URL = 'http://localhost:8080/personas/';

  /* Creame una variable private http que responda al http client */
  constructor(private http: HttpClient) { }

  /* el observable son para peticiones asincronas, voy a ir creando las concatenaciones de la URL */
  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
  
}

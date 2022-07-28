import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SSkillService {
  skiURL = 'http://localhost:8080/skill/';

  constructor (private http: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skiURL+ 'lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.http.get<Skill>(this.skiURL+ `detail/${id}`);
  }

  public save(ski: Skill): Observable<any> {
    return this.http.post<any>(this.skiURL+ 'create', ski);
  }

  public update(id: number, ski: Skill): Observable<any> {
    return this.http.put<any>(this.skiURL+ `update/${id}`, ski);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.skiURL+ `delete/${id}`);
  }
}



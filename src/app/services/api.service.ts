import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environemnt } from '../../environements/environement';
import { ReponseProfesseur } from '../models/professeur.model';
import { ReponseProgrammation } from '../models/programmation.model';
import { ReponseMatiere } from '../models/matiere.model';
import { ReponseClasse } from '../models/classe.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  saveProf(request: any): Observable<ReponseProfesseur> {
    return this.http.post<ReponseProfesseur>(
      `${environemnt.apiUrl}/professeurs`,
      request
    );
  }

  getProfs(): Observable<ReponseProfesseur> {
    return this.http.get<ReponseProfesseur>(
      `${environemnt.apiUrl}/professeurs`
    );
  }

  /*  Programme */

  getProgramme(): Observable<ReponseProgrammation> {
    return this.http.get<ReponseProgrammation>(
      `${environemnt.apiUrl}/programmations`
    );
  }

  saveProgramme(request: any): Observable<ReponseProgrammation> {
    return this.http.post<ReponseProgrammation>(
      `${environemnt.apiUrl}/programmations`,
      request
    );
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${environemnt.apiUrl}/programmations/${id}`);
  }

  updateProgramme(request: any, id: any): Observable<any> {
    return this.http.put<any>(
      `${environemnt.apiUrl}/programmations/${id}`,
      request
    );
  }

  paginateProgramme(request: any): Observable<ReponseProgrammation> {
    return this.http.get<ReponseProgrammation>(`${request}`);
  }

  /* matiere */

  saveMatiere(request: any): Observable<ReponseMatiere> {
    return this.http.post<ReponseMatiere>(
      `${environemnt.apiUrl}/matieres`,
      request
    );
  }

  getMatieres(): Observable<ReponseMatiere> {
    return this.http.get<ReponseMatiere>(`${environemnt.apiUrl}/matieres`);
  }

  /*
  saveClasse(request: any): Observable<ReponseClasse> {
    return this.http.post<ReponseClasse>(
      `${environemnt.apiUrl}/classes`,
      request
    );
  }
  */
  getClasse(): Observable<ReponseClasse> {
    return this.http.get<ReponseClasse>(`${environemnt.apiUrl}/classes`);
  }
}

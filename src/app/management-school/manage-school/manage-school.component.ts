import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Matiere } from '../../models/matiere.model';
import {
  Programmation,
  ReponseProgrammation,
} from '../../models/programmation.model';
import { Classe } from '../../models/classe.model';
import { Professeur } from '../../models/professeur.model';

@Component({
  selector: 'app-manage-school',
  templateUrl: './manage-school.component.html',
  styleUrl: './manage-school.component.css',
})
export class ManageSchoolComponent implements OnInit {
  data!: Programmation[];
  matiereList!: Matiere[];
  classeList!: Classe[];
  professeurList!: Professeur[];
  responseDatas!: ReponseProgrammation;

  public constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getProgrammation();
    this.getClasses();
    this.getProfesseurs();
    this.getMatieres();
  }

  getProgrammation() {
    this.apiService.getProgramme().subscribe(
      (Response) => {
        if (Response.statut === 200) {
          this.data = Response.data.data;
          this.responseDatas = Response;
        }
      },
      (error) => console.log('error')
    );
  }

  refreshProgrammeList() {
    this.getProgrammation();
  }

  refresListOption() {
    this.getMatieres();
    this.getProfesseurs();
    this.getClasses();
  }

  getClasses() {
    this.apiService.getClasse().subscribe(
      (Response) => {
        if (Response.statut === 200) {
          this.classeList = Response.data;
        }
      },
      (error) => console.log('error')
    );
  }

  getMatieres() {
    this.apiService.getMatieres().subscribe(
      (Response) => {
        if (Response.statut === 200) {
          this.matiereList = Response.data;
          console.log(Response);
        }
      },
      (error) => console.log('error')
    );
  }

  getProfesseurs() {
    this.apiService.getProfs().subscribe(
      (Response) => {
        if (Response.statut === 200) {
          this.professeurList = Response.data;
          console.log(Response);
        }
      },
      (error) => console.log('error')
    );
  }
}

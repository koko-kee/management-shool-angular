import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Classe,
  Matiere,
  Professeur,
  Programmation,
  ReponseProgrammation,
} from '../../models/programmation.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-programation-form',
  templateUrl: './programation-form.component.html',
  styleUrl: './programation-form.component.css',
})
export class ProgramationFormComponent implements OnInit {
  programmeEdit!: Programmation;
  @Input()
  programmations: any;
  @Input()
  matieres!: Matiere[];
  @Input()
  classes!: Classe[];
  @Input()
  professeurs!: Professeur[];
  @Input()
  responseData!: ReponseProgrammation;

  @Output() eventToCreateProgram = new EventEmitter();
  @Output() eventToDeleteProgram = new EventEmitter();
  @Output() eventToUpdateProgram = new EventEmitter();

  programmeForm: FormGroup = new FormGroup({
    matiere_id: new FormControl(''),
    classe_id: new FormControl(''),
    professeur_id: new FormControl(''),
  });
  response: any;

  public constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log(this.programmations);
  }

  createProgramme() {
    if (this.programmeEdit != undefined) {
      this.apiService
        .updateProgramme(this.programmeForm.value, this.programmeEdit.id)
        .subscribe((response) => {
          console.log(response);
          this.eventToUpdateProgram.emit();
          this.programmeForm.reset();
        });
    } else {
      this.apiService
        .saveProgramme(this.programmeForm.value)
        .subscribe((response) => {
          if (response.statut === 201) {
            console.log(response.data);
            this.programmeForm.reset();
            this.eventToCreateProgram.emit();
          }
        });
    }
  }

  remove(id: number) {
    this.apiService.delete(id).subscribe((response) => {
      this.eventToDeleteProgram.emit();
      console.log(response);
    });
  }

  edit(programmeEdit: Programmation) {
    this.programmeEdit = programmeEdit;
    this.programmeForm.patchValue(this.programmeEdit);
  }

  paginate(link: any) {
    this.apiService.paginateProgramme(link).subscribe((response) => {
      this.programmations = response.data.data;
      this.responseData = response;
    });
  }
}

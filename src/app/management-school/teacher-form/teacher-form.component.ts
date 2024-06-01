import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css',
})
export class TeacherFormComponent {
  teachForm: FormGroup = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    specialite: new FormControl(''),
  });

  @Output() eventCreateTeacher: EventEmitter<null> = new EventEmitter();

  public constructor(private apiService: ApiService) {}

  createNewProf() {
    this.apiService.saveProf(this.teachForm.value).subscribe(
      (response) => {
        if (response.statut === 201) {
          this.eventCreateTeacher.emit();
          this.teachForm.reset();
        }
      },
      (error) => {
        console.log("erreur lors de l'insertions");
      }
    );
  }
}

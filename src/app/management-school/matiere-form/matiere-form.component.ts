import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-matiere-form',
  templateUrl: './matiere-form.component.html',
  styleUrl: './matiere-form.component.css',
})
export class MatiereFormComponent {
  formMatiere: FormGroup = new FormGroup({
    nom: new FormControl(''),
  });

  @Output() eventCreateMatiere: EventEmitter<null> = new EventEmitter();

  public constructor(private apiService: ApiService) {}

  createMatiere() {
    this.apiService.saveMatiere(this.formMatiere.value).subscribe(
      (response) => {
        if (response.statut === 201) {
          this.eventCreateMatiere.emit();
          this.formMatiere.reset();
        }
      },
      (error) => console.log("erreur lors de l'insertion")
    );
  }
}

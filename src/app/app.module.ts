import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageSchoolComponent } from './management-school/manage-school/manage-school.component';
import { MatiereFormComponent } from './management-school/matiere-form/matiere-form.component';
import { ProgramationFormComponent } from './management-school/programation-form/programation-form.component';
import { TeacherFormComponent } from './management-school/teacher-form/teacher-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RemoveSpecialCharactersPipe } from './remove-special-characters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ManageSchoolComponent,
    MatiereFormComponent,
    ProgramationFormComponent,
    TeacherFormComponent,
    RemoveSpecialCharactersPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

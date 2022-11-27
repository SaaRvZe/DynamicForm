import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './Components/questionnaire/questionnaire.component';

const routes: Routes = [
  {path: 'questionnaire/:id', component: QuestionnaireComponent},
  {path: '**', redirectTo: 'questionnaire/1'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

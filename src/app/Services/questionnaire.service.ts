import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuestionBase } from '../Model/question';
import { Questionnaire } from '../Model/questionnaire';
import { QuestionControlService } from './question-control.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private httpClient: HttpClient, private qcs: QuestionControlService,) { }

  getQuestionnaire(id = 1): Observable<Questionnaire> {
   return this.httpClient.get<Questionnaire>(`${environment.serverApi}/questionnaires/${id}`)
   .pipe(map(q => {
    q.form =  this.qcs.toFormGroup(q?.questions as QuestionBase<string>[]);
    return q;
   }), catchError((err)=> {
    if(err.status === 404) {
      console.warn('Questionnaire not found please try another one or check the config file');
    } else {
      console.warn('Something went wrong please try again');   
    }
  
    return throwError(() => new Error(err));
   }));
   
  }
}

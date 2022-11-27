import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Questionnaire } from 'src/app/Model/questionnaire';
import { QuestionnaireService } from 'src/app/Services/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questionnaire$: Observable<Questionnaire>;
  constructor(private questionnaireService: QuestionnaireService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.getQuestionnaire( id ? +id : undefined);
    });    
  }

  onSubmit(form: FormGroup): void {
    console.log(form.getRawValue());
    
  }

  getQuestionnaire(id = 1): void {
    this.questionnaire$ = this.questionnaireService.getQuestionnaire(id);
  }
}


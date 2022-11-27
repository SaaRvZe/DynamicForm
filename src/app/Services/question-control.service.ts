import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { QuestionBase } from '../Model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  formChanged$: Subject<null> = new Subject<null>();

  constructor() { }

  
  toFormGroup(questions: QuestionBase<string>[]): FormGroup {
    this.formChanged$.next(null);
    const group: any = {};
    questions.sort((a, b) => a.order - b.order);
    questions.forEach(question => {
      group[question.key] =  new FormControl({value: question.value || '', disabled: question.conditional},
                                             question.required ? Validators.required : {});
      
      if(question.options?.filter(q => q.custom)) {
        group[question.key + "Custom"] = new FormControl({value: question.value || '', disabled: question.conditional});
      }                                           
    });

    let form = new FormGroup(group);
    this.addFormListeners(questions, form);
    return form;
  }


  addFormListeners(questions:  QuestionBase<string>[], form: FormGroup): void {
      
    // get all questions with a value that is a condition to another question
    let cQuestions = questions?.filter(q => q.conditionalToQ?.qId); 
    // Add listener to all conditional questions
    cQuestions?.forEach(cq => {
      let cControlKey = questions?.find(q => q.id === cq.conditionalToQ?.qId)?.key ?? '';
      let cControl = form?.controls[cControlKey];
      // If the conditioned question exist -> add listener to disable/enable when necessary;
      if(cControl) {
        form.controls[cq.key].valueChanges.pipe(takeUntil(this.formChanged$)).subscribe(v => {
          v === cq.conditionalToQ?.requiredValue ? cControl.enable() : cControl.disable();
        })
      }
    })
  }
}

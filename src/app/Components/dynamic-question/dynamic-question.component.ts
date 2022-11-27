
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EQuestionType } from 'src/app/Enums/question-type-enum';
import { QuestionBase } from 'src/app/Model/question';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicQuestionComponent implements OnInit {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  eQuestionType = EQuestionType;
  constructor() { }

  ngOnInit(): void {
  }

}

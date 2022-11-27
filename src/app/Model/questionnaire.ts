import { FormGroup } from "@angular/forms";
import { QuestionBase } from "./question";

export class Questionnaire {
    id: number;
    title: string;
    subtitle: string;
    questions: QuestionBase<any>[];
    form: FormGroup;

}
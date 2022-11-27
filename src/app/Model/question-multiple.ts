import { EQuestionType } from "../Enums/question-type-enum";
import { QuestionBase } from "./question";

export class MultiplecdQuestion extends QuestionBase<string> {
    override controlType: EQuestionType = EQuestionType.MultipleChoice;
}
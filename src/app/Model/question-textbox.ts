import { EQuestionType } from "../Enums/question-type-enum";
import { QuestionBase } from "./question";

export class TextboxQuestion extends QuestionBase<string> {
    override controlType: EQuestionType = EQuestionType.Free;
}
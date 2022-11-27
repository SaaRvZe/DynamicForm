import { EQuestionType } from "../Enums/question-type-enum";
import {AnswerOption} from "./answer-option"

// export class QuestionBase<T> {
//     id: number;
//     required: boolean;
//     text: string;
//     questionType: EQuestionType;
//     answerOptions: AnswerOption[];
// }

export class QuestionBase<T> {
    id: number;
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: EQuestionType;
    type: string;
    options: {key: string, value: string, custom?: boolean}[];
    conditional: boolean;
    conditionalToQ: {qId: number, requiredValue: string} | undefined;
  
    constructor(options: {
        id? : number;
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: EQuestionType;
        type?: string;
        options?: {key: string, value: string, custom?: boolean}[];
        conditional?: boolean;
        conditionalToQ?: {qId: number, requiredValue: string};
      } = {}) {
      this.id = options.id || 0;
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || EQuestionType.None;
      this.type = options.type || '';
      this.options = options.options || [];
      this.conditional = options.conditional || false;
      this.conditionalToQ = options.conditionalToQ;  
    }
  }
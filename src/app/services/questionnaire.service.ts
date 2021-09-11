import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionnaire } from '../models/question.model';
import { questions } from '../questionnaire/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  constructor() {}

  getQuestions(): Observable<Questionnaire> {
    return of(questions.questionnaire);
  }
}

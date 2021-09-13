import { TestBed } from '@angular/core/testing';
import { Questionnaire } from '../models/question.model';

import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireService', () => {
  let service: QuestionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return questions', () => {
    service.getQuestions().subscribe((response: Questionnaire) => {
      expect(response !== null).toBeTruthy();
    });
  });

  it('should return questions of type questionnaire model', () => {
    service.getQuestions().subscribe((response: Questionnaire) => {
      console.log(typeof response);
      expect(typeof response === 'object').toBeTruthy();
    });
  });
});

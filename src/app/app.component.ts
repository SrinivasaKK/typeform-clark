import { Component } from '@angular/core';
import { Questionnaire } from './models/question.model';
import { QuestionnaireService } from './services/questionnaire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Typeform-clone';
  startClicked = false;
  questions = [];
  constructor(private questionnaireService: QuestionnaireService) {}

  showQuestions() {
    this.startClicked = true;
    this.questionnaireService
      .getQuestions()
      .subscribe((response: Questionnaire) => {
        console.log(response.questions);
        this.questions = response.questions;
      });
  }
}

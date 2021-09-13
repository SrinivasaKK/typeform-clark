import { Component, ElementRef } from '@angular/core';
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
  end = false;
  constructor(
    private questionnaireService: QuestionnaireService,
    private el: ElementRef
  ) {}

  showQuestions() {
    this.startClicked = true;
    this.questionnaireService
      .getQuestions()
      .subscribe((response: Questionnaire) => {
        this.questions = response.questions;
      });
  }

  ngOnInit() {
    this.el.nativeElement.addEventListener('scroll', ($event) => {
      this.onScroll();
    });
  }

  nextQuestion(event) {
    let node = event.destination
      ? document.getElementById(event.destination)
      : document.getElementById(event.question.identifier);

    this.el.nativeElement.scrollTo({
      left: 0,
      top: event.destination ? node.offsetTop : node.offsetTop + 500,
    });

    if (event.destination) {
      node.querySelector('input').focus();
    } else {
      node?.nextElementSibling?.querySelector('input').focus();
      this.end = true;
    }
  }

  onScroll() {
    let questions = this.el.nativeElement.querySelectorAll('.main-wrapper');
    //we'll do some stuff here when the window is scrolled
    questions.forEach((question) => {
      var etop = question.getBoundingClientRect().top;
      var diff = etop - window.pageYOffset;
      if (diff < 300) {
        this.reinitState(question, questions);
      }
    });
  }

  /**
   * Re-initiate focus on scroll
   * @param question
   * @param elements
   */
  reinitState(question, questions) {
    questions.forEach((elem) => {
      elem.classList.remove('focus');
    });
    question.classList.add('focus');
  }
}

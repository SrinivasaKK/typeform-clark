import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Questions } from './../../models/question.model';

@Component({
  selector: 'app-free-text',
  templateUrl: './free-text.component.html',
  styleUrls: ['./free-text.component.scss'],
})
export class FreeTextComponent implements OnInit {
  @Input()
  question: Questions;

  @Output()
  moveNext = new EventEmitter<any>();

  value = '';
  constructor() {}

  ngOnInit() {}

  onPressEnter(event) {
    if (event.keyCode == 13) {
      this.nextQuestion();
    }
  }

  nextQuestion() {
    this.moveNext.emit({
      question: this.question,
      destination: '',
    });
  }
}

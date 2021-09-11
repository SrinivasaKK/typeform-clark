import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Questions } from './../../models/question.model';

@Component({
  selector: 'app-free-text',
  templateUrl: './free-text.component.html',
  styleUrls: ['./free-text.component.css'],
})
export class FreeTextComponent implements OnInit {
  @Input()
  question: Questions;

  @Output()
  scrollNext = new EventEmitter<any>();

  answer = '';
  constructor() {}

  ngOnInit() {}

  /**
   * On Enter key press
   * @param event
   */
  onPressEnter(event) {
    if (event.keyCode == 13) {
      this.gotoNext();
    }
  }

  /**
   * Go to next
   */
  gotoNext() {
    this.scrollNext.emit({
      question: this.question,
      destination: '',
    });
  }
}

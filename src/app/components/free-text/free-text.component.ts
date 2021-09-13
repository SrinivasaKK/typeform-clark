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

  value = '';
  constructor() {}

  ngOnInit() {}

  onPressEnter(event) {
    if (event.keyCode == 13) {
      this.gotoNext();
    }
  }

  gotoNext() {
    this.scrollNext.emit({
      question: this.question,
      destination: '',
    });
  }
}

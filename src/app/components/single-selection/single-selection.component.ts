import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Questions } from 'src/app/models/question.model';

@Component({
  selector: 'app-single-selection',
  templateUrl: './single-selection.component.html',
  styleUrls: ['./single-selection.component.scss'],
})
export class SingleSelectionComponent implements OnInit {
  @Input()
  question: Questions;

  @Output()
  scrollNext = new EventEmitter<any>();

  /**
   * Selected Option
   */
  selectedOption: null;

  constructor() {}

  ngOnInit() {}

  /**
   * Go to next Question
   */
  gotoNext() {
    const jumps = this.question.jumps;
    let destination;

    if (jumps.length > 0) {
      jumps.forEach((jump) => {
        if (jump.conditions[0].value === this.selectedOption) {
          destination = jump.destination.id;
        }
      });
    }
    this.scrollNext.emit({
      question: this.question,
      destination: destination || '',
    });
  }
}

import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Questions } from 'src/app/models/question.model';

@Component({
  selector: 'app-multi-selection',
  templateUrl: './multi-selection.component.html',
  styleUrls: ['./multi-selection.component.scss'],
})
export class MultiSelectionComponent implements OnInit {
  @Input()
  question: Questions;

  @Output()
  moveNext = new EventEmitter<any>();

  /**
   * Selected Options
   */
  selectedOptions: Questions[] = [];

  constructor() {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.nextQuestion();
    }
  }

  ngOnInit() {}

  /**
   * Add to list os selected option
   * @param option
   */
  addToSelectedOptions(option) {
    if (this.selectedOptions.indexOf(option) == -1) {
      this.selectedOptions.push(option);
    }
  }

  /**
   * Remove Selected Option
   * @param option
   */
  removeOption(option) {
    this.selectedOptions = this.selectedOptions.filter((item) => {
      return option !== item;
    });
  }

  /**
   * Go to next question
   */
  nextQuestion() {
    this.moveNext.emit({
      question: this.question,
      destination: '',
    });
  }
}

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
  selectedOptions = [];

  constructor() {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.keyCode === 13) {
      this.nextQuestion();
    }
  }

  ngOnInit() {}

  addToSelectedOptions(option, choice) {
    if (option.checked) {
      this.selectedOptions.push(choice.value);
    } else {
      this.selectedOptions = this.selectedOptions.filter((item) => {
        return choice.value !== item;
      });
    }
  }

  nextQuestion() {
    this.moveNext.emit({
      question: this.question,
      destination: '',
    });
  }
}

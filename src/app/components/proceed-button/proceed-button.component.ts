import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { STATIC_TEXTS } from './../../constant';

@Component({
  selector: 'app-proceed-button',
  templateUrl: './proceed-button.component.html',
  styleUrls: ['./proceed-button.component.scss'],
})
export class ProceedButtonComponent implements OnInit {
  @Output()
  next = new EventEmitter<any>();

  classList: any;
  TEXTS = STATIC_TEXTS;

  constructor() {}

  ngOnInit() {
    const cartButtons = document.querySelectorAll('.submit-button');

    cartButtons.forEach((button) => {
      button.addEventListener('click', this.cartClick);
    });
  }

  cartClick() {
    let button = this;
    button.classList.add('clicked');
  }

  nextQuestion() {
    setTimeout(() => {
      this.next.emit();
    }, 2000);
  }
}

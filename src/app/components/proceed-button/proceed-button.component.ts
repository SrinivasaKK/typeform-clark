import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-proceed-button',
  templateUrl: './proceed-button.component.html',
  styleUrls: ['./proceed-button.component.scss'],
})
export class ProceedButtonComponent implements OnInit {
  @Output()
  next = new EventEmitter<any>();
  classList: any;

  constructor() {}

  ngOnInit() {
    const cartButtons = document.querySelectorAll('.cart-button');

    cartButtons.forEach((button) => {
      button.addEventListener('click', this.cartClick);
    });
  }

  cartClick() {
    let button = this;
    button.classList.add('clicked');
  }

  gotoNext() {
    setTimeout(() => {
      this.next.emit();
    }, 2000);
  }
}

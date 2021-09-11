import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  @Output()
  clickStart = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  emitStartButtonClickEvent() {
    this.clickStart.emit();
    console.log('here');
  }

  ngAfterViewInit() {
    // https://stackoverflow.com/questions/38223945/window-removeeventlistener-with-a-named-function-isnt-working
    // need to same reference in order to remove the event listener
    this.enterKeyEvent = this.enterKeyEvent.bind(this);

    // add event listener to enter key to trigger the questionnaire
    document.addEventListener('keyup', this.enterKeyEvent);
  }

  enterKeyEvent() {
    this.emitStartButtonClickEvent();
    this.removeEventListener();
  }

  removeEventListener() {
    document.removeEventListener('keyup', this.enterKeyEvent);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @Output()
  clickStart = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  emitStartButtonClickEvent() {
    this.clickStart.emit();
  }

  ngAfterViewInit() {
    // add event listener to enter key to trigger the questionnaire
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 13 || event.which === 13)
        this.emitStartButtonClickEvent();
    });
  }
}

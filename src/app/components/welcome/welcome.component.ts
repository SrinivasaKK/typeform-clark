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
  }
}

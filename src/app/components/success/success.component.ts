import { Component, OnInit } from '@angular/core';
import { STATIC_TEXTS } from './../../constant';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  TEXTS = STATIC_TEXTS;
  constructor() {}

  ngOnInit(): void {}

  reload() {
    location.reload();
  }
}

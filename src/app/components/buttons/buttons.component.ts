import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  buttonLabel: String = 'Click me!';
  checkboxLabel: String = 'Check me!';

  constructor() {}

  ngOnInit(): void {}
}

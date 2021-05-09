import { Input, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Init');
    let dependentes = '0';
  }
}

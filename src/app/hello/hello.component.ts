import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{ name }}!</h1>`,
  templateUrl: './hello.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class HelloComponent {
  @Input() name: string;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <p>
      Welcome!
    </p>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// the default route should render this template.
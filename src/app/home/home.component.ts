import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const options = {
      strings: ['Hello,'],
      typeSpeed: 200,
      showCursor: false,
    };

    const typed = new Typed('.hello-text', options);
  }
}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kailas';

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event): void {
    window.scrollTo(0, 0);
  }
}

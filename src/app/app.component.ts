import {Component} from '@angular/core';
import {NoteSectionComponent} from './note-section/note-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notes: NoteSectionComponent[];

  constructor() {

    this.notes = [
      new NoteSectionComponent(),
      new NoteSectionComponent(),
      new NoteSectionComponent(),
      new NoteSectionComponent(),
      new NoteSectionComponent(),
      new NoteSectionComponent(),
      new NoteSectionComponent(),
      new NoteSectionComponent()
  ]
    ;

  }

}

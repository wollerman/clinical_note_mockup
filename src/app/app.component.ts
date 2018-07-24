import {Component} from '@angular/core';
import {NoteSection, NoteSectionComponent} from './note-section/note-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  presentIllnessNotes: NoteSection[];
  medicalHistoryNotes: NoteSection[];
  familyHistoryNotes: NoteSection[];
  socialHistoryNotes: NoteSection[];

  constructor() {

    this.presentIllnessNotes = [
      new NoteSection('Patient reported pain in right hand')
    ];

    this.medicalHistoryNotes = [
      new NoteSection('test1', 'Medical History'),
    ];

    this.familyHistoryNotes = [
      new NoteSection('test family history note. patient shows signs of x.')
    ];

    this.socialHistoryNotes = [
      new NoteSection('social history note 1')
    ];

  }

  add(noteList: any[]) {
    noteList.push(new NoteSection());
  }

  remove(noteSection: NoteSection, noteList: any[]) {
    noteList.splice(noteList.indexOf(noteSection), 1);
  }

}

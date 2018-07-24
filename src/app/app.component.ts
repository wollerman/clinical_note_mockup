import {Component, TemplateRef} from '@angular/core';
import {NoteSection} from './note-section/note-section.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Problem} from './problem-list/problem-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  focused: NoteSection;
  focusedList: any[];

  presentIllnessNotes: NoteSection[];
  medicalHistoryNotes: NoteSection[];
  familyHistoryNotes: NoteSection[];
  socialHistoryNotes: NoteSection[];

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {

    this.presentIllnessNotes = [
      new NoteSection('Patient reported pain in right hand')
    ];

    this.medicalHistoryNotes = [
      new NoteSection('Patient reported difficulty swallowing due to Achalasia.', 'Medical History'),
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

  public openModal(noteSection: NoteSection, noteList: any[], template: TemplateRef<any>) {
    this.focused = noteSection;
    this.focusedList = noteList;
    this.modalRef = this.modalService.show(template);
  }


  remove() {
    this.focusedList.splice(this.focusedList.indexOf(this.focused), 1);
    this.modalRef.hide();
  }

  dismiss() {
    this.focused = undefined;
    this.focusedList = undefined;
    this.modalRef.hide();
  }

  connect() {

  }


}

import {Component, TemplateRef} from '@angular/core';
import {NoteSection} from './note-section/note-section.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Allergy, ChecklistItem, Medication} from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  focused: NoteSection | Allergy | Medication;
  focusedList: any[];

  presentIllnessNotes: NoteSection[] = [];
  medicalHistoryNotes: NoteSection[] = [];
  familyHistoryNotes: NoteSection[] = [];
  socialHistoryNotes: NoteSection[] = [];
  reviewOfSystemNotes: NoteSection[] = [];
  physicalExamNotes: NoteSection[] = [];
  allergyList: Allergy[] = [];
  newAllergy: Allergy;
  medicationList: Medication[] = [];
  newMed: Medication;
  checklist: ChecklistItem[] = [];
  showAll = true;

  assessmentSize = 35;
  checklistSize = 15;

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

    this.checklist = [
      new ChecklistItem('Record patient\'s weight'),
      new ChecklistItem('Check BP'),
      new ChecklistItem('Evaluate CVD'),
      new ChecklistItem('Reconcile Medications'),
    ];

  }

  add(noteList: any[]) {
    noteList.push(new NoteSection());
  }

  openAddMed(template) {
    this.newMed = new Medication();
    this.modalRef = this.modalService.show(template);
  }

  addMed() {
    this.medicationList.push(this.newMed);
    this.modalRef.hide();
  }

  openAddAllergy(template) {
    this.newAllergy = new Allergy();
    this.modalRef = this.modalService.show(template);
  }

  addAllergy() {
    this.allergyList.push(this.newAllergy);
    this.modalRef.hide();
  }

  public openModal(focused: NoteSection | Allergy | Medication, noteList: any[], template: TemplateRef<any>) {
    this.focused = focused;
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


  toggleChecklist() {
    if (this.checklistSize === 15) {
      this.checklistSize = 0;
      this.assessmentSize = 50;
    } else {
      this.checklistSize = 15;
      this.assessmentSize = 35;
    }
  }


}

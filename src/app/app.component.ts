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

  assessmentSize = 40;
  checklistSize = 15;
  hidden = {
    hp: false,
    mh: false,
    fh: true,
    sh: true,
    ros: false,
    pe: false,
    aller: false,
    meds: false,
    all: false
  };

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {

    this.presentIllnessNotes = [
      new NoteSection('HPI', 'Patient reported pain in right hand.')
    ];

    this.medicalHistoryNotes = [
      new NoteSection('Medical History', 'Patient reported difficulty swallowing due to Achalasia.'),
    ];

    this.familyHistoryNotes = [
      new NoteSection('Family History')
    ];

    this.socialHistoryNotes = [
      new NoteSection('SoH', 'Patient does not smoke. Patient drinks alcohol 3 x week.')
    ];

    this.checklist = [
      new ChecklistItem('Record patient\'s weight'),
      new ChecklistItem('Check BP'),
      new ChecklistItem('Evaluate CVD'),
      new ChecklistItem('Reconcile Medications'),
    ];

    this.reviewOfSystemNotes = [
      new NoteSection('RoS')
    ];

    this.physicalExamNotes = [
      new NoteSection('PE')
    ];

  }

  add(noteList: any[]) {
    noteList.push(new NoteSection('new'));
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
      this.assessmentSize = 55;
    } else {
      this.checklistSize = 15;
      this.assessmentSize = 40;
    }
  }

  toggleSection(section) {
    this.hidden[section] = !this.hidden[section];
  }

  toggleAllSections() {
    Object.keys(this.hidden).forEach(k => this.hidden[k] = this.hidden.all);
    this.hidden.all = !this.hidden.all;
  }


}

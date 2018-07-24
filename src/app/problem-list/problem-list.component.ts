import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NoteSection} from '../note-section/note-section.component';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problemStatusOptions = Object.keys(ProblemStatus);

  problemList: Problem[];
  public modalRef: BsModalRef;
  public newProblemDescription: string;
  public newProblemicd10: string;
  public newProblemStatus: string;
  public newProblemDiagnosed: string;

  public focused: Problem;

  constructor(private modalService: BsModalService) {
    this.problemList = [
      new Problem(
        'Achalasia of esophagus (disorder)',
        'K22.0',
        ProblemStatus.ACTIVE,
        '2018-19-06')
    ];

  }

  ngOnInit() {
    this.newProblemStatus = ProblemStatus.ACTIVE;
    this.newProblemDiagnosed = new Date().toJSON().slice(0, 10);
  }

  public openModal(template: TemplateRef<any>, problem?: Problem) {
    this.modalRef = this.modalService.show(template);
    this.focused = problem;
  }

  public onConfirm() {
    this.modalRef.hide();
    if (this.newProblemDescription) {
      this.problemList.push(
        new Problem(
          this.newProblemDescription,
          this.newProblemicd10,
          this.newProblemStatus,
          this.newProblemDiagnosed
        )
      );
    }
  }

  public remove() {
    if (this.focused) {
      this.problemList.splice(this.problemList.indexOf(this.focused), 1);
    }
    this.modalRef.hide();
  }

  public dismiss() {
    this.focused = undefined;
    this.modalRef.hide();
  }

}


export class Problem {

  description: string;
  icd10: string;
  status: ProblemStatus;
  diagnosed: string;
  source: NoteSection;

  constructor(description?, icd10?, status?, diagnosed?) {
    this.description = description;
    this.icd10 = icd10;
    this.status = status;
    this.diagnosed = diagnosed;
  }

}

export enum ProblemStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  RESOLVED = 'RESOLVED'
}

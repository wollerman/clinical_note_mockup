import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problemList: Problem[];
  public modalRef: BsModalRef;
  public newProblem: string;

  constructor(private modalService: BsModalService) {
    this.problemList = [
      new Problem(
        'Achalasia of esophagus (disorder)',
        'K22.0',
        'active',
        '6/19/18')
    ];

  }

  ngOnInit() {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public onConfirm() {
    this.modalRef.hide();
    console.log(this.newProblem);
  }

}


export class Problem {

  description: string;
  icd10: string;
  status: string;
  diagnosed: string;

  constructor(description, icd10, status, diagnosed) {
    this.description = description;
    this.icd10 = icd10;
    this.status = status;
    this.diagnosed = diagnosed;
  }

}

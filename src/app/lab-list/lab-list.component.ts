import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.css']
})
export class LabListComponent implements OnInit {

  labStatues = Object.keys(LabStatus);
  labList: Lab[];
  public modalRef: BsModalRef;
  public focused: Lab;

  public newLabName;
  public newLabDate;
  public newLabStatus;

  public testOptions = [
    'CBC Blood test',
    'FSH test',
    'Hemoglobin A1c test',
    'Lipid Panel',
    'TSH lab test',
    'Comprehensive Metabolic Panel',
    'Estradiol blood test',
    'Testosterone test',
  ];

  constructor(private modalService: BsModalService) {
    this.labList = [
      new Lab(
        'Hemoccult sp4 Stl Ql:',
        '6/13/10',
        'Results Reviewed with Patient'
      )
    ];
  }

  ngOnInit() {
    this.newLabStatus = LabStatus.ORDERED;
    this.newLabDate = new Date().toJSON().slice(0, 10);
  }

  public openModal(template: TemplateRef<any>, lab?: Lab) {
    this.modalRef = this.modalService.show(template);
    this.focused = lab;
  }

  public onConfirm() {
    this.modalRef.hide();
    if (this.newLabName) {
      this.labList.push(
        new Lab(
          this.newLabName,
          this.newLabDate,
          this.newLabStatus,
        )
      );
    }
  }

  public remove() {
    if (this.focused) {
      this.labList.splice(this.labList.indexOf(this.focused), 1);
    }
    this.modalRef.hide();
  }

  public dismiss() {
    this.focused = undefined;
    this.modalRef.hide();
  }

}

export class Lab {

  test: string;
  date: string;
  status: string;

  constructor(test, date, status) {
    this.test = test;
    this.date = date;
    this.status = status;

  }

}

export enum LabStatus {
  ORDERED = 'ORDERED',
  PENDING = 'PENDING',
  REVIEWED = 'REVIEWED'
}

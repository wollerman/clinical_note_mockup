import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.css']
})
export class LabListComponent implements OnInit {

  labList: Lab[];

  constructor() {
    this.labList = [
      new Lab(
        'Hemoccult sp4 Stl Ql:',
        '6/13/10',
        'Results Reviewed with Patient'
      )
    ];
  }

  ngOnInit() {
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

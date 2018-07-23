import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problemList: Problem[];

  constructor() {
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

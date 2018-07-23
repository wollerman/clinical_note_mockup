import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.css']
})
export class ReferralListComponent implements OnInit {

  referralList: Referral[];

  constructor() {
    this.referralList = [
      new Referral('Dr. Jones', 'Radiologist', 'pending')
    ];
  }

  ngOnInit() {
  }

}


export class Referral {

  name: string;
  type: string;
  status: string;
  intructions: string;

  constructor(name: string, type?: string, status?: string) {
    this.name = name;
    this.type = type ? type : '';
    this.status = status ? status: '';
  }

}

import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.css']
})
export class ReferralListComponent implements OnInit {

  referralTypeOptions = [
    'Cardiologist',
    'Radiologist',
    'Ophthalmologist'
  ];

  referralList: Referral[];
  public modalRef: BsModalRef;
  public newReferralName: string;
  public newReferralType: string;
  public newReferralInstructions: string;
  public newReferralDate: string;

  public focused: Referral;

  constructor(private modalService: BsModalService) {
    this.referralList = [
      new Referral('Dr. Jones', 'Radiologist', 'pending', '', '2018-07-19')
    ];
  }

  ngOnInit() {
    this.newReferralDate = new Date().toJSON().slice(0, 10);
  }

  public openModal(template: TemplateRef<any>, referral?: Referral) {
    this.modalRef = this.modalService.show(template);
    this.focused = referral;
  }

  public onConfirm() {
    this.modalRef.hide();
    if (this.newReferralName) {
      this.referralList.push(
        new Referral(
          this.newReferralName,
          this.newReferralType,
          'ORDERED',
          this.newReferralInstructions
        )
      );
    }
  }

  public remove() {
    if (this.focused) {
      this.referralList.splice(this.referralList.indexOf(this.focused), 1);
    }
    this.modalRef.hide();
  }

  public dismiss() {
    this.focused = undefined;
    this.modalRef.hide();
  }

}


export class Referral {

  name: string;
  type: string;
  status: string;
  instructions: string;
  date: string;

  constructor(name: string, type?: string, status?: string, instructions?: string, date?: string) {
    this.name = name;
    this.type = type ? type : '';
    this.status = status ? status : '';
    this.instructions = instructions;
    this.date = date;
  }

}

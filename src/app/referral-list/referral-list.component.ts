import {Component, OnInit, TemplateRef} from '@angular/core';
import {Problem} from '../problem-list/problem-list.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-referral-list',
  templateUrl: './referral-list.component.html',
  styleUrls: ['./referral-list.component.css']
})
export class ReferralListComponent implements OnInit {

  referralTypeOptions = [
    'PCP'
  ];

  referralList: Referral[];
  public modalRef: BsModalRef;
  public newReferralName: string;
  public newReferralType: string;
  public newReferralStatus: string;
  public newReferralInstructions: string;

  public focused: Referral;

  constructor(private modalService: BsModalService) {
    this.referralList = [
      new Referral('Dr. Jones', 'Radiologist', 'pending')
    ];
  }

  ngOnInit() {
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
          this.newReferralStatus,
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

  constructor(name: string, type?: string, status?: string, instructions?: string) {
    this.name = name;
    this.type = type ? type : '';
    this.status = status ? status : '';
    this.instructions = instructions;
  }

}

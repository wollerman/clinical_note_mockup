import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-note-section',
  templateUrl: './note-section.component.html',
  styleUrls: ['./note-section.component.css']
})
export class NoteSectionComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  type: string;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  @Output()
  removeEmit = new EventEmitter<NoteSection>();

  constructor() {
  }

  ngOnInit() {
  }

  remove() {
    this.removeEmit.emit(this);
  }

}

export class NoteSection {

  type: string;
  text: string;

  constructor(text?: string, type?: string) {
    this.text = text;
    this.type = type;
  }

}

export enum NoteType {
  OBSERVATION = 'OBSERVATION'
}

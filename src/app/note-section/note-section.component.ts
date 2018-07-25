import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-note-section',
  templateUrl: './note-section.component.html',
  styleUrls: ['./note-section.component.css']
})
export class NoteSectionComponent implements OnInit {

  @Input()
  noteSection: NoteSection;

  @Output()
  removeEmit = new EventEmitter<NoteSection>();

  constructor() {
  }

  ngOnInit() {
  }

  remove() {
    this.removeEmit.emit(this.noteSection);
  }

}

export class NoteSection {

  type: string;
  text: string;

  get name() {
    if (this.text) {
      return this.text.slice(0, 30) + '...';
    } else {
      return this.type + ' item';
    }
  }

  constructor(type: string, text?: string) {
    this.text = text;
    this.type = type;
  }

}

export enum NoteType {
  OBSERVATION = 'OBSERVATION'
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-story-editor',
  templateUrl: './story-editor.component.html',
  styleUrls: ['./story-editor.component.scss']
})
export class StoryEditorComponent implements OnInit {

  summary = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}

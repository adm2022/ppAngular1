import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Story } from '../models/story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-editor',
  templateUrl: './story-editor.component.html',
  styleUrls: ['./story-editor.component.scss']
})
export class StoryEditorComponent implements OnInit {
  stories: Story[] = [];
  storyForm = this.formBuilder.group({
    summary: new FormControl(''),
    description: new FormControl(''),
    points: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private storyService: StoryService) { }

  ngOnInit(): void {
    this.storyService.getStories().subscribe(s => this.stories = s);
  }

  onSubmit() {
    console.log(`ngOnsubmit`);
    console.log(this.storyForm.value);
  }

}

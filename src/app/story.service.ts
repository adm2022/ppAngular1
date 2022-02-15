import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Story } from './models/story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
  storyUrl='/api/storys'

  constructor(private http: HttpClient) { }
  getStories() {
    return this.http.get<Story[]>(this.storyUrl, this.httpOptions);
  }
}

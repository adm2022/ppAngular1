import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { StoryEditorComponent } from './story-editor/story-editor.component';
import { AboutComponent } from './about/about.component';
import { MeetingComponent } from './meeting/meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryEditorComponent,
    AboutComponent,
    MeetingComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule,
    MatSliderModule,MatSidenavModule,MatToolbarModule,MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

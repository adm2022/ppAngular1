import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {StoryEditorComponent} from "./story-editor/story-editor.component";


const routes: Routes = [
    {
        path: "",
        component: StoryEditorComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

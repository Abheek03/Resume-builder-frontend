import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { ResumeEditorComponent } from './features/resume-editor/resume-editor.component';
import { ResumePreviewComponent } from './features/resume-preview/resume-preview.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,AuthComponent,ResumeEditorComponent,ResumePreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume-builder';

  oneWayDataBindingexample = 'One way Data binding example';

  src = 'https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200-1.png';

  sayhello(){
    console.log("hello from the console")
    alert("hello")
  }

  TwowayBinding = "";

  sample = false;

  css = {color:'#00f',background:'#ccc'};

  items = [1,2,3];

  message="hello Auth"
}


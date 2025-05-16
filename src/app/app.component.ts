import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { ResumeEditorComponent } from './features/resume-editor/resume-editor.component';
import { ResumePreviewComponent } from './features/resume-preview/resume-preview.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AuthComponent,ResumeEditorComponent,ResumePreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume-builder';
}

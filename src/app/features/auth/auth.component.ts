import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';



@Component({
  selector: 'app-auth',
  standalone:true,
  imports: [RouterOutlet,AppComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {


  @Input() greet = "";

}

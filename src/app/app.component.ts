import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from './layout/layout.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showSidebar: Boolean = true;

  constructor(public layoutService: LayoutService){
  }

}

import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { LayoutService } from '../layout.service';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'headlessui-angular';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [ CommonModule, MenuModule ],
  animations: [
    trigger('toggleAnimation', [
        transition(':enter', [style({ opacity: 0, transform: 'scale(0.95)' }), animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))]),
        transition(':leave', [animate('75ms', style({ opacity: 0, transform: 'scale(0.95)' }))]),
    ]),
],
})
export class HeaderComponent { 
  constructor(private themeService: ThemeService, public layoutService: LayoutService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  ngOnInit(): void {
  }

}

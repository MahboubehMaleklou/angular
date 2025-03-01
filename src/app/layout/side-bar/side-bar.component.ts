
import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
  imports: [CommonModule],
})
export class SidebarComponent { 
  menuItems = [
    {
      title: 'داشبورد',
      icon: 'fa-solid fa-bars',
      subItems: [],
      isOpen: false 
    },
    {
      title: 'تنظیمات',
      icon: 'fa-solid fa-cog',
      subItems: [
        { title: 'Profile' },
        { title: 'Security' }
      ],
      isOpen: false 
    },
    {
      title: 'گزارش ها',
      icon: 'fa-solid fa-file',
      subItems: [
        { title: 'Monthly' },
        { title: 'Annual' }
      ],
      isOpen: false
    }
  ];

  toggleSubMenu(item: any) {
    item.isOpen = !item.isOpen;
  }

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {
  }

}

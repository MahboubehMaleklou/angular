import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  showSidebar = signal(true);

  toggleSidebar() {
    this.showSidebar.set(!this.showSidebar());
  }

  setSidebarState(state: boolean) {
    this.showSidebar.set(state);
  }
}

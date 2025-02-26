import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'theme';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadTheme();
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.classList.remove(currentTheme);
      document.documentElement.classList.add(newTheme);
      localStorage.setItem(this.themeKey, newTheme);
    }
  }

  loadTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.themeKey) || 'light';
      document.documentElement.classList.add(savedTheme);
    }
  }
}

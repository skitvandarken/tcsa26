import { Injectable, signal, effect } from '@angular/core';

export interface LayoutSettings {
  theme: 'light' | 'dark';
  primaryColor: string;
  borderRadius: 'none' | 'small' | 'medium' | 'large';
  fontStyle: 'modern' | 'professional';
  navbarStyle: 'solid' | 'glass';
  density: 'compact' | 'relaxed';
  showHeroSlider: boolean;
  showStatsCounter: boolean;
  showFeaturedServices: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private readonly STORAGE_KEY = 'tcsa_layout_settings_v2';

  settings = signal<LayoutSettings>(this.loadSettings());

  updateSettings(newSettings: Partial<LayoutSettings>) {
    this.settings.update(s => ({ ...s, ...newSettings }));
  }

  constructor() {
    effect(() => {
      const s = this.settings();
      this.applyTheme(s.theme);
      this.applyPrimaryColor(s.primaryColor);
      this.applyBorderRadius(s.borderRadius);
      this.applyFontStyle(s.fontStyle);
      this.applyNavbarStyle(s.navbarStyle);
      this.applyDensity(s.density);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(s));
    });
  }

  private loadSettings(): LayoutSettings {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    return {
      theme: 'light',
      primaryColor: '#0062E0',
      borderRadius: 'medium',
      fontStyle: 'modern',
      navbarStyle: 'glass',
      density: 'relaxed',
      showHeroSlider: true,
      showStatsCounter: true,
      showFeaturedServices: true
    };
  }

  private applyBorderRadius(radius: string) {
    const values = { none: '0px', small: '4px', medium: '8px', large: '16px' };
    const val = values[radius as keyof typeof values] || '8px';
    document.documentElement.style.setProperty('--radius-md', val);
    document.documentElement.style.setProperty('--radius-lg', (parseInt(val) * 2) + 'px');
  }

  private applyFontStyle(style: string) {
    if (style === 'professional') {
      document.body.style.setProperty('--font-display', 'system-ui, sans-serif');
      document.body.style.setProperty('--font-body', 'system-ui, sans-serif');
    } else {
      document.body.style.setProperty('--font-display', "'Syne', sans-serif");
      document.body.style.setProperty('--font-body', "'DM Sans', sans-serif");
    }
  }

  private applyNavbarStyle(style: string) {
    if (style === 'glass') {
      document.body.classList.add('navbar-glass');
    } else {
      document.body.classList.remove('navbar-glass');
    }
  }

  private applyDensity(density: string) {
    document.documentElement.style.setProperty('--section-padding', density === 'compact' ? '40px' : '80px');
  }

  private applyTheme(theme: string) {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  private applyPrimaryColor(color: string) {
    document.documentElement.style.setProperty('--blue', color);
  }
}

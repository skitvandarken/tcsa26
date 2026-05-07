import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Auth, authState, signOut } from '@angular/fire/auth';
import { TranslationService, Language } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private auth = inject(Auth);
  private router = inject(Router);
  private translationService = inject(TranslationService);
  
  user$ = authState(this.auth);
  currentLang = this.translationService.lang;

  setLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }
}

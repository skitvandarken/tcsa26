import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, signOut, user } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { Navbar } from '../../layout/navbar/navbar';

import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Navbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  private auth = inject(Auth);
  private router = inject(Router);
  private layoutService = inject(LayoutService);
  
  user$ = user(this.auth);
  activeTab = 'layout';

  // Bind local object to service signal
  layoutSettings = this.layoutService.settings();

  ngOnInit() {
    // Sync settings when component loads
    this.layoutSettings = { ...this.layoutService.settings() };
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  saveSettings() {
    this.layoutService.updateSettings(this.layoutSettings);
    alert('Definições de layout guardadas e aplicadas!');
  }

  async handleSignOut() {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}

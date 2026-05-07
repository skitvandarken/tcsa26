import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../layout/navbar/navbar';
import { Hero } from '../../layout/hero/hero';
import { Services } from '../../layout/services/services';
import { Footer } from '../../layout/footer/footer';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, Navbar, Hero, Services, Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  layoutService = inject(LayoutService);
  settings = this.layoutService.settings;
}

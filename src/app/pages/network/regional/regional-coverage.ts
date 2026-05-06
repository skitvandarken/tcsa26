import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-regional-coverage',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './regional-coverage.html',
  styleUrl: '../../services/dia/dia.scss'
})
export class RegionalCoverage {
  hubs = [
    { city: 'Johannesburg', desc: 'Main hub connecting to NAP Africa and major enterprise districts.' },
    { city: 'Cape Town', desc: 'Strategic coastal landing for international submarine cables.' },
    { city: 'Durban', desc: 'Key connectivity point for the eastern regions of South Africa.' }
  ];
}

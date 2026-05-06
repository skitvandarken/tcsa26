import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-pops',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './pops.html',
  styleUrl: '../../services/dia/dia.scss'
})
export class Pops {
  regions = [
    { name: 'Africa', count: '15+', locations: 'South Africa, Angola, Nigeria, Ghana, Kenya.' },
    { name: 'Europe', count: '8+', locations: 'London, Frankfurt, Amsterdam, Paris, Lisbon, Madrid.' },
    { name: 'Americas', count: '5+', locations: 'Miami, New York, Sao Paulo, Fortaleza, Rio de Janeiro.' },
    { name: 'Asia', count: '2+', locations: 'Singapore, Tokyo (via partners).' }
  ];
}

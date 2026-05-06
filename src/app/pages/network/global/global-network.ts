import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-global-network',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './global-network.html',
  styleUrl: '../../services/dia/dia.scss' // Reusing premium service styles
})
export class GlobalNetwork {
  stats = [
    { label: 'Continents', value: '4' },
    { label: 'Submarine Cables', value: '5+' },
    { label: 'Global PoPs', value: '30+' },
    { label: 'Connected IXPs', value: '45+' }
  ];

  cables = [
    { name: 'SACS', desc: 'The first subsea cable system to link Africa and South America across the South Atlantic.' },
    { name: 'WACS', desc: 'Connecting South Africa to the UK along the West Coast of Africa.' },
    { name: 'MONET', desc: 'High-capacity link between Brazil and the United States.' },
    { name: 'EQUATORIAL', desc: 'Strategic regional connectivity across the Atlantic.' }
  ];
}

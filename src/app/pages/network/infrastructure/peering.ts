import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-peering',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './peering.html',
  styleUrl: '../../services/dia/dia.scss'
})
export class Peering {
  details = [
    { title: 'Open Policy', desc: 'We maintain an open peering policy to maximize connectivity and performance.' },
    { title: '6000+ Partners', desc: 'Direct peering with major content providers, ISPs, and enterprises.' },
    { title: 'Traffic Optimization', desc: 'Using advanced routing tools to ensure the most efficient data paths.' },
    { title: 'PeeringDB', desc: 'View our full technical specifications and locations on PeeringDB (AS 37169).' }
  ];
}

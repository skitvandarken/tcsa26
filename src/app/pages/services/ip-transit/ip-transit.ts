import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-ip-transit',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './ip-transit.html',
  styleUrl: '../dia/dia.scss' // Reusing DIA styles
})
export class IpTransit {
  features = [
    { title: 'Global Backbone', desc: 'Direct access to SACS, WACS, and MONET cable systems.' },
    { title: 'AS 37169', desc: 'Connectivity to one of the best-connected networks in Africa.' },
    { title: 'High Availability', desc: 'Redundant paths ensuring 99.9% uptime for your traffic.' },
    { title: 'IPv6 Ready', desc: 'Full support for next-generation internet protocol.' }
  ];
}

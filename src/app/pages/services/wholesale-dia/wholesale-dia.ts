import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-wholesale-dia',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './wholesale-dia.html',
  styleUrl: '../dia/dia.scss'
})
export class WholesaleDia {
  features = [
    { title: 'Carrier Grade', desc: 'Designed for high-traffic ISPs and service providers.' },
    { title: 'Global IXP Peering', desc: 'Direct connection to major international peering points.' },
    { title: 'DDoS Protection', desc: 'Integrated mitigation services for network security.' },
    { title: 'SLA Guaranteed', desc: 'Industry-leading service level agreements for uptime.' }
  ];
}

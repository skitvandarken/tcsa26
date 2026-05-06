import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-gdi',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './gdi.html',
  styleUrl: '../dia/dia.scss'
})
export class Gdi {
  features = [
    { title: 'Carrier Neutral', desc: 'Access multiple carriers and service providers within our ecosystem.' },
    { title: 'Global Connectivity', desc: 'Direct links to major submarine cable systems and IXPs.' },
    { title: 'Secure Environment', desc: 'High-security data center facilities with 24/7 monitoring.' },
    { title: 'Redundant Power', desc: 'Guaranteed power availability with backup generators and UPS.' }
  ];
}

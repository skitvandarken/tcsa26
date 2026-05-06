import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-co-location',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './co-location.html',
  styleUrl: '../dia/dia.scss'
})
export class CoLocation {
  features = [
    { title: 'Rack Space', desc: 'Flexible options from single units to private cages and suites.' },
    { title: 'Physical Security', desc: 'Biometric access, 24/7 onsite security, and CCTV coverage.' },
    { title: 'Environmental Control', desc: 'Precision cooling systems maintaining optimal temperature and humidity.' },
    { title: 'Remote Support', desc: 'Experienced technicians available 24/7 for onsite assistance.' }
  ];
}

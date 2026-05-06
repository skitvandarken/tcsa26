import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './certifications.html',
  styleUrl: '../../services/dia/dia.scss'
})
export class Certifications {
  awards = [
    { title: 'CAIDA Ranking', desc: 'Ranked among the top most connected networks in Africa and the world.' },
    { title: 'MEF 3.0 Certified', desc: 'Compliant with global standards for carrier ethernet services.' },
    { title: 'ISO 27001', desc: 'Certified for information security management systems.' }
  ];
}

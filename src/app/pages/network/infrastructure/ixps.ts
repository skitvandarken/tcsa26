import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-ixps',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './ixps.html',
  styleUrl: '../../services/dia/dia.scss'
})
export class Ixps {
  exchanges = [
    { name: 'NAP Africa', location: 'Johannesburg & Cape Town', desc: 'The largest internet exchange point in Africa.' },
    { name: 'LINX', location: 'London, UK', desc: 'One of the worlds leading IXPs for global traffic.' },
    { name: 'DE-CIX', location: 'Frankfurt, Germany', desc: 'Strategic peering hub for European and African traffic.' },
    { name: 'JINX', location: 'Johannesburg', desc: 'Pioneering internet exchange in South Africa.' }
  ];
}

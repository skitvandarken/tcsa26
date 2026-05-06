import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-dia',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './dia.html',
  styleUrl: './dia.scss'
})
export class Dia {
  features = [
    { title: 'Dedicated Bandwidth', desc: '100% throughput guaranteed, no contention with other users.' },
    { title: 'Symmetrical Speeds', desc: 'Identical upload and download speeds for optimal cloud performance.' },
    { title: 'Low Latency', desc: 'Direct routes to global IXPs and content delivery networks.' },
    { title: '24/7 Support', desc: 'Monitored by our global Network Operations Center (NOC).' }
  ];

  benefits = [
    'Uninterrupted business operations',
    'High-performance video conferencing',
    'Seamless cloud application access',
    'Scalable bandwidth on demand'
  ];
}

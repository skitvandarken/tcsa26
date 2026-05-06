import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-iplc',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './iplc.html',
  styleUrl: '../dia/dia.scss'
})
export class Iplc {
  features = [
    { title: 'Global Reach', desc: 'Secure point-to-point connectivity across the South Atlantic and beyond.' },
    { title: 'Low Latency', desc: 'Optimized routes through our submarine cable systems.' },
    { title: 'Dedicated Bandwidth', desc: 'Exclusive capacity for your data with 100% availability.' },
    { title: 'Scalable Capacity', desc: 'Easily scale from STM-1 to multiple 100G waves.' }
  ];
}

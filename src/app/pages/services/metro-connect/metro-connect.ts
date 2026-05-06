import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-metro-connect',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './metro-connect.html',
  styleUrl: '../dia/dia.scss'
})
export class MetroConnect {
  features = [
    { title: 'DC-to-DC', desc: 'Seamless high-speed links between major data centers in the metro area.' },
    { title: 'Low Latency', desc: 'Optimized fiber paths for ultra-fast data transfer.' },
    { title: 'Protocol Neutral', desc: 'Support for various transport protocols (Ethernet, OTN).' },
    { title: 'Scalable', desc: 'Easily upgrade from 1G to 100G as your business grows.' }
  ];
}

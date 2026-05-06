import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-wholesale-remote-peering',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './wholesale-remote-peering.html',
  styleUrl: '../dia/dia.scss'
})
export class WholesaleRemotePeering {
  features = [
    { title: 'Global IXP Network', desc: 'Direct access to the worlds largest internet exchange points.' },
    { title: 'Reduced Transit Costs', desc: 'Lower your IP Transit spend by peering directly with other networks.' },
    { title: 'Enhanced Performance', desc: 'Direct paths reduce latency and jitter for your users.' },
    { title: 'Carrier Scale', desc: 'Support for high-capacity peering ports up to 100Gbps.' }
  ];
}

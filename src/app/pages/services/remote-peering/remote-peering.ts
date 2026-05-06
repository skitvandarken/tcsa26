import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-remote-peering',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './remote-peering.html',
  styleUrl: '../dia/dia.scss'
})
export class RemotePeering {
  features = [
    { title: 'Global IXP Access', desc: 'Connect to major Internet Exchange Points without a physical presence.' },
    { title: 'Cost Efficiency', desc: 'Reduce transit costs by peering directly with content providers.' },
    { title: 'Improved Latency', desc: 'Direct paths to networks, bypassing the public internet.' },
    { title: 'Single Port', desc: 'Access multiple IXPs through a single physical connection.' }
  ];
}

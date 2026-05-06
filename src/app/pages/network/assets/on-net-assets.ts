import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-on-net-assets',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './on-net-assets.html',
  styleUrl: '../../services/dia/dia.scss'
})
export class OnNetAssets {
  assets = [
    { title: 'Submarine Cables', desc: 'Direct ownership and capacity in SACS, WACS, and MONET.' },
    { title: 'Terrestrial Fiber', desc: 'Extensive backhaul and metro fiber networks across South Africa.' },
    { title: 'Data Centers', desc: 'State-of-the-art facilities in Luanda, Cape Town, and Johannesburg.' },
    { title: 'Satellite Hubs', desc: 'Strategically located hubs for regional satellite connectivity.' }
  ];
}

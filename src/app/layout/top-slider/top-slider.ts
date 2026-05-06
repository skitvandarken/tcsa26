import { Component } from '@angular/core';

@Component({
  selector: 'app-top-slider',
  standalone: true,
  templateUrl: './top-slider.html',
  styleUrl: './top-slider.scss',
})
export class TopSlider {
  slides = [
    { title: 'Meet Us at Capacity Middle East', desc: '10-12 Feb 2026 | Grand Hyatt Dubai', img: 'img/dubai_event.png' },
    { title: 'Global Network', desc: 'Connecting continents with high-speed fiber.', img: '' },
    { title: 'Submarine Cables', desc: 'Resilient subsea infrastructure.', img: '' },
    { title: 'Cloud Connect', desc: 'Direct access to major cloud providers.', img: '' },
    { title: 'IP Transit', desc: 'High-performance internet connectivity.', img: '' },
    { title: 'Remote Peering', desc: 'Access global IXPs easily.', img: '' },
    { title: 'Anti-DDoS', desc: 'Advanced protection for your network.', img: '' },
    { title: 'Durban PoP', desc: 'Strategic connectivity hub in KZN.', img: '' },
    { title: 'Johannesburg PoP', desc: 'The heart of South African data.', img: '' },
    { title: 'Cape Town PoP', desc: 'Gateways to international waters.', img: '' },
    { title: 'Partner Program', desc: 'Grow your business with TCSA.', img: '' },
    { title: 'Enterprise Solutions', desc: 'Custom ICT for large organizations.', img: '' },
    { title: '24/7 Support', desc: 'Dedicated NOC for global assurance.', img: '' }
  ];
}

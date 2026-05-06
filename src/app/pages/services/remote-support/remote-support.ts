import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-remote-support',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './remote-support.html',
  styleUrl: '../dia/dia.scss'
})
export class RemoteSupport {
  features = [
    { title: '24/7 Availability', desc: 'Remote technical support available around the clock for your peace of mind.' },
    { title: 'Remote Hands', desc: 'Simple physical tasks like power cycling or cable checks performed on demand.' },
    { title: 'Expert Guidance', desc: 'Access to senior engineers for complex troubleshooting and configuration.' },
    { title: 'Fast Response', desc: 'Industry-leading response times for all support requests.' }
  ];
}

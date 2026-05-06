import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-smart-hands',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './smart-hands.html',
  styleUrl: '../dia/dia.scss'
})
export class SmartHands {
  features = [
    { title: 'Hardware Install', desc: 'Expert installation and cabling of servers, switches, and storage.' },
    { title: 'Troubleshooting', desc: 'Onsite diagnostics and part replacements to resolve issues quickly.' },
    { title: 'Inventory Management', desc: 'Organization and tracking of your onsite assets and spares.' },
    { title: 'Audit Support', desc: 'Visual inspections and documentation for your compliance needs.' }
  ];
}

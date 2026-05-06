import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-managed-services',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './managed-services.html',
  styleUrl: '../dia/dia.scss'
})
export class ManagedServices {
  features = [
    { title: 'Network Management', desc: 'End-to-end monitoring and optimization of your network infrastructure.' },
    { title: 'Cloud Integration', desc: 'Seamlessly connect and manage your hybrid cloud environments.' },
    { title: 'Security Services', desc: 'Managed firewall, DDoS protection, and security auditing.' },
    { title: 'Disaster Recovery', desc: 'Comprehensive backup and recovery solutions for business continuity.' }
  ];
}

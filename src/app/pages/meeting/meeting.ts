import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [CommonModule, FormsModule, Navbar, Footer],
  templateUrl: './meeting.html',
  styleUrl: './meeting.scss'
})
export class Meeting {
  formData = {
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  };

  interests = [
    'Enterprise Solutions (DIA, IP Transit)',
    'Wholesale Connectivity (IPLC, Global Network)',
    'Data Center & Co-location',
    'Remote Peering & IXPs',
    'Managed Services & Smart Hands',
    'Partner Program',
    'General Inquiry'
  ];

  onSubmit() {
    console.log('Contact Form Submitted:', this.formData);
    alert('Thank you for contacting TelCables South Africa! Your message has been received, and our team will get back to you shortly.');
    
    // Reset form
    this.formData = {
      name: '',
      email: '',
      company: '',
      interest: '',
      message: ''
    };
  }
}

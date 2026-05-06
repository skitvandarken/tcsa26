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
    interest: 'IP Transit',
    date: '',
    message: ''
  };

  interests = [
    'IP Transit',
    'Cloud Connect',
    'Remote Peering',
    'Submarine Cables',
    'Anti-DDoS',
    'Other'
  ];

  onSubmit() {
    console.log('Form Submitted:', this.formData);
    alert('Thank you! Your meeting request has been sent. Our team will contact you shortly.');
    // Reset form
    this.formData = {
      name: '',
      email: '',
      company: '',
      interest: 'IP Transit',
      date: '',
      message: ''
    };
  }
}

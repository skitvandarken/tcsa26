import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../layout/navbar/navbar';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team {
  teamMembers = [
    {
      name: 'Sudhir Juggernath',
      role: 'CEO TelCables South Africa',
      desc: 'East Africa, Middle East and Asia',
      image: 'img/sudhir.png'
    },
    {
      name: 'Artur Mendes',
      role: 'VP of Sales',
      desc: 'TelCables Europe',
      image: 'img/artur.png'
    },
    {
      name: 'Jane Doe',
      role: 'Network Operations Manager',
      desc: 'Dedicated to global infrastructure stability.',
      image: 'img/team1.png'
    },
    {
      name: 'John Smith',
      role: 'Head of ICT Solutions',
      desc: 'Expert in cloud and enterprise connectivity.',
      image: 'img/team2.png'
    }
  ];
}

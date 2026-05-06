import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../../layout/navbar/navbar';
import { Footer } from '../../../layout/footer/footer';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './infrastructure.html',
  styleUrl: '../../services/dia/dia.scss'
})
export class Infrastructure {
  items = [
    { title: 'Connected IXPs', count: '45+', desc: 'Direct interconnection with major internet exchanges globally.' },
    { title: 'Network PoPs', count: '30+', desc: 'Strategic points of presence in major digital hubs.' },
    { title: 'Peering Partners', count: '6000+', desc: 'Extensive peering agreements ensuring direct traffic flows.' }
  ];
}

import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { Hero } from '../../layout/hero/hero';
import { Services } from '../../layout/services/services';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Navbar, Hero, Services, Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}

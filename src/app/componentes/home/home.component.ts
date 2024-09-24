import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { RouterLink } from '@angular/router';
import { JuegosModule } from '../../modules/juegos/juegos.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, JuegosModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor( public auth : Auth) {
  }
}

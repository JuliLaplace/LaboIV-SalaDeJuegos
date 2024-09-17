import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
export interface Mensaje{
  nombre:string,
  mensaje:string
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  mensajes : Mensaje [] =[
    {nombre : 'julieta', mensaje: 'hola'},
    {nombre : 'julieta', mensaje: 'hola'},
    {nombre : 'julieta', mensaje: 'hola'},
    {nombre : 'julieta', mensaje: 'hola'},
    {nombre : 'julieta', mensaje: 'hola'}
  ];
}

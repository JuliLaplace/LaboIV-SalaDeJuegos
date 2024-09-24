import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SesionService } from '../../servicios/sesion.service';
import { ChatService } from '../../servicios/chat.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
export interface Mensaje{
  nombre:string,
  mensaje:string, 
  hora:string
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  mensaje!: string;

  constructor( public sesion : SesionService, private chat: ChatService) {

  }
  
  

  obtenerMensajes() {
    const container = document.getElementsByClassName("contenido-chat")[0];
    if (container){
      container.scrollTop = container.scrollHeight;
    }
    return this.chat.chatCollection;
  }

  enviarMensaje(){
    if(this.mensaje.trim()!= ''){
      this.chat.crearMensajes(this.sesion.getUsuario(), this.mensaje);
      this.limpiarCampos(); 
    }
  }


  limpiarCampos(){
    this.mensaje="";
  }
}

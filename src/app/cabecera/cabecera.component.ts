import { Component } from '@angular/core';
//Importacion de los componentes 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  //Funcion para redireccionar
  irFacebook(){
    window.open('https://www.facebook.com/?locale=es_LA');

  }
  irTiktok(){
    window.open('https://www.tiktok.com/es/');
  }
}

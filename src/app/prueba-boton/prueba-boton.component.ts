import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-prueba-boton',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './prueba-boton.component.html',
  styleUrl: './prueba-boton.component.css'
})
export class PruebaBotonComponent {

  //Metodo para redireccionar a Whatsapp
  enviarWhatsapp(){
    const numero='69596229';
    const mensaje='Necesito mayor informacion de la mascota';
    const url= `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`;
    window.open(url);
  }

}

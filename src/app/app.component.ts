import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Importar los componentes
import { NavegacionComponent } from './navegacion/navegacion.component';
import { CabeceraComponent } from './cabecera/cabecera.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavegacionComponent,
    CabeceraComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demostracioncompetencias';
}

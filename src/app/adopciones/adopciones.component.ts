import { Component,inject, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
//Importacion 
import { CommonModule } from '@angular/common';
//import { DialogoComponent } from '../dialogo/dialogo.component';
import { MatDialog } from '@angular/material/dialog';
//Importar el servicio de Airtable
import { AirtableService } from '../airtable.service';
import { error } from 'console';


@Component({
  selector: 'app-adopciones',
  standalone: true,
  imports: [MatCardModule,MatButtonModule, CommonModule],
  templateUrl: './adopciones.component.html',
  styleUrl: './adopciones.component.css'
})
export class AdopcionesComponent {
  //Lista de las mascota que seran obtenidas de Airtable
  adoptantes:any[]=[];

  constructor(private airtableService:AirtableService){}
  //Paso 1. Configurar las gestion estados
  ngOnInit():void{
    //Paso 2. Inicializamos el componente y obtenemos los datos de airtable
    this.airtableService.obtenerAdoptantes().subscribe(
      (data)=>{
        this.adoptantes=data;
      },(error)=>{
        console.error('Error al obtener los datos de Airtable ',error);
      }
    );
  }
  
}

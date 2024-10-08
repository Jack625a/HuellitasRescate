import { Component } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
//iMPORTAR EL SERVICIO DE AIRTABLE
import { AirtableService } from '../airtable.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    MatStepperModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  primerFormulario: FormGroup;
  segundoFormulario:FormGroup;
  tercerFormulario:FormGroup;

  //dEFINIR EL CONSTRUCTOR DE LA CLASE
  constructor(
    private _formBuilder: FormBuilder,
    private airtableService:AirtableService,
    private _snackBar:MatSnackBar,
    
  ){
    //pASO 2. Definir el formulario del primer paso (Informacion personal)
    this.primerFormulario=this._formBuilder.group({
      nombre:['', Validators.required],
      celular:['',Validators.required],
      correo: ['',Validators.required]
    });

    //Definir el formulario del paso 2 (Informacion mascota)
    this.segundoFormulario=this._formBuilder.group({
      tipoMascota:['',Validators.required],
      nombreMascota:['',Validators.required],
      razon:['',Validators.required]
    });

    //Definir el tercer formulario 
    this.tercerFormulario=this._formBuilder.group({
      direccion: ['',Validators.required],
      ci:['',Validators.required]
    });
  }
  //Metodo para enviar el formulario 
  enviarFormulario():void{
    if(this.primerFormulario.valid && this.segundoFormulario.valid && this.tercerFormulario.valid ){
      const datosFormulario={
        ...this.primerFormulario.value,
        ...this.segundoFormulario.value,
        ...this.tercerFormulario.value,
      };
      console.log(datosFormulario);
      //En esta seccion uniremos los datos a la BASE DE DATOS
      this.airtableService.añadirAdoptante(datosFormulario).subscribe(
        (respuesta)=>{
          console.log("Se registro correctamente los datos del formulario ",respuesta);
          this._snackBar.open("Datos registrados correctamente",'Cerrar',{
            duration:3000,
          });

          //Actualizar los formularios
          this.primerFormulario.reset();
          this.segundoFormulario.reset();
          this.tercerFormulario.reset();
        },
        (error)=>{
          console.error('Error al registrar los datos ',error);
          this._snackBar.open('Error al registrar, intentelo nuevamente','Cerrar',{
            duration:3000,
          });
        }
      );      
    }
    else{
      this._snackBar.open('Debera completar todos los datos para continuar','Cerrar',{
        duration:3000,
      });
    }
  }
}

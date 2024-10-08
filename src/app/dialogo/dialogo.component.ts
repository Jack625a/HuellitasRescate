import { Component,inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { 
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,

 } from '@angular/material/dialog';
 import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-dialogo',
  standalone: true,
  imports: [MatButtonModule,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogTitle,FormularioComponent],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css'
})
export class DialogoComponent {
  readonly dialogref=inject(MatDialogRef<DialogoComponent>)
}

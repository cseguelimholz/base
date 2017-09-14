import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenComponent } from './examen/examen.component';
import { TareasComponent } from './tareas/tareas.component';
import { ProfesComponent } from './profes/profes.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExamenComponent, TareasComponent, ProfesComponent, AlumnosComponent]
})
export class AulaModule { }

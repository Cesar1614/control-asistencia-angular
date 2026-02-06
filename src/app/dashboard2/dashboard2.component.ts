import { Component } from '@angular/core';
import { ColaboradoresService } from '../colaboradores.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard2.component.html',
  styleUrl: './dashboard2.component.css'
})
export class Dashboard2Component {

  colaboradores: any[] = [];
  colaborador = {
    cip: '',
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    departamento: '',
    email: '',
    estatus: ''
  };

  constructor(private colaboradoresService: ColaboradoresService) {}

  ngOnInit(): void {
    this.colaboradoresService.getColaboradores().subscribe(data => {
      this.colaboradores = data;
    });
  }

  agregarColaborador(): void {
    this.colaboradoresService.addColaborador(this.colaborador).subscribe(() => {
      alert('Colaborador agregado con éxito');
      this.resetForm();
      this.ngOnInit();
    });
  }

  editarColaborador(colaborador: any): void {
    this.colaborador = colaborador;
  }

  actualizarColaborador(): void {
    this.colaboradoresService.updateColaborador(this.colaborador.cip, this.colaborador).subscribe(() => {
      alert('Colaborador actualizado con éxito');
      this.resetForm();
      this.ngOnInit();
    });
  }

  eliminarColaborador(cip: string): void {
    this.colaboradoresService.deleteColaborador(cip).subscribe(() => {
      alert('Colaborador eliminado con éxito');
      this.ngOnInit();
    });
  }

  resetForm(): void {
    this.colaborador = {
      cip: '',
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
      departamento: '',
      email: '',
      estatus: ''
    };
  }

}

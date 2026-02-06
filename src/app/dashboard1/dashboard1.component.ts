import { Component } from '@angular/core';
import { ColaboradoresService } from '../colaboradores.service';
import { MarcacionesService } from '../marcaciones.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.css'
})
export class Dashboard1Component {

  colaboradores: any[] = [];
  selectedCip: string = '';
  marcacion = {
    cip: '',
    fecha: '',
    hora_entrada: '',
    hora_salida_almuerzo: '',
    hora_entrada_almuerzo: '',
    hora_salida: ''
  };

  constructor(
    private colaboradoresService: ColaboradoresService,
    private marcacionesService: MarcacionesService
  ) {}

  ngOnInit(): void {
    this.colaboradoresService.getColaboradores().subscribe(data => {
      this.colaboradores = data;
    });
  }

  agregarMarcacion(): void {
    this.marcacion.cip = this.selectedCip;
    this.marcacionesService.addMarcacion(this.marcacion).subscribe(() => {
      alert('Marcación agregada con éxito');
      this.resetForm();
    });
  }

  resetForm(): void {
    this.marcacion = {
      cip: '',
      fecha: '',
      hora_entrada: '',
      hora_salida_almuerzo: '',
      hora_entrada_almuerzo: '',
      hora_salida: ''
    };
  }

}

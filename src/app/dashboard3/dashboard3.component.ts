import { Component } from '@angular/core';
import { ColaboradoresService } from '../colaboradores.service';
import { MarcacionesService } from '../marcaciones.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard3',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard3.component.html',
  styleUrl: './dashboard3.component.css'
})
export class Dashboard3Component {

  colaboradores: any[] = [];
  marcaciones: any[] = [];

  constructor(
    private colaboradoresService: ColaboradoresService,
    private marcacionesService: MarcacionesService
  ) {}

  ngOnInit(): void {
    this.colaboradoresService.getColaboradores().subscribe(data => {
      this.colaboradores = data;
    });

    this.marcacionesService.getMarcaciones().subscribe(data => {
      this.marcaciones = data;
    });
  }

}

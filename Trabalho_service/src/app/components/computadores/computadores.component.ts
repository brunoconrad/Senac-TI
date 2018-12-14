import { Component, OnInit } from '@angular/core';
import { Computador } from 'src/app/models/computador.model';
import { ComputadoresService } from 'src/app/services/computador.service';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.css'],
  providers: [ ComputadoresService ]
})
export class ComputadoresComponent implements OnInit {

  public computadores: Computador[]

  constructor(private celularesService: ComputadoresService) { }

  ngOnInit() {
    this.computadores = this.celularesService.getComputadores()
  }

}

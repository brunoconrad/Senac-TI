import { Component, OnInit } from '@angular/core';
import { Celular } from 'src/app/models/celular.model';
import { CelularesService } from 'src/app/services/celulares.service';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css'],
  providers: [ CelularesService ]
})
export class CelularesComponent implements OnInit {

  public celulares: Celular[]

  constructor(private celularesService: CelularesService) { }

  ngOnInit() {
    this.celulares = this.celularesService.getCelulares()
  }

}

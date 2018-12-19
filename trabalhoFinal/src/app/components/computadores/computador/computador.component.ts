import { Component, OnInit, Input } from '@angular/core';
import { Computador } from 'src/app/models/computador.model';
import { ActivatedRoute } from '@angular/router';
import { ComputadoresService } from 'src/app/services/computador.service';

@Component({
  selector: 'app-computador',
  templateUrl: './computador.component.html',
  styleUrls: ['./computador.component.css'],
  providers: [ComputadoresService]
})
export class ComputadorComponent implements OnInit {
  
  private computador: Computador

  constructor(private route: ActivatedRoute,
    private computadoresService: ComputadoresService) {

   }

  ngOnInit() {
    this.computadoresService.getProdutoPorIdAPI(this.route.snapshot.params['id']).then((pc: Computador) => {
      console.log(pc)
      this.computador = pc[0]
    })
  }

}

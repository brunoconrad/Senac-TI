import { Component, OnInit, Input } from '@angular/core';
import { Celular } from 'src/app/models/celular.model';
import { ActivatedRoute } from '@angular/router';
import { CelularesService } from 'src/app/services/celulares.service';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css'],
  providers: [CelularesService]
})
export class CelularComponent implements OnInit {
  
  private celular: Celular

  constructor(private route: ActivatedRoute,
    private celularesService: CelularesService) {

   }

  ngOnInit() {
    this.celularesService.getProdutoPorIdAPI(this.route.snapshot.params['id']).then((prod: Celular)=>{
      console.log(prod)
      this.celular = prod[0]
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Tv } from 'src/app/models/tv.model';
import { ActivatedRoute } from '@angular/router';
import { TvsService } from 'src/app/services/tvs.service';

@Component({
  selector: 'app-produto',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
  providers: [TvsService]
})
export class TvComponent implements OnInit {
  
  private tv: Tv

  constructor(private route: ActivatedRoute,
    private produtosService: TvsService) {

   }

  ngOnInit() {
    this.produtosService.getProdutoPorIdAPI(this.route.snapshot.params['id']).then((prod: Tv)=>{
      console.log(prod)
      this.tv = prod[0]
    })
  }

}

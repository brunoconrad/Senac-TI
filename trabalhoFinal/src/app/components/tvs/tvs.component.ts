import { Component, OnInit } from '@angular/core';
import { Tv } from 'src/app/models/tv.model';
import { TvsService } from 'src/app/services/tvs.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css'],
  providers: [ TvsService ]
})
export class TvsComponent implements OnInit {

  public tvs: Tv[]

  constructor(private tvsService: TvsService) { }

  ngOnInit() {
    this.tvsService.getProdutosPromiseAPI().then(( prod: Tv[]) => {
      this.tvs = prod
    },
      (erro:any) => {console.log(erro)})
  }
}

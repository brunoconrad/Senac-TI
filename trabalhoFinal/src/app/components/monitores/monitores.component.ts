import { Component, OnInit } from '@angular/core';
import { Monitor } from 'src/app/models/monitor.model';
import { MonitoresService } from 'src/app/services/monitores.service';

@Component({
  selector: 'app-monitores',
  templateUrl: './monitores.component.html',
  styleUrls: ['./monitores.component.css'],
  providers: [ MonitoresService ]
})
export class MonitoresComponent implements OnInit {

  public monitores: Monitor[]

  constructor(private monitoresService: MonitoresService) { }

  ngOnInit() {
    this.monitoresService.getProdutosPromiseAPI().then(( moni: Monitor[]) => {
      this.monitores = moni
    },
    (erro:any) => {console.log(erro)})
  }

}

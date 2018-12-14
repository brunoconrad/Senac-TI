import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro.model';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
  providers: [ LivrosService ]
})
export class LivrosComponent implements OnInit {

  public livros: Livro[]

  constructor(private livrosService: LivrosService) { }

  ngOnInit() {
    this.livros = this.livrosService.getLivros()
  }

}

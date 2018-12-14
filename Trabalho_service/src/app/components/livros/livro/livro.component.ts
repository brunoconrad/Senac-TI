import { Component, OnInit, Input } from '@angular/core';
import { Livro } from 'src/app/models/livro.model';
import { ActivatedRoute } from '@angular/router';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css'],
  providers: [LivrosService]
})
export class LivroComponent implements OnInit {
  
  private livro: Livro

  constructor(private route: ActivatedRoute,
    private livrosService: LivrosService) {

   }

  ngOnInit() {
    this.livro = this.livrosService.getLivrosPorId(this.route.snapshot.params['id'])
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ProdutosService]
})
export class ProdutoComponent implements OnInit {
  
  private produto: Produto

  constructor(private route: ActivatedRoute,
    private produtosService: ProdutosService) {

   }

  ngOnInit() {
    this.produto = this.produtosService.getProdutoPorId(this.route.snapshot.params['id'])
  }

}

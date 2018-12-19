import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [ ProdutosService ]
})
export class ProdutosComponent implements OnInit {

  public produtos: Produto[]


  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getProdutosPromise().then((prod: Produto[]) => {
      this.produtos = prod
    },
      (erro:any) => {console.log(erro)})
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoComponent } from './components/produtos/produto/produto.component';
import { RouterModule } from '@angular/router';
import { RotaDinamica } from './app.route';

import { CelularesComponent } from './components/celulares/celulares.component'
import { CelularComponent } from './components/celulares/celular/celular.component'

import { ComputadoresComponent } from './components/computadores/computadores.component'
import { ComputadorComponent } from './components/computadores/computador/computador.component'

import { LivroComponent } from './components/livros/livro/livro.component'
import { LivrosComponent } from './components/livros/livros.component'

import { MonitorComponent } from './components/monitores/monitor/monitor.component'
import { MonitoresComponent } from './components/monitores/monitores.component'

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoComponent,
    CelularesComponent,
    CelularComponent,
    ComputadoresComponent,
    ComputadorComponent,
    LivroComponent,
    LivrosComponent,
    MonitorComponent,
    MonitoresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RotaDinamica),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

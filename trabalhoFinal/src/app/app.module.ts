import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { TvsComponent } from './components/tvs/tvs.component';
import { TvComponent } from './components/tvs/tv/tv.component';
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

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component'


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    TvsComponent,
    TvComponent,
    CelularesComponent,
    CelularComponent,
    ComputadoresComponent,
    ComputadorComponent,
    LivroComponent,
    LivrosComponent,
    MonitorComponent,
    MonitoresComponent,
    NavbarComponent
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

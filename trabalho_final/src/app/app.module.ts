import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ServicosComponent } from './componentes/servicos/servicos.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ContatoComponent } from './componentes/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicosComponent,
    ProdutosComponent,
    GaleriaComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

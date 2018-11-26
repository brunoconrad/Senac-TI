import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DireitoComponente } from './componentes/main/direito/direito.componente';
import { EsquerdoComponente } from './componentes/main/esquerdo/esquerdo.componente';
import { MainComponente } from './componentes/main/main.componente';

@NgModule({
  declarations: [
    AppComponent,
    DireitoComponente,
    EsquerdoComponente,
    MainComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

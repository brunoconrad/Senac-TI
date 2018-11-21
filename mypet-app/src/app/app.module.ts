import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponente } from './componentes/header/header.componente';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponente } from './componentes/main/main.componente'
import { FooterComponente } from './componentes/footer/footer.componente'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponente,
    MainComponente,
    FooterComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

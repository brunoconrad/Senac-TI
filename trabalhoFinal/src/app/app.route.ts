
import {Routes} from '@angular/router'
import { TvsComponent } from './components/tvs/tvs.component';
import { TvComponent } from './components/tvs/tv/tv.component';
import { CelularComponent } from './components/celulares/celular/celular.component'
import { CelularesComponent } from './components/celulares/celulares.component'
import { ComputadorComponent } from './components/computadores/computador/computador.component'
import { ComputadoresComponent } from './components/computadores/computadores.component'
import { LivroComponent } from './components/livros/livro/livro.component'
import { LivrosComponent } from './components/livros/livros.component'
import { MonitorComponent } from './components/monitores/monitor/monitor.component'
import { MonitoresComponent } from './components/monitores/monitores.component'
import { HomeComponent } from './components/home/home.component'

export const RotaDinamica: Routes =
[
    { path: 'home', component: HomeComponent},
    { path: 'tvs', component: TvsComponent},
    { path: 'tv/:id', component: TvComponent},
    { path: 'celulares', component: CelularesComponent},
    { path: 'celular/:id', component: CelularComponent},
    { path: 'computadores', component: ComputadoresComponent},
    { path: 'computador/:id', component: ComputadorComponent},
    { path: 'livros', component: LivrosComponent},
    { path: 'livro/:id', component: LivroComponent},
    { path: 'monitores', component: MonitoresComponent},
    { path: 'monitor/:id', component: MonitorComponent},
    { path: '**', redirectTo: 'home'},
]


import {Routes} from '@angular/router'
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoComponent } from './components/produtos/produto/produto.component';
import { CelularComponent } from './components/celulares/celular/celular.component'
import { CelularesComponent } from './components/celulares/celulares.component'
import { ComputadorComponent } from './components/computadores/computador/computador.component'
import { ComputadoresComponent } from './components/computadores/computadores.component'
import { LivroComponent } from './components/livros/livro/livro.component'
import { LivrosComponent } from './components/livros/livros.component'
import { MonitorComponent } from './components/monitores/monitor/monitor.component'
import { MonitoresComponent } from './components/monitores/monitores.component'

export const RotaDinamica: Routes =
[
    { path: 'produtos', component: ProdutosComponent},
    { path: 'produto/:id', component: ProdutoComponent},
    { path: 'celulares', component: CelularesComponent},
    { path: 'celular/:id', component: CelularComponent},
    { path: 'computadores', component: ComputadoresComponent},
    { path: 'computador/:id', component: ComputadorComponent},
    { path: 'livros', component: LivrosComponent},
    { path: 'livro/:id', component: LivroComponent},
    { path: 'monitores', component: MonitoresComponent},
    { path: 'monitor/:id', component: MonitorComponent},
    { path: '**', redirectTo: 'produtos'},
]

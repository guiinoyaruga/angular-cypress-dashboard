import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioDiarioComponent } from './relatorio-diario/relatorio-diario.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';

const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'diario', component: RelatorioDiarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

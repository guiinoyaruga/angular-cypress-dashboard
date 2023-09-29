import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioDiarioComponent } from './relatorio-diario/relatorio-diario.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { RelatorioSemanalComponent } from './relatorio-semanal/relatorio-semanal.component';

const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'diario', component: RelatorioDiarioComponent },
  { path: 'semanal', component: RelatorioSemanalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

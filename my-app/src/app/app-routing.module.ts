import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioDiarioComponent } from './relatorio-diario/relatorio-diario.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { RelatorioSemanalComponent } from './relatorio-semanal/relatorio-semanal.component';
import { GraficoDiarioComponent } from './grafico-diario/grafico-diario.component';

const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  { path: 'diario', component: RelatorioDiarioComponent },
  { path: 'semanal', component: RelatorioSemanalComponent},
  { path: 'grafico', component: GraficoDiarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

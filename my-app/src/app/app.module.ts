import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RelatorioDiarioComponent } from './relatorio-diario/relatorio-diario.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RelatorioDiarioComponent,
      PaginaInicioComponent
   ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [ HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }

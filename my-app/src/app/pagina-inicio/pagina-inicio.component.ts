import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { resultsService } from 'src/app/services/get-action-results.service'

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  public userInfo: any;
  public constructor (public resultsService: resultsService){}

  public ngOnInit(): void {
   this.resultsService.getTestResultsArtifact()
}
}

import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { resultsService } from 'src/app/services/get-action-results.service'


@Component({
  selector: 'app-grafico-diario',
  templateUrl: './grafico-diario.component.html',
  styleUrls: ['./grafico-diario.component.css']
})

export class GraficoDiarioComponent implements OnInit {

  public chart: any;
  public passes: any

  public constructor(public resultsService: resultsService) { }

  async ngOnInit(): Promise<void>  {
    this.createChart()
    await this.fucao()
  }

  async fucao(){
    let a = await this.resultsService.getData()
    console.log(a)
  }


  async createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [
          {
            label: 'Qt. de testes com falha',
            data: [],
            borderWidth: 2,
          }

        ],

      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
}

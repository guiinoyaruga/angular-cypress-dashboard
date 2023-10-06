import { Component, EventEmitter, OnInit, Output, ViewChild  } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-grafico-diario',
  templateUrl: './grafico-diario.component.html',
  styleUrls: ['./grafico-diario.component.css']
})

export class GraficoDiarioComponent implements OnInit {

  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
          label: 'Quantidade de testes',
          data: [150, 170, 200, 220, 232, 0],
          borderWidth: 2,
        }]
      },
      options: {
        scales: {

          y: {
            beginAtZero: true

          }
        }
      }
    });

}
}

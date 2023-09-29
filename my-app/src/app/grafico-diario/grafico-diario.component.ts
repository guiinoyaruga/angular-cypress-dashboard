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
          label: 'Qt. de testes',
          data: [15, 30, 56, 120, 3, 15],
          borderWidth: 1
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

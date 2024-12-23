import { Component } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgBarSeriesOptions, AgChartOptions } from 'ag-charts-community';

interface IData {
  month: string;
  avgTemp: number;
  iceCreamSales: number;
}

@Component({
  selector: 'app-pokemon-big',
  imports: [AgCharts],
  templateUrl: './pokemon-big.component.html',
  styleUrl: './pokemon-big.component.scss',
})
export class PokemonBigComponent {
  public chartOptions: AgChartOptions;
  constructor() {
    this.chartOptions = {
      // Data: Data to be displayed in the chart
      data: [
        { attribute: 'hp', ovr: 45 },
        { attribute: 'attack', ovr: 49 },
        { attribute: 'defense', ovr: 49 },
        { attribute: 'special-attack', ovr: 65 },
        { attribute: 'special-defense', ovr: 65 },
        { attribute: 'speed', ovr: 45 },
      ],
      // Series: Defines which chart type and data to use
      series: [
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'attribute',
          yKey: 'ovr',
        } as AgBarSeriesOptions,
      ],
    };
  }
}

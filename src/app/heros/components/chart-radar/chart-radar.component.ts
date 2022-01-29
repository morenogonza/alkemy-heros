import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html',
  styleUrls: ['./chart-radar.component.css'],
})
export class ChartRadarComponent implements OnInit, OnChanges {
  @Input() chartData: any;

  data: any = [];
  dataValues: number[] = [];
  labels: string[] = [];

  chartOptions: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    let values: any[] = [];
    Object.values(this.chartData).forEach((val: any, index) =>
      values.push(parseInt(val))
    );
    this.dataValues = values;

    let labelValues: any[] = [];
    Object.keys(this.chartData).forEach((val: any, index) =>
      labelValues.push(val)
    );
    this.labels = labelValues;
  }

  ngOnInit(): void {
    (this.chartOptions = this.getLightTheme()),
      (this.data = {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: '#64b5f61c',
            borderColor: '#0a82e2',
            pointBackgroundColor: '#0a82e2',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#0a82e2',
            pointHoverBorderColor: '#0a82e2',
            data: this.dataValues,
          },
        ],
      });
  }

  getLightTheme() {
    return {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          pointLabels: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
          angleLines: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}

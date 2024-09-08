import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart, ChartComponent } from "ng-apexcharts";
import * as echarts from 'echarts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-adminviewselected',
  templateUrl: './adminviewselected.component.html',
  styleUrls: ['./adminviewselected.component.css']
})
export class AdminviewselectedComponent implements OnInit {
  constructor() {
  }

  userData: any = [];
  ngOnInit(): void {
    this.userData.push({ value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' },
      { value: 200, name: 'Ads' },
    );
    console.log(this.userData);
    //this.displayGraph(this.userData);
    this.displayGraph1();
  }

  displayGraph1() {
    var chartDom = document.getElementById('main1') as HTMLElement;
    var myChart = echarts.init(chartDom);
    var option1;

    option1 = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015'],
          ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
          ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
          ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        ]
      },
      xAxis: [
        { type: 'category', gridIndex: 0 },
        { type: 'category', gridIndex: 1 }
      ],
      yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
      grid: [{ bottom: '55%' }, { top: '55%' }],
      series: [
        // These series are in the first grid.
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        // These series are in the second grid.
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
      ]
    };

    option1 && myChart.setOption(option1);
  }

  displayGraph(userData: any) {
    var chartDom = document.getElementById('main') as HTMLElement;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        //text: 'Referer of a Website',
        //subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'horizontal',
        left: 'top'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: userData
          /*
          [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]*/
          ,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    option && myChart.setOption(option);
  }
}

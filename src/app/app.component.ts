import {Component, OnInit} from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  maxX = 1000;
  minX = 0;
  maxY = 500;
  minY = 0;
  nodes = [{
    name: 'Node 1',
    x: 300,
    y: 300
  }, {
    name: 'Node 2',
    x: 800,
    y: 300
  }, {
    name: 'Node 3',
    x: 550,
    y: 100
  }, {
    name: 'Node 4',
    x: 550,
    y: 500
  }];
  updateOptions: any;
  options = {
    title: {
      text: 'QCue Take Home Exercise'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 60,
        roam: true,
        label: {
          normal: {
            show: true
          }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        data: [{
          name: 'Node 1',
          x: 300,
          y: 300
        }, {
          name: 'Node 2',
          x: 800,
          y: 300
        }, {
          name: 'Node 3',
          x: 550,
          y: 100
        }, {
          name: 'Node 4',
          x: 550,
          y: 500
        }],
        links: [{
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: {
              width: 5,
              curveness: 0.2
            }
          }
        }, {
          source: 'Node 2',
          target: 'Node 1',
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: { curveness: 0.2 }
          }
        }, {
          source: 'Node 1',
          target: 'Node 3'
        }, {
          source: 'Node 2',
          target: 'Node 3'
        }, {
          source: 'Node 2',
          target: 'Node 4'
        }, {
          source: 'Node 1',
          target: 'Node 4'
        }],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 2,
            curveness: 0
          }
        }
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  add(n: string) {
    n = n.trim();
    if (!n) { return; }
    this.nodes.push({
      name: n,
      x: Math.floor(Math.random() * (this.maxX - this.minX + 1)) + this.minX,
      y: Math.floor(Math.random() * (this.maxY - this.minY + 1)) + this.minY
    });

    this.updateOptions = {
      series: [{
        data: this.nodes
      }]
    };
    /* this.options.series[0].data.push({
      name: n,
      x: 300,
      y: 500
    }); */
  }
}

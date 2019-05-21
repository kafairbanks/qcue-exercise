import {Component, OnInit} from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nodeNameFormat = /^[a-zA-Z0-9]*$/;
  validNodeName = true;

  maxX = 400;
  maxY = 400;
  sameName = false;
  sameEdge = false;
  isLoading = false;

  nodes = [];
  edges = [];
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
        symbolSize: 20,
        roam: true,
        label: {
          normal: {
            show: true
          }
        },
        edgeSymbol: ['circle', 'circle'],
        edgeSymbolSize: [4, 4],
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        data: [],
        links: [],
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

  addNode(n: string) {
    this.sameName = false;
    this.sameEdge = false;
    this.isLoading = true;

    n = n.trim();
    if (!n) { this.isLoading = false; return; }

    this.validNodeName = this.nodeNameFormat.test(n);
    if (!this.validNodeName) { this.isLoading = false; return; }

    for (let i = 0; i < this.nodes.length; i++) {
      if (n === this.nodes[i].name) {
        this.sameName = true;
        this.isLoading = false;
        return;
      }
    }

    this.nodes.push({
      name: n,
      x: Math.floor(Math.random() * (this.maxX + 1)),
      y: Math.floor(Math.random() * (this.maxY + 1))
    });

    this.updateOptions = {
      series: [{
        data: this.nodes
      }]
    };
    this.isLoading = false;
  }

  addEdge(n1: string, n2: string) {
    this.sameName = false;
    this.sameEdge = false;
    this.isLoading = true;

    n1 = n1.trim();
    n2 = n2.trim();
    if (!n1 || !n2) { this.isLoading = false; return; }

    for (let i = 0; i < this.edges.length; i++) {
      if (this.edges[i].source === n1 && this.edges[i].target === n2) {
        this.sameEdge = true;
        this.isLoading = false;
        return;
      }
    }

    this.edges.push({
      source: n1,
      target: n2
    });
    this.edges.push({
      source: n2,
      target: n1
    })

    this.updateOptions = {
      series: [{
        links: this.edges
      }]
    };
    this.isLoading = false;
  }
}

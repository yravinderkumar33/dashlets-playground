import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-devices',
  templateUrl: './total-devices.component.html',
  styleUrls: ['./total-devices.component.css']
})
export class TotalDevicesComponent implements OnInit {

  @Input() type: string;
  @Input() sql: string;

  constructor() { }

  httpData: any;
  
  ngOnInit(): void { 
    this.httpData = {
      location: {
        url: '/druid/v2/sql',
        method: 'POST',
        options: {
          body: {
            "query": this.sql
          }
        }
      }
    }
  }

  config = {
    labelExpr: 'District',
    datasets: [
      { dataExpr: 'Total Devices', label: 'Total Devices' },
      { dataExpr: 'Old Devices', label: 'Total Old Devices' },
      { dataExpr: 'New Devices', label: 'Total New Devices' }
    ]
  };

}

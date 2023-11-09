import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  httpData = {
    location: {
      url: '/druid/v2/sql',
      method: 'POST',
      options: {
        body: {
          "query": "SELECT * from \"content-plays\""
        }
      }
    }
  }

  columnsConfiguration = {
    filters: [
      {
        "reference": "type",
        "controlType": "multi-select",
        "displayName": "Select Type",
        "placeholder": "Select Type",
        "label": "Select Portal/App",
        "searchable": true
      },
      {
        "reference": "District",
        "controlType": "multi-select",
        "displayName": "Select District",
        "placeholder": "Select District Name",
        "label": "District",
        "searchable": true
      },
      {
        "reference": "Total Plays",
        "controlType": "multi-select",
        "placeholder": "Select Total Count",
        "label": "Total Plays",
        "searchable": true
      },
      {
        "reference": "dateFormat",
        "controlType": "date",
        "placeholder": "Select Date Range",
        "label": "Select Date Range",
        "dateFormat": "DD-MM-YYYY"
      }
    ],
    order: [1, 'desc'],
    searchable: true,
    bFilter: true,
    paging: false,
    columnConfig: [
      { title: "District", data: "District" },
      { title: "Total Devices", data: "Total Devices" },
      { title: 'Total Plays Portal', data: 'Total Plays' },
      { title: 'Total Plays App', data: 'Total Plays' },
      { title: 'Total Count', data: 'Total Plays' },
      { title: 'Date', data: 'dateFormat' }
    ]
  }

}

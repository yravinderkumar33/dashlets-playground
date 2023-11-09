import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-plays-by-portal',
  templateUrl: './content-plays-by-portal.component.html',
  styleUrls: ['./content-plays-by-portal.component.css']
})
export class ContentPlaysByPortalComponent implements OnInit {


  constructor() { }

  ngOnInit(): void { }

  @Input() type: string;

  config = {
    labelExpr: 'District',
    datasets: [
      { dataExpr: 'Total Plays', label: 'Total Plays' },
      { dataExpr: 'Content Plays from old devices', label: 'Content Plays from old devices' },
      { dataExpr: 'Content Plays from new devices', label: 'Content Plays from new devices' }
    ]
  };

  httpData = {
    location: {
      url: '/druid/v2/sql',
      method: 'POST',
      options: {
        body: {
          "query": "SELECT * from \"content-plays\" where type='portal'"
        }
      }
    }
  }

}

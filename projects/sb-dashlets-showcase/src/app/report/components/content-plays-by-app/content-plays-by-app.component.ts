import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-plays-by-app',
  templateUrl: './content-plays-by-app.component.html',
  styleUrls: ['./content-plays-by-app.component.css']
})
export class ContentPlaysByAppComponent  {

  constructor() { }

  ngOnInit(): void { }
  
  @Input() type: string;

  handleEvent(eventData: any) {
    console.log('Received event:', eventData);
  }
  
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
          "query": "SELECT * from \"content-plays\" where type='app'"
        }
      }
    }
  }

}

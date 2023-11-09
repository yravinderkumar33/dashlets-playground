import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-number',
  templateUrl: './big-number.component.html',
  styleUrls: ['./big-number.component.css']
})
export class BigNumberComponent implements OnInit {

  constructor() { }

  @Input() operation: string;
  @Input() header: string;
  @Input() sql: string;
  @Input() dataExpr: string;


  config: Record<string, any>
  httpData: Record<string, any>

  ngOnInit(): void {
    
    this.config = {
      header: this.header,
      footer: this.operation,
      dataExpr: this.dataExpr,
      operation: this.operation
    }

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

}

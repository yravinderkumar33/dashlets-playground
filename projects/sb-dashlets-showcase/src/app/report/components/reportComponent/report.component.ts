import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  totalPlaysInApp="SELECT * from \"content-plays\" where type='app'"
  totalPlaysInPortal="SELECT * from \"content-plays\" where type='portal'"

}

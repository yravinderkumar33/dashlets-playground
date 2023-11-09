import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

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

  mapData = {
    filters: [
      {
        "reference": "District",
        "controlType": "multi-select",
        "placeholder": "Select District Name",
        "searchable": true
      },
      {
        "reference": "type",
        "controlType": "multi-select",
        "placeholder": "Select Platform Type",
        "searchable": true
      }
    ],
    "state": "Uttar Pradesh",
    "folder": "assets",
    "metrics": [
      "Total Plays",
      "Old Devices"
    ],
    "districts": [
      "Lucknow",
      "Allahabad",
      "Aligarh",
      "Azamgarh",
      "Jaunpur",
      "Bijnor",
      "Kanpur Nagar",
      "Ghaziabad",
      "Ghazipur",
      "Lakhimpur",
      "Agra",
      "Farrukhabad",
      "Bulandshehr",
      "Mathura",
      "Varanasi",
      "Ballia",
      "Fatehpur",
      "Unnao",
      "Gautam Buddh Nagar",
      "Ambedkar Nagar",
      "Saharanpur",
      "Bareilly"
    ],
    "labelExpr": "District",
    "controlTitle": "Uttar Pradesh Content Plays",
    "omitMetrics": ["st_code", "code", "year"]
  }

  ngOnInit(): void {
  }

}

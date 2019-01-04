import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  submenu = false;
  data = [
    {
      "name": "Dashboard",
      "url": "",
      "class": "fal fa-home",
      "submenu": [
        { "name": "submenu1" },
        { "name": "submenu2" },
        { "name": "submenu3" },
        { "name": "submenu4" },
      ]
    },
    {
      "name": "Icons",
      "url": "",
      "class": "fal fa-directions",
      "submenu": []
    },
    {
      "name": "Forms",
      "url": "form",
      "class": "fal fa-file-alt",
      "submenu": []
    },
    {
      "name": "Charts",
      "url": "",
      "class": "fal fa-chart-bar",
      "submenu": []
    },
    {
      "name": "Tables",
      "url": "table",
      "class": "fal fa-table",
      "submenu": []
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  showsub() {
    this.submenu = !this.submenu;
  }
}

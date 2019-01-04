import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nextlength = 5;
  prevlength = 0;
  page = 1;
  data = [];
  orgdata = [
    { "id": 101, "name": "Aravind", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 102, "name": "Ravi", "status": "Progress", "dob": "2018-12-18", "class": "badge badge-success", "course": "MBA", "address": "HYD" },
    { "id": 103, "name": "Kiran", "status": "On Hold", "dob": "2018-12-18", "class": "badge badge-danger", "course": "MCA", "address": "KMR" },
    { "id": 104, "name": "Rakesh", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 105, "name": "Rajesh", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 106, "name": "Suresh", "status": "On Hold", "dob": "2018-12-18", "class": "badge badge-danger", "course": "MCA", "address": "HYD" },
    { "id": 107, "name": "Ramesh", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MBA", "address": "KMR" },
    { "id": 108, "name": "Prashanth", "status": "Progress", "dob": "2018-12-18", "class": "badge badge-success", "course": "MCA", "address": "HYD" },
    { "id": 109, "name": "Sunil", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MBA", "address": "KMR" },
    { "id": 110, "name": "Anil", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 111, "name": "Raju", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "KMR" },
    { "id": 112, "name": "Ramu", "status": "On Hold", "dob": "2018-12-18", "class": "badge badge-danger", "course": "MBA", "address": "HYD" },
    { "id": 113, "name": "Harshal", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "KMR" },
    { "id": 114, "name": "Satya", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 115, "name": "Prakash", "status": "Progress", "dob": "2018-12-18", "class": "badge badge-success", "course": "MCA", "address": "HYD" },
    { "id": 116, "name": "Praveen", "status": "On Hold", "dob": "2018-12-18", "class": "badge badge-danger", "course": "MBA", "address": "KMR" },
    { "id": 117, "name": "Sravan", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MBA", "address": "HYD" },
    { "id": 118, "name": "Harish", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "KMR" },
    { "id": 119, "name": "Ravi", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 120, "name": "Lokesh", "status": "On Hold", "dob": "2018-12-18", "class": "badge badge-danger", "course": "MBA", "address": "KMR" }
  ];
  constructor() { }

  ngOnInit() {
    for (var i = this.prevlength; i < this.nextlength; i++) {
      this.data.push(this.orgdata[i]);
    }
  }
  remove(item) {
    if (confirm("Delete ?")) {
      let pos = this.data.indexOf(item);
      this.data.splice(pos, 1);
    }
  }
  next() {
    console.log("next called");
    if (this.nextlength <= this.orgdata.length) {
      this.nextlength += 5;
      this.prevlength += 5;
      this.page++;
    }
    this.data = [];
    for (var i = this.prevlength; i < this.nextlength; i++) {
      this.data.push(this.orgdata[i]);
    }
  }
  prev() {
    console.log("next called");
    if (this.nextlength <= this.orgdata.length) {
      this.nextlength -= 5;
      this.prevlength -= 5;
      this.page--;
    }
    this.data = [];
    for (var i = this.prevlength; i < this.nextlength; i++) {
      this.data.push(this.orgdata[i]);
    }
  }
}

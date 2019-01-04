import { Component, OnInit } from '@angular/core';
import { FormModel } from './form.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormModel;
  id;
  orgdata = [
    { "id": 101, "name": "Aravind", "gender": "Male", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 102, "name": "Ravi", "gender": "Male", "status": "Progress", "dob": "2018-12-18", "class": "badge badge-success", "course": "MBA", "address": "HYD" },
    { "id": 103, "name": "Kiran", "gender": "Male", "status": "On Hold", "dob": "2018-12-18", "class": "badge badge-danger", "course": "MCA", "address": "KMR" },
    { "id": 104, "name": "Rakesh", "gender": "Male", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 105, "name": "Rajesh", "gender": "Male", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 106, "name": "Suresh", "gender": "Male", "status": "On Hold", "dob": "2018-12-18", "class": "badge badge-danger", "course": "MCA", "address": "HYD" },
    { "id": 107, "name": "Ramesh", "gender": "Male", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MBA", "address": "KMR" },
    { "id": 108, "name": "Prashanth", "gender": "Male", "status": "Progress", "dob": "2018-12-18", "class": "badge badge-success", "course": "MCA", "address": "HYD" },
    { "id": 109, "name": "Sunil", "gender": "Male", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MBA", "address": "KMR" },
    { "id": 110, "name": "Anil", "gender": "Male", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 111, "name": "Raju", "gender": "Male", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "KMR" },
    { "id": 112, "name": "Ramu", "gender": "Male", "status": "On Hold", "dob": "2018-12-18", "class": "badge badge-danger", "course": "MBA", "address": "HYD" },
    { "id": 113, "name": "Harshal", "gender": "Male", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "KMR" },
    { "id": 114, "name": "Satya", "gender": "Male", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 115, "name": "Prakash", "gender": "Male", "status": "Progress", "dob": "2018-12-18", "class": "badge badge-success", "course": "MCA", "address": "HYD" },
    { "id": 116, "name": "Praveen", "gender": "Male", "status": "On Hold", "dob": "2018-12-18", "class": "badge badge-danger", "course": "MBA", "address": "KMR" },
    { "id": 117, "name": "Sravan", "gender": "Male", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MBA", "address": "HYD" },
    { "id": 118, "name": "Harish", "gender": "Male", "status": "DONE", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "KMR" },
    { "id": 119, "name": "Ravi", "gender": "Male", "status": "Rejected", "dob": "2018-12-18", "class": "badge badge-primary", "course": "MCA", "address": "HYD" },
    { "id": 120, "name": "Lokesh", "gender": "Male", "status": "On Hold", "dob": "2018-12-18", "class": "badge badge-danger", "course": "MBA", "address": "KMR" }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormModel();
    this.route.paramMap.subscribe(resp => {
      this.id = resp.get('id');
    });
    if (this.id) {
      this.edit();
    }
  }
  edit() {
    this.form = this.orgdata[this.id];
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  users: any;

  constructor() { }

  ngOnInit(): void {
    //this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  /*getUsers() {
    this.http.get<any>('https://localhost:5001/api/users').subscribe(
      response => {
        this.users = response;
      }
    )
  }*/

  registerEvent(event: boolean) {
    this.registerMode = event;
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';

  constructor(private acccountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }
  
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.acccountService.setCurrentUser(user)
  }

}

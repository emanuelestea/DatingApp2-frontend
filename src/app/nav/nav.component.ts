import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  //isLogged: boolean;

  constructor(
    public accountService: AccountService, 
    private router: Router,
    private toast: ToastrService,
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
    //this.getCurrentUser();
  }

  login() {
    this.accountService.login(this.model).subscribe(
      response => {
        this.router.navigateByUrl("/members");
        this.memberService.resetUserParams();
        //this.isLogged = true;
      },
      error => {
        this.toast.error(error.error);
      }
    )
  }

  logout() {
    //this.isLogged = false;
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  /*getCurrentUser() {
    this.accountService.currentUsers$.subscribe(user => {
      this.isLogged = !!user;
    })
  }*/
}

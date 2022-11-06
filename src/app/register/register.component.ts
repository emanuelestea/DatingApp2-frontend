import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //@Input() usersFromParent: any;
  @Output() sendback = new EventEmitter();

  model: any = {};

  constructor(
    private accountService: AccountService,
    private toast: ToastrService  
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(
      response => {
        console.log(response);
        this.cancel();
      },
      error => {
        this.toast.error(error.error);
      }
    )
    
  }

  cancel() {
    this.sendback.emit(false);
  }

}

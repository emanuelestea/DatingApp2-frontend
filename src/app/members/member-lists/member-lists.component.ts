import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-member-lists',
  templateUrl: './member-lists.component.html',
  styleUrls: ['./member-lists.component.css']
})
export class MemberListsComponent implements OnInit {

  //members: Member[];
  members$: Observable<Member[]> | undefined;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    //this.loadMember();
    this.members$ = this.memberService.getMembers();
  }

  /*loadMember() {
    this.memberService.getMembers().subscribe(
      response => {
        this.members = response;
      }
    )
  }*/

}

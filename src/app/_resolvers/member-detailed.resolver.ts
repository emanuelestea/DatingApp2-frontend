import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MemberService } from '../_services/member.service';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<boolean> {

  constructor(private memberService: MemberService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.memberService.getMember(route.paramMap.get('username'))
  }
}

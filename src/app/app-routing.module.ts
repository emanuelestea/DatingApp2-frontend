import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberListsComponent } from './members/member-lists/member-lists.component';
import { MessagesComponent } from './messages/messages.component';
import { GuardGuard } from './_guards/guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [GuardGuard],
    children: [
      { path: 'lists', component: ListsComponent },
      { path: 'members', component: MemberListsComponent, canActivate: [GuardGuard] },
      { path: 'member/:id', component: MemberDetailsComponent },
      { path: 'messages', component: MessagesComponent },
    ]
  },
  { path: '**', component: HomeComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

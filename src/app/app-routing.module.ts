import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ChatSideComponent } from './user/bars/chat-side/chat-side.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ChatsComponent } from './user/chats/chats.component';
import { GroupsComponent } from './user/groups/groups.component';
import { ContactsComponent } from './user/contacts/contacts.component';
import { SettingsComponent } from './user/settings/settings.component';
import { ConversationComponent } from './user/conversation/conversation.component';

const routes: Routes = [
  {
    path: 'gapshap', component: UserHomeComponent,
    children: [
      {
        path: '', component: UserDashboardComponent
      },
      {
        path: 'profile', component: ProfileComponent, outlet: 'chatside'
      },
      {
        path: 'chats', component: ChatsComponent, outlet: 'chatside'
      },
      {
        path: 'groups', component: GroupsComponent, outlet: 'chatside'
      },
      {
        path: 'contacts', component: ContactsComponent, outlet: 'chatside'
      },
      {
        path:'settings',component:SettingsComponent,outlet:'chatside'
      },
      {
        path:'conversation/:id',component:ConversationComponent,outlet:'convermain'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

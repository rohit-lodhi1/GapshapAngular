import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './user/bars/sidebar/sidebar.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ChatSideComponent } from './user/bars/chat-side/chat-side.component';
import { ChatsComponent } from './user/chats/chats.component';
import { GroupsComponent } from './user/groups/groups.component';
import { ContactsComponent } from './user/contacts/contacts.component';
import { SettingsComponent } from './user/settings/settings.component';
import { ConversationComponent } from './user/conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    UserDashboardComponent,
    SidebarComponent,
    ProfileComponent,
    ChatSideComponent,
    ChatsComponent,
    GroupsComponent,
    ContactsComponent,
    SettingsComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

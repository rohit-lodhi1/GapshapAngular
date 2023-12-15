import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../services/webSocket/web-socket.service';
import { User } from '../models/user';
import { ApiRoutes } from 'src/app/utils/api-routes';
import { AuthenticationService } from '../services/authentication.service';
import { MessageMappings } from 'src/app/Config/message-mappings';
import { UserStatus } from 'src/app/utils/constants/user-status';
declare var $: any;
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  ngOnInit(): void {
    this.intialiseStatusComponent();
  //  this.webSocketService.initializeWebSocketConnection();

  }
  constructor(private webSocketService: WebSocketService,private authService:AuthenticationService) { }


  users: User[] = [];
  imageUrl=ApiRoutes.IMAGE_URL;
  searchValue = "";
  userStatus=UserStatus;

  getAllChatUsers() {

  }


  search() {
    if(this.searchValue!=='')
    this.webSocketService.sendMessage(MessageMappings.USER_SEARCH, this.searchValue);
    console.log(this.searchValue);

    this.webSocketService.subscribe(MessageMappings.USER_SEARCH_GET).subscribe((data: any) => {
      console.log(data);
      this.users = data.data;
      if(this.users)
      this.users=this.users.filter(f=>{
         return f.email !== this.authService.getEmail();
      })
    });

  }










  intialiseStatusComponent() {
    $("#user-status-carousel").owlCarousel({
      items: 4,
      loop: false,
      margin: 16,
      nav: false,
      dots: false
    });
  }



}

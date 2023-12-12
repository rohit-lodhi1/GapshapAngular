import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../services/webSocket/web-socket.service';
import { MessageMappings } from 'src/app/Config/message-mappings';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit{

  constructor(private webSocketService:WebSocketService){}
  ngOnInit(): void {
    
   this.webSocketService.initializeWebSocketConnection();
  }


}

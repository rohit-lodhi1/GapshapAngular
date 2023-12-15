import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { WebSocketService } from '../../services/webSocket/web-socket.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private authService:AuthenticationService,private router:Router,private webSocketService:WebSocketService){}

logOut(){
  Swal.fire({
    title: "Are you sure?",
    text: "You  want to logOut?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#7269ef",
    cancelButtonColor: "#7CD1F2",
    confirmButtonText: "Logout"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Logging out",
        icon: "success"
      });
      this.authService.logOut();
      
      this.webSocketService.disConnect(); 
    }
  });
}
}


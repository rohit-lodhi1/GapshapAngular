import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { ApiRoutes } from 'src/app/utils/api-routes';
import { ConversationService } from '../services/conversation.service';
import { ConversationRequest } from '../payload/conversation-request';
import { Conversation } from '../models/conversation';
import { AppUtils } from 'src/app/utils/app-utils';

declare var $: any;

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  ngOnInit(): void {
    this.intializeBar();
    this.activatedRoute.params.subscribe((param: any) => {
      let id = param['id'];
      this.getUserById(id);
      
    })
  }

  imageUrl = ApiRoutes.IMAGE_URL;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,private conversationService:ConversationService) { }

  user: User = new User();
  conversation:Conversation=new Conversation();
  getUserById(id: any) {
    this.userService.getUserById(id).subscribe((data: any) => {
      this.user = data.data;
      console.log(this.user);
      this.getConversation();
    })
  }

conversationRequest:ConversationRequest = new ConversationRequest();

  getConversation(){
     this.conversationRequest.recipient=this.user.id;
     this.conversationService.getConversation(this.conversationRequest).subscribe((data:any)=>{
         this.conversation = data.data;
         console.log(data);
         
         AppUtils.showMessage('success','Conversation created successfully');
     },err=>{
         this.conversationService.createConversation(this.conversationRequest).subscribe((data:any)=>{
           console.log(data);
           this.conversation = data.data;
           AppUtils.showMessage('success','Conversation created successfully');
         })
     })   
  }



  @ViewChild('di') div!: ElementRef;

  intializeBar() {
    // Ensure the DOM is ready before executing your script
    $(document).ready(function () {
      // Handle user-profile-hide click event
      $("#user-profile-hide").click(function () {

        $(".user-profile-sidebar").hide();
      });

      // Handle user-profile-show click event
      $(".user-profile-show").click(function () {
        $(".user-profile-sidebar").show();
      });

      // Handle chat-user-list item click event
      $(".chat-user-list li a").click(function () {
        $(".user-chat").addClass("user-chat-show");
      });

      // Handle user-chat-remove click event
      $(".user-chat-remove").click(function () {
        $(".user-chat").removeClass("user-chat-show");
      });
    });
  }

  fileInput(event: any) {
    console.log(event.target.files[0]);


  }
  openFileInput() {
    // Trigger a click on the hidden file input
    const fileInput = document.getElementById("file") as HTMLInputElement;
    fileInput.click();
  }


  isProfileOpen = false;

  toggleProfile(open: boolean) {
    if (open)
      this.div.nativeElement.style = 'width:30% !important'
    else
      this.div.nativeElement.style = 'width:100% !important'

  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit,AfterViewInit{
  ngAfterViewInit(): void {
  //  this.div.nativeElement.style='width:100% !important'
  }
  ngOnInit(): void {
    this.intializeBar();
  }

  @ViewChild('di') div!:ElementRef ;

intializeBar(){
     // Ensure the DOM is ready before executing your script
     $(document).ready(function() {
      // Handle user-profile-hide click event
      $("#user-profile-hide").click(function() {
       
          $(".user-profile-sidebar").hide();
      });

      // Handle user-profile-show click event
      $(".user-profile-show").click(function() {
          $(".user-profile-sidebar").show();
      });

      // Handle chat-user-list item click event
      $(".chat-user-list li a").click(function() {
          $(".user-chat").addClass("user-chat-show");
      });

      // Handle user-chat-remove click event
      $(".user-chat-remove").click(function() {
          $(".user-chat").removeClass("user-chat-show");
      });
  });
}

  fileInput(event:any){
    console.log(event.target.files[0]);
    

  }
  openFileInput() {
    // Trigger a click on the hidden file input
    const fileInput = document.getElementById("file") as HTMLInputElement;
            fileInput.click();
}


isProfileOpen = false;

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }
 
}

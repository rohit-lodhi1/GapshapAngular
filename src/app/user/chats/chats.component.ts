import { Component, OnInit } from '@angular/core';
declare var $: any; 
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit{
  ngOnInit(): void {
 this.intialiseStatusComponent();
  }

intialiseStatusComponent(){
  $("#user-status-carousel").owlCarousel({
    items: 4,
    loop: false,
    margin: 16,
    nav: false,
    dots: false
  });
}

}

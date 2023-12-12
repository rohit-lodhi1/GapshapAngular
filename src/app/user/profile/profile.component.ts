import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


  openFileInput(id: any) {
    // Trigger a click on the hidden file input
    const fileInput = document.getElementById(id) as HTMLInputElement;
    fileInput.click();
  }

  imagePreview='assets/images/users/avatar-1.jpg';

  changeImage(event:any){
     event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e:any)=>{
      this.imagePreview = e.target.result    
    }
    reader.readAsDataURL(event.target.files[0]);
  }
}

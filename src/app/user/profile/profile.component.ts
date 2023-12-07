import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


  openFileInput() {
    // Trigger a click on the hidden file input
    const fileInput = document.getElementById("file") as HTMLInputElement;
            fileInput.click();
}
}

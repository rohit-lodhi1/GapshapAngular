import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserRegistration } from '../../payload/user-registration';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { delay } from 'rxjs';
import { Router } from '@angular/router';
import { AppUtils } from 'src/app/utils/app-utils';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private authService:AuthenticationService,private router:Router){}

public userRegistration:UserRegistration = new UserRegistration();
  

  public register(){

     this.authService.registerUser(this.userRegistration).subscribe((data:any)=>{
      console.log(data);
      AppUtils.showMessage('success',data.message)
      
         window.setTimeout( () =>{
          AppUtils.showMessage('success',data.emailStatus)
         },3000);
         this.authService.setEmail(data.email);
         this.router.navigate(['otp'])
        
     },err=>{
      AppUtils.showMessage('error',err.error.message);
     })
  }

}

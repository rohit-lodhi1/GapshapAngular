import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistration } from '../payload/user-registration';
import { ApiRoutes } from 'src/app/utils/api-routes';
import { VerificationRequest } from '../payload/verification-request';
import { LoginRequest } from '../payload/login-request';
import { Router } from '@angular/router';
import { ResendOtpRequest } from '../payload/resend-otp-request';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  otpCount=0;

  constructor(private httpClient: HttpClient, private router: Router) { }

  // user registration
  public registerUser(userRegistration: UserRegistration) {
    return this.httpClient.post(ApiRoutes.USER_REGISTRATION, userRegistration);
  }

  public verifyOtp(verificationRequest: VerificationRequest) {
    return this.httpClient.post(ApiRoutes.USER_VERIFY, verificationRequest);
  }


  public login(loginRequest: LoginRequest) {
    return this.httpClient.post(ApiRoutes.USER_LOGIN, loginRequest);
  }

  // fetching current user
  public currentUser() {
    return this.httpClient.get(ApiRoutes.USER_CURRENT);
  }

  public resendOtp(resendRequest: ResendOtpRequest) {
    return this.httpClient.post(ApiRoutes.OTP_RESEND, resendRequest);
  }


  setToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    let token = localStorage.getItem("accessToken");
    return token === undefined ? null : token;
  }

  setEmail(email: string) {
    localStorage.setItem('email', email);
  }


  getEmail() {
    let email = localStorage.getItem("email");
    return email === undefined ? null : email;
  }

  isLoggedIn(){
    return this.getToken()!=null?true:false
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}

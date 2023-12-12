import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/api-routes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUserById(id:any){
    return this.httpClient.get(ApiRoutes.USER_BY_ID+id);
  }

  getUserStatusById(id:any){
return this.httpClient.get(ApiRoutes.USER_STATUS_GET+`/${id}`);
  }
}

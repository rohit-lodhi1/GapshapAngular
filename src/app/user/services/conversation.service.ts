import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConversationRequest } from '../payload/conversation-request';
import { ApiRoutes } from 'src/app/utils/api-routes';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private httpClient:HttpClient) { }

  public createConversation(conversationRequest:ConversationRequest){
     return this.httpClient.post(ApiRoutes.CONVERSATION_CREATE,conversationRequest);
  }

  public getConversation(conversationRequest:ConversationRequest){
    return this.httpClient.post(ApiRoutes.CONVERSATION_GET,conversationRequest);
  }
}

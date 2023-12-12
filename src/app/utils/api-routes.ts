export class ApiRoutes {
  public static BASE_URL = 'http://localhost:8080/gapshap'

  public static IMAGE_URL = "http://localhost:8080/gapshap/auth/profileImage/"


  //   ---------- User ----------------
  public static USER_REGISTRATION = this.BASE_URL + '/auth/';
  public static USER_VERIFY = this.BASE_URL + '/auth/verify';
  public static USER_LOGIN = this.BASE_URL + '/auth/login';
  public static USER_CURRENT = this.BASE_URL + '/auth/current-user';
  public static OTP_RESEND = this.BASE_URL + '/auth/resend';
  public static USER_BY_ID = this.BASE_URL + "/user/"
  public static USER_STATUS_GET  =this.BASE_URL +"/user/status/";


  //   ---------- Conversation -----------
  public static CONVERSATION_CREATE = this.BASE_URL +"/conversation/";
  public static CONVERSATION_GET = this.BASE_URL +"/conversation/get";

}

import { InvitaionStatus } from "src/app/utils/constants/invitaion-status";
import { User } from "./user";

export class Invitation {

    sender!:User;
    recipient!:User;
    requestStatus!:InvitaionStatus;
}

import { ObjectId } from "mongodb";

export class PasswordReset {
  public _id?: ObjectId;
  public token: string;
  public userId: ObjectId;
  public expireAt = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3); // 3 days
}

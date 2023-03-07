import { ObjectId } from "mongodb";

export enum ApplicationState {
  Pending = "Pending",
  Shortlisted = "Shortlisted",
  Hidden = "Hidden",
}

// this represents a tutor applying to a tutor request
export default class TutorApplication {
  public _id?: ObjectId;
  public tutorRequest: ObjectId;
  public tutor: ObjectId;
  public state: ApplicationState = ApplicationState.Pending;

  public static assign(obj: TutorApplication) {
    const newObject = new TutorApplication();
    Object.assign(newObject, obj);
    return newObject;
  }

  toJSON() {
    return {
      id: this._id,
      tutorRequest: this.tutorRequest,
      tutor: this.tutor,
      state: this.state,
    };
  }
}
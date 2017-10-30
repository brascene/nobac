class UserProfile {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get currentProgress() {
    return this.currentProgress;
  }
}

UserProfile.schema = {
  name: "UserProfile",
  properties: {
    firstName: "string",
    lastName: "string",
    age: "int",
    userImage: "data?",
    currentProgress: "int"
  }
};

export default UserProfile;

class User {
  email: string;
  name: string;
  readonly city: string = "kolkata";
  constructor(email: string, name: string) {
    (this.email = email), (this.name = name);
  }
}

const sovan = new User("roysovan@gmail.com", "sovan");
//  sovan.city = "midnapur"; // Cannot assign to 'city' because it is a read-only property.
console.log(sovan);

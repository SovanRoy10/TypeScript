/*class User {
  email: string;
  name: string;
  readonly city: string = "kolkata";
  constructor(email: string, name: string) {
    (this.email = email), (this.name = name);
  }
}

const sovan = new User("roysovan@gmail.com", "sovan");
//  sovan.city = "midnapur"; // Cannot assign to 'city' because it is a read-only property.
console.log(sovan); */


/*
//private , public
class User {
  private email: string;
  name: string;
  private readonly city: string = "kolkata";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const sovan = new User("roysovan@gmail.com", "sovan");
//   console.log(sovan.city);  // Property 'city' is private and only accessible within class 'User'

class User1 {
  constructor(
    public email: string, 
    public name: string,
    private userId : string
    ) {

    }
} */



// getters and setters 

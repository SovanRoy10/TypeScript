type User1 = {
  readonly _id: string;
  name: string;
  isPaid: boolean;
  email: string;
  creditCardDetails?: number; // optional
};

let myUser: User1 = {
  _id: "123456",
  name: "sr",
  email: "s@r.com",
  isPaid: false,
};

myUser.email = "yoyo@gmail.com";
// myUser._id = "999"; // Cannot assign to '_id' because it is a read-only property

type cardNumber = {
  cardNumber: string;
};

type carddate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardNumber & {
    cvv: number;
  };

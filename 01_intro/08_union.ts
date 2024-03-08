let score: number | string | boolean = 33;

score = 44;
score = "55";
score = true;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let user1: User | Admin = { name: "sovan", id: 1234 };

user1 = { username: "sovan", id: 1234 };

function getDbId(id: number | string) {
  // making some API calls
  if (typeof id === "string") {
    id.toLowerCase();
  }
  console.log(`DB id is : ${id}`);
}
getDbId(3);
getDbId("4");

const data: (number | string)[] = [1, 2, 3, 4, 5, "34"];

let pi: 3.14 = 3.14;
// pi = 3.145;

let seatAllotment: "aisle" | "middle" | "window";

// seatAllotment = "crew";

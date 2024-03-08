function getUpper(value: string) {
  return value.toUpperCase();
}

getUpper("Sovan");

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("sovan", "roysovan@gmail.com");

function addTwo(num: number): number {
  // return "hello";
  return num + 2;
}

addTwo(5);
// addTwo("2");

// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
  return `hero is ${hero}`;
  //   return 12;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
  // return 404;
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};

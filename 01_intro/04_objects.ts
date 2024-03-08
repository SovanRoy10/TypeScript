const user = {
  name: "Sovan",
  email: "roysovan@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: "sovan", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 0 };
}

// weird thing
let newUser = { name: "sovan", isPaid: true, email: "roysovan@gmail.com" };
createUser(newUser);

export {};

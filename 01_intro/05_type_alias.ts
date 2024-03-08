type User = {
  name: string;
  isPaid: boolean;
  email: string;
};

function createUser(user: User): User {
  return { name: "", email: "", isPaid: true };
}

createUser({ name: "", email: "", isPaid: true });



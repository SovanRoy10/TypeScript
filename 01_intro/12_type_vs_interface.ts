interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //  startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string): number;
}

// reponening the interface
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const sovan: Admin = {
  dbId: 10,
  email: "roysovan@gmail.com",
  userId: 123,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "sovan10") => {
    return 10;
  },
  githubToken: "123sroy",
  role: "learner",
};

sovan.email = "yoyo@gmail.com";
// sovan.dbId = 11; // Cannot assign to 'dbId' because it is a read-only property

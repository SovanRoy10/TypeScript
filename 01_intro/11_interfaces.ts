interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //  startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string): number;
}

const sovan: User = {
  dbId: 10,
  email: "roysovan@gmail.com",
  userId: 123,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "sovan10") => {
    return 10;
  },
};

sovan.email = "yoyo@gmail.com";
// sovan.dbId = 11; // Cannot assign to 'dbId' because it is a read-only property

export {}

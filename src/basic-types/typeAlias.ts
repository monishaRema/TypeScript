type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gerder: "male" | "female";
  phone: string;
  address: {
    division: string;
    city: string;
  };
};
const user1: User = {
  id: 10,
  name: {
    firstName: "moni",
    lastName: "rema",
  },
  gerder: "female",
  phone: "3455",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

const user2: User = {
  id: 10,
  name: {
    firstName: "moni",
    lastName: "rema",
  },
  gerder: "female",
  phone: "3455",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};





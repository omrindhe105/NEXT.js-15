// dummyData.ts

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
};

export const users: User[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Admin",
    isActive: true,
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya@example.com",
    role: "Teacher",
    isActive: true,
  },
  {
    id: 3,
    name: "Amit Verma",
    email: "amit@example.com",
    role: "Student",
    isActive: false,
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    email: "sneha@example.com",
    role: "Student",
    isActive: true,
  },
];

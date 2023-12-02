import bcrypt from "bcryptjs";

const users = [
  {
    name: "test",
    email: "test@gmail.com",
    password: bcrypt.hashSync("123456"),
  },
];
export default users;

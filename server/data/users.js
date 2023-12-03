import bcrypt from "bcryptjs";

const users = [
  {
    name: "test",
    email: "test@gmail.com",
    password: bcrypt.hashSync("123456"),
    birthdate: "2001-06-23T00:00:00",
    gender: "male",
    nativelanguage: "Mongolian",
    learninglanguage: "English",
    interest: "Coffee",
  },
  {
    name: "goku",
    email: "goku@gmail.com",
    password: bcrypt.hashSync("123456"),
    birthdate: "2001-06-01T00:00:00",
    gender: "female",
    nativelanguage: "English",
    learninglanguage: "Mongolian",
    interest: "Hiking",
  },
];
export default users;

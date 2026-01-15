export const RegisterRequestDTO = {
  nid: { require: true, message: "Nid Number is required" },
  fullName: { require: true, message: "Full name is required" },
  phoneNumber: { require: false, message: null },
  email: { require: true, message: "Email is required" },
  password: { require: true, message: "Password is required" },
};

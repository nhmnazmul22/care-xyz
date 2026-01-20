export const RegisterRequestDTO = {
  nid: { require: true, message: "Nid Number is required" },
  fullName: { require: true, message: "Full name is required" },
  phoneNumber: { require: false, message: null },
  email: { require: true, message: "Email is required" },
  password: { require: true, message: "Password is required" },
};

export const LoginRequestDTO = {
  email: { require: true, message: "Email is required" },
  password: { require: true, message: "Password is required" },
};

export const bookServiceDTO = {
  serviceId: { require: true, message: "Service id required" },
  serviceTitle: { require: true, message: "Service title required" },
  serviceImage: { require: false, message: null },
  bookingAddress: { require: true, message: "Booking Address required" },
  duration: { require: true, message: "Duration required" },
  durationType: { require: true, message: "Duration type required" },
};

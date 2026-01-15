export const RequestValidation = (data = {}, schema = {}) => {
  if (typeof data !== "object" || typeof schema !== "object") {
    return {
      isError: true,
      errors: {
        _global: "Data and Schema must be valid objects.",
      },
    };
  }

  const errors = {};

  Object.keys(schema).forEach((key) => {
    const rule = schema[key];

    if (rule.required && !data[key]) {
      errors[key] = rule.message || "This field is required";
    }
  });

  return {
    isError: Object.keys(errors).length > 0,
    errors,
  };
};

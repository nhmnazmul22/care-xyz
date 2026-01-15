import React from "react";

const ErrorMessages = ({ errors }) => {
  return (
    <ul className="list-disc pl-4 space-y-1">
      {Object.values(errors).map((err, i) => (
        <li key={i}>{err}</li>
      ))}
    </ul>
  );
};

export default ErrorMessages;

const formatErrorMessage = (errorString) => {
  if (errorString.includes("auth/wrong")) {
    return "Sorry! Invalid email or password";
  } else if (errorString.includes("auth/email-already-in-use")) {
    return "Oops! Email already in use by anouther user";
  } else {
    return "Something went wrong";
  }
};

export default formatErrorMessage;

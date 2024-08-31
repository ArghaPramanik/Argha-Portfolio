// Utility function to validate a string with a maximum length
export function validateString(value, maxLength) {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
}

// Utility function to extract an error message from an error object
export function getErrorMessage(error) {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
}

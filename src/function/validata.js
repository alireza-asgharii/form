const validata = (data, type) => {
  const err = {};
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (data.email === "") {
    err.email = "Please enter your email";
  } else if (!regex.test(data.email)) {
    err.email = "The email is invalid";
  } else {
    delete err.email;
  }

  if (data.password === "") {
    err.password = "Please enter your password";
  } else if (data.password.length  < 6) {
    err.password = "Password must be more than 6 characters";
  } else {
    delete err.password;
  }

  if (type === "register") {
    if (!data.name.trim()) {
      err.name = "Please enter your name";
    } else {
      delete err.name;
    }
    if (data.confirmPassword.length  < 6) {
      err.confirmPassword = "Confirm the password";
    } else if (data.confirmPassword !== data.password) {
      err.confirmPassword = "The passwords do not match";
    } else {
      delete err.confirmPassword;
    }

    if (!data.checkbox) {
      err.checkbox = "Confirm the rules";
    } else {
      delete err.checkbox;
    }
  }

  return err;
};

export { validata };

function validateCvv(value) {
  let re = RegExp("^[0-9]{3}$");
  if (re.test(String(value)) || value === "") {
    this.msg["cvv"] = "";
  } else {
    this.msg["cvv"] = "Wrong cvv!";
  }
}
function validateFullName(value) {
  let re = RegExp(
    /^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuQqWwXxVvYyZzŹźŻż]+$/
  );

  if (re.test(String(value)) || value === "") {
    this.msg["fullName"] = "";
  } else {
    this.msg["fullName"] = "Wrong name!";
  }
}
function validateCity(value) {
  let re = RegExp(
    /^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwQqXxVvYyZzŹźŻż ]+$/
  );

  if (re.test(String(value)) || value === "") {
    this.msg["city"] = "";
  } else {
    this.msg["city"] = "Wrong city!";
  }
}

function validateAddress(value) {
  let re = RegExp(
    /[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwQqXxVvYyZzŹźŻż]{3}/
  );
  if (re.test(String(value)) || value === "") {
    this.msg["address"] = "";
  } else {
    this.msg["address"] = "Wrong address!";
  }
}

function validateZipCode(value) {
  let re = RegExp(/[0-9][0-9]-[0-9][0-9][0-9]$/);
  if (re.test(String(value)) || value === "") {
    this.msg["zipCode"] = "";
  } else {
    this.msg["zipCode"] = "Number is wrong!";
  }
}
function validateEmail(value) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  let email = value.toLowerCase();
  console.log(email);
  if (re.test(String(email)) || value === "") {
    this.msg["email"] = "";
  } else {
    this.msg["email"] = "Wrong email!";
  }
}
function validateContactNumber(value) {
  let re = RegExp(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/);
  if (re.test(String(value)) || value === "") {
    this.msg["contactNumber"] = "";
  } else {
    this.msg["contactNumber"] = "Number is wrong!";
  }
}
function validateValidCard(value) {
  let re = RegExp(/[0-1][0-9][/][0-9][0-9]$/);
  let currentDate = new Date();
  let month = String(currentDate.getMonth() + 1);
  let year = String(currentDate.getFullYear()).substring(2, 4);
  let inputMonth = value.substring(0, 2);
  let inputYear = value.substring(3, 5);
  if (
    (inputYear > year && re.test(String(value)) && inputMonth < "13") ||
    value === ""
  ) {
    this.msg["cvv"] = "";
  } else if (inputYear == year) {
    if (inputMonth >= month && inputMonth < "13") {
      this.msg["cvv"] = "";
    } else {
      this.msg["cvv"] = "Wrong valid card!";
    }
  } else {
    this.msg["cvv"] = "Wrong valid card!";
  }
}

function validateCardNumber(value) {
  let re = new RegExp("^[0-9]{16}$");
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    let intVal = parseInt(value.substr(i, 1));
    if (i % 2 == 0) {
      intVal *= 2;
      if (intVal > 9) {
        intVal = 1 + (intVal % 10);
      }
    }
    sum += intVal;
  }
  if ((re.test(value) && sum % 10 === 0) || value === "") {
    this.msg["cvv"] = "";
  } else {
    this.msg["cvv"] = "Wrong number card!";
  }
}

export {
  validateCvv,
  validateCardNumber,
  validateZipCode,
  validateEmail,
  validateContactNumber,
  validateValidCard,
  validateFullName,
  validateAddress,
  validateCity,
};

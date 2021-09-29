const axios = require("axios");

module.exports = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    return { firstname: "Yomar", lastname: "Gutierrez" };
  },
  fetchUser: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((e) => console.log(e));
  },
};

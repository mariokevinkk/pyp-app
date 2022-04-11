import axios from "axios";

// Send a POST request

export const getUsers = () => {
  return axios({
    method: "get",
    url: "https://reqres.in/api/users?page=2",
  });
};

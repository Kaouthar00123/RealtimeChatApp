import axios from "axios";

export default async function get(url) {
  axios
    .get(url)
    .then((response) => {
      console.log("response.data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("error: ", error);
      return "error";
    });
}

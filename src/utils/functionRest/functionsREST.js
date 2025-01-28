import axios from "axios";

export default async function addnewelement(url, data) {
  axios({
    method: "post",
    url: url,
    data: data,
  })
    .then((response) => {
      console.log(
        `Succes lorsque ajoute d'element ${data} dans requete, status: ${response.status}`
      );
      return response;
    })
    .catch(() => {
      console.log(`err lorsque ajoute d'element ${data} dans requete`);
      return "errer";
    });
}

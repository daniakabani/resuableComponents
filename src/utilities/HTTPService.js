import axios from "axios";

const HTTPService = async (
  method = "GET",
  link = "https://jsonplaceholder.typicode.com/todos",
  data = {}
) => {
  switch (method) {
    case "GET":
      return axios.get(link);
    case "POST":
      return axios.post(
        link,
        {
          ...data,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
    default:
      return axios.get(link);
  }
};

// eslint-disable-next-line
export { HTTPService };

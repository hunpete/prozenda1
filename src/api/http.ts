import axios from "axios";

const http = axios.create({
  baseURL: "http://swapi.dev/api/",
});

export default http;

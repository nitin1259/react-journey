import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-react-app-3abe8-default-rtdb.firebaseio.com/",
});

export default instance;

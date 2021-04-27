import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-react-36bf4-default-rtdb.firebaseio.com/",
});

export default instance;

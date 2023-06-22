import axios from "axios";

const PORT = 4000;
const baseURL = `http://localhost:${PORT}/`;
export default axios.create({
  baseURL,
});

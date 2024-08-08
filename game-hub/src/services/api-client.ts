import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "68fadb44593d4273a3783baa310424dd",
  },
});

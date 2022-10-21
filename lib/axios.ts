import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: "https://anilabo.onrender.com/api/v1",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
})

export default axios

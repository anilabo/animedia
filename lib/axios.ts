import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: `${process.env.ANILABO_URL}/api/v1`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
})

export default axios

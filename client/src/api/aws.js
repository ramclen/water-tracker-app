import axios from "axios";

const aws = axios.create({
  baseURL: `https://5a3e7m52uc.execute-api.us-east-1.amazonaws.com/dev`
})

export default aws;
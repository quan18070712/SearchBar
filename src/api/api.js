import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XnxtutTh0WnDPoRZMdMsSgWecE5809bDVTzvluTgKvA",
  },
});

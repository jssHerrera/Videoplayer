import axios from "axios";
import { BASE_URL } from "./seting";

// const options = {
//   headers: {
//     "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

// export const getVideos = async (link) => {
//   const url = `${BASE_URL}/${link}`;
//   const respuesta = await fetch(url, options);
//   const { items } = await respuesta.json();
//   return items;
// };
// -----------------------------------------------

const options = {
  params: {
    maxResults: 8,
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const getVideos = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

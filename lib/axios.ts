import axios from "axios";

const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY; // Store API key in .env

const axiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
  params: {
    per_page: 400, // Number of images per request
  },
});

export { axiosInstance};

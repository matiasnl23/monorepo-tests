import axios, { Axios } from "axios";

let client: Axios = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

export const setClient = (customClient: Axios) => {
  client = customClient;
};

export const getClient = () => client;

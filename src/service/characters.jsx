import React from "react";
import CryptoJS from "crypto-js";

const time_stamp = new Date().getTime();
const private_api_key = "57deff65bd5eed4f04430160861c47fd116aa717";
const public_api_key = "2d50881383c0cb0902e6a068872019fa";

const hash = CryptoJS.MD5(
  time_stamp + private_api_key + public_api_key
).toString();

export const reqCharacters = async (currentpage, character = "") => {
  const offset = (currentpage - 1) * 20;
  let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`;
  character !== null && character !== ""
    ? (url = `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}&nameStartsWith=${character}`)
    : null;
  const resp = await fetch(url);
  const { data } = await resp.json();
  return data;
};

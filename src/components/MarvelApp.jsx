import React from "react";
import CryptoJS from "crypto-js";
import { useState } from "react";
import { useEffect } from "react";

export const MarvelApp = () => {
  const [characters, setCharacters] = useState();

  const time_stamp = new Date().getTime();
  const private_api_key = "57deff65bd5eed4f04430160861c47fd116aa717";
  const public_api_key = "2d50881383c0cb0902e6a068872019fa";

  const hash = CryptoJS.MD5(
    time_stamp + private_api_key + public_api_key
  ).toString();

  useEffect(
    async() => {
      const reqCharacters = async () => {
        const resp = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}`
        );
        const { data } = await resp.json()

        setCharacters(data.results)
        console.log(characters)
        
      }
      reqCharacters()
    },
    [] /*depencias*/
  );

  return <>{characters.map((char)=>(
    console.log(char)
    
  ))}</>;
};

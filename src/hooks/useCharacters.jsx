import { useState, useEffect } from "react";
import { reqCharacters } from "../service/characters";

export const useCharacters = (currentpage, searchCharacter) => {
  const [characters, setCharacters] = useState([]);
  const [total, setTotal] = useState();

   

  useEffect(() => {
    
    reqCharacters(currentpage, searchCharacter).then((data)=>{
        setCharacters(data.results)
        setTotal(data.total)
    })
  }, [currentpage, searchCharacter]);



  return {
    characters,
    total
  };
};

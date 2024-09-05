import { useCharacters } from "../hooks/useCharacters";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { GridCharacters } from "./GridCharacters";
import { useState} from "react";
import { SearchCharacter } from "./SearchCharacter";

export const MarvelApp = () => {
  const [currentpage, setCurrentpage] = useState()
  const [searchCharacter, setSearchCharacter] = useState("");
  const { characters, total } = useCharacters(currentpage, searchCharacter);

  const handleSearch = (character) => {
    setSearchCharacter(character); // Actualiza el término de búsqueda
  };
  

  return (
    <>
    <SearchCharacter onSearch={handleSearch}/>
      <GridCharacters characters={characters}/>
      <Pagination className="d-flex justify-content-center mt-5" count={Math.round(total/20)} onChange={(e,value)=>{setCurrentpage(value)}} />
    </>
  );
};

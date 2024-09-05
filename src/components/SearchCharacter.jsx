import {useState} from "react"

export const SearchCharacter = ({onSearch}) => {
    const [character, setCharacter] = useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        onSearch(character)
    }
    return (
      <>
        <div className="container d-flex flex-row justify-content-center align-items-center mt-5">
          <form
            className="d-flex"
            onSubmit={handleSubmit}
          >
            <input
              className=" form-control"
              type="text"
              onChange={(e) => {
                setCharacter(e.target.value);
              }}
            />
            <input className=" btn btn-outline-success" type="submit"></input>
          </form>
        </div>
      </>
    );
  };
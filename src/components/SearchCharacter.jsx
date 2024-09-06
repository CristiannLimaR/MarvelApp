import { useState } from "react"

export const SearchCharacter = ({ onSearch }) => {
  const [character, setCharacter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(character)
  }
  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body">
        <div className="container-fluid">
          <img height={200} onClick={() => window.location.reload()} src="https://th.bing.com/th/id/R.93c903b1d44702c0539c513efe05cf3d?rik=5jZCxHnRN5PJVw&pid=ImgRaw&r=0"></img>
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
      </nav>


    </>
  );
};
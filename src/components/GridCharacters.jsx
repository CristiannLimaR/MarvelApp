export const GridCharacters = ({characters}) => {
  return (
    <>
      <div className="d-flex flex-row row row-cols-4">
        {characters &&
          characters.map((char) => (
            <div key={char.id}>
              <li>{char.name}</li>
              <img
                style={{ width: "25rem" }}
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              ></img>
            </div>
          ))}
      </div>
    </>
  );
};

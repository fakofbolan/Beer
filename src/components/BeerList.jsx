import "./BeerList.scss";

export const BeerList = ({ beerList, setBeerButton }) => {
  const handleClick = (e) => {
    setBeerButton(e.target.id);
  };
  return (
    <div className="beer-list" onClick={handleClick}>
      {beerList.map((p, i) => (
        <div className="beer-list-wrapper" id={i} key={p.name}>
          <h2 className="beer-list-name">{p.name}</h2>
          <img src={p.image_url} alt="" className="beer-list-image" />
        </div>
      ))}
    </div>
  );
};

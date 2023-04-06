import { useEffect, useState } from "react";
import "./App.scss";
import Beer from "./components/Beer";
import { Button } from "./components/Button";
import { BeerList } from "./components/BeerList";
import { BeerMug } from "./components/BeerMug";

const API_URL = "https://api.punkapi.com/v2/beers/random";
const API_URL2 = "https://api.punkapi.com/v2/beers";

function App() {
  const [beer, setBeer] = useState("");
  const [beerList, setBeerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((result) => {
          setBeer(result[0]);
          console.log(result[0]);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(API_URL2)
        .then((res) => res.json())
        .then((result) => {
          setBeerList(result.map((b) => b));
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  const randomButton = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setBeer(result[0]);
        setIsLoading(false);
      });
  };
  function setBeerButton(id) {
    fetch(`${API_URL2}/${+id + 1}`)
      .then((res) => res.json())
      .then((result) => {
        setBeer(result[0]);
        setIsLoading(false);
      });
  }

  const Beeer = (
    <div className="Beers">
      <h1>To Beer or not to Beer...</h1>
      <div className="Beer-wrapper">
        <Beer
          image={beer.image_url}
          name={beer.name}
          description={beer.description}
          tagline={beer.tagline}
          abv={beer.abv}
          firstBrewed={beer.first_brewed}
        />
        <BeerList setBeerButton={setBeerButton} beerList={beerList} />
      </div>
      <Button randomButton={randomButton} />
    </div>
  );
  return <div className="App">{isLoading ? <BeerMug /> : Beeer}</div>;
}

export default App;

import { useEffect, useState } from "react";
import Card from "../Card";
import "./style.css";
function Main({ characters }) {
  const [gryffindor, setGryffindor] = useState([]);
  const [slytherin, setSlytherin] = useState([]);
  const [ravenclawHufflepuff, setRavenclawHufflepuff] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setGryffindor(characters.filter((item) => item.house === "Gryffindor"));
    setSlytherin(characters.filter((item) => item.house === "Slytherin"));
    setRavenclawHufflepuff(
      characters.filter(
        (item) => item.house === "Ravenclaw" || item.house === "Hufflepuff"
      )
    );
    setStatus(true);
  }, [characters]);
  return (
    <main className="Main">
      {status && (
        <Card characters={gryffindor[Math.floor(Math.random() * 5)]} />
      )}
      {status && <Card characters={slytherin[Math.floor(Math.random() * 3)]} />}
      {status && (
        <Card characters={ravenclawHufflepuff[Math.floor(Math.random() * 3)]} />
      )}
    </main>
  );
}
export default Main;

import "./App.css";
import { useEffect, useState } from "react";
import Container from "./Components/Container";
import Button from "./Components/Button";
import Main from "./Components/Main";

function App() {
  const [characters, setCharacters] = useState([]);
  const [showFirst, setShowFirst] = useState(true);
  const [showSecound, setShowSecound] = useState(true);
  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response);
      })
      .catch((error) => console.dir(error));
  }, []);

  const HandlePlay = () => {
    setShowFirst(!showFirst);
    setShowSecound(!showSecound);
  };
  return (
    <div className="App App-header">
      {showFirst && <Container />}
      {!showSecound && <Main characters={characters} />}
      {showFirst && (
        <Button
          classe={"Button--Primary"}
          value="Começar!"
          callback={HandlePlay}
        />
      )}
      {!showSecound && (
        <Button
          classe={"Button--Secundary"}
          value="Tentar Novamente!"
          callback={HandlePlay}
        />
      )}
    </div>
  );
}

export default App;

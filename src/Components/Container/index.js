import { useEffect } from "react";
import "./style.css";
function Container() {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="Container">
      <h1>Torneio tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros!</p>
    </div>
  );
}
export default Container;

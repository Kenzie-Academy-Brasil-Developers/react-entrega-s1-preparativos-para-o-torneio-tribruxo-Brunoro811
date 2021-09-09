import "./style.css";
function Card({ characters: { name, image, house } }) {
  return (
    <ul className="Card">
      <li className="item" key={image}>
        <img src={image} alt={name} />
      </li>
      <li className="item" key={name}>
        {name}
      </li>
      <li className="item" key={house}>
        {house}
      </li>
    </ul>
  );
}
export default Card;

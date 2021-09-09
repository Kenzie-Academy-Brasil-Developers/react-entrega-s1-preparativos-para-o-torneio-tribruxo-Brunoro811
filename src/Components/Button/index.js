import "./style.css";
function Button({ classe, value, callback }) {
  return (
    <>
      <button onClick={callback} className={"Button " + classe}>
        {value}
      </button>
    </>
  );
}
export default Button;

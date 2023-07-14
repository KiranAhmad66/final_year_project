import "./button.scss";

const Button = ({ type = "", text = "", onClick, isLoading, disabled }) => {
  return (
    <>
      {type === "input" ? (
        <input
          type="submit"
          className="blue-btn"
          value={isLoading ? "Loading..." : "Submit"}
          disabled={isLoading}
        />
      ) : type === "" ? (
        <button className="blue-btn" onClick={onClick}>
          {text}
        </button>
      ) : disabled ? (
        <button type="submit" className="disabled" disabled>
          {text}
        </button>
      ) : (
        <button type="submit" className="blue-btn">
          {text}
        </button>
      )}
    </>
  );
};
export default Button;

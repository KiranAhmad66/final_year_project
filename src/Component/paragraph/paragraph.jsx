import "./paragraph.scss";
const Paragraph = ({ text }) => {
  return (
    <div className="text-container">
      <p className="text">{text}</p>
    </div>
  );
};
export default Paragraph;

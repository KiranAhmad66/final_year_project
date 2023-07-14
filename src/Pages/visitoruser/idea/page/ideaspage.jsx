import { Link } from "react-router-dom";
import Image_Directive from "../../../../Component/imagedirective/imagedirective";
import Paragraph from "../../../../Component/paragraph/paragraph.jsx";
import Title from "../../../../Component/title/title";
import "./ideaspage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { IdeaContext } from "../../../../context/ideascontext.jsx";
const IdeaPage = () => {
  const ideaText = {
    para: "Fueling the journey to professional success, IDEAS Drive version is the ultimate portal for Final Year Projects (FYP). With a focus on aligning students, unique skills and passions with applied ideas in their respective fields, our platform propels them towards their desired destination, ensuring an impactful launch into their professional lives.",
  };
  const { idea } = useContext(IdeaContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (idea.length > 0) {
      setLoading(false);
    }
  }, [idea]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="idea-page-container">
      <div className="ideas-text-container">
        <Title text="IDEA" />
        <Paragraph text={ideaText.para} />
        <Title text="IDEA BOOK" />
      </div>
      <div className="idea-book-images-container">
        <div className="idea-book-images">
          <Image_Directive />
        </div>
        {idea.length > 0 ? (
          <div className="Explore-Button">
            <Link path="/ideas" className="Expand-button" to="Expand-more">
              Explore More
              <FontAwesomeIcon icon={faCaretDown} className="icon" />
            </Link>{" "}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default IdeaPage;

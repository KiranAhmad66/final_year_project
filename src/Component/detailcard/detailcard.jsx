import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detailcard.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { IdeaContext } from "../../context/ideascontext";
import { UserContext } from "../../context/user";
import { ProjectContext } from "../../context/projectcontext";
const DetailCard = ({ array }) => {
  const { idea } = useContext(IdeaContext);
  const { user } = useContext(UserContext);
  const { project } = useContext(ProjectContext);
  return (
    <div className="Dashboardcarddirective">
      {array.map((item) => {
        return (
          <div
            className="Dashboardcarddirective-content"
            style={{ backgroundColor: `${item.backGroundColor}` }}
          >
            <div className="Dashboardcarddirective-container">
              <div className="Dashboardcarddirective-icon">
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ color: `${item.color}` }}
                />
              </div>
              <div className="Dashboardcarddirective-container-items">
                <div className="Dashboardcarddirective-container-item">
                  {item.totalData === "idea-data" ? (
                    <span>{idea.length}</span>
                  ) : item.totalData === "user-data" ? (
                    <span>{user.length}</span>
                  ) : item.totalData === "project-data" ? (
                    <span>{project.length}</span>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="Dashboardcarddirective-container-item">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
            <div className="Dashboardcarddirective-action-btn">
              <Link to={item.url}>
                Show Details
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default DetailCard;

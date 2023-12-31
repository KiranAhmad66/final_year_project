import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./projecttable.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../context/user";
const ProjectTable = ({ tableData }) => {
  const { user } = useContext(UserContext);
  const [matchedStudents, setMatchedStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
   if (tableData.Student && user) {
     const filteredStudents = user.filter((users) => {
       const matchedUser = tableData.Student.find(
         (student) => users.id === student.id
       );
       return matchedUser !== undefined;
     });
     setMatchedStudents(filteredStudents);
     setIsLoading(false);
   }
 }, [tableData, user]);

 const matchSupervisor =
   tableData.supervisor &&
   user.find((users) => users.id === tableData.supervisor.id);

 if (isLoading) {
   return <div>Loading...</div>;
 }

 if (user.length === 0) {
   return <div>No data found.</div>;
 }

  return (
    <Fragment>
      <div className="project-table">
        <div className="project-row">
          <div className="row-item">
            <span>{tableData.date}</span>
          </div>
          <div className="row-item student-item">
            <span className="row-item-title">Student: </span>
            <div className="student-name">
              {tableData.Student &&
                matchedStudents.map((studentName) => {
                  return (
                    <span key={studentName.id}>
                      {studentName.Name && studentName.Name}
                    </span>
                  );
                })}
            </div>
          </div>
          <div className="row-item">
            <span className="row-item-title">Supervisor: </span>
            <span>{matchSupervisor.Name && matchSupervisor.Name}</span>
          </div>
          <div className="row-item bg-blue">
            <div className="Report-web-video">
              <a href={`${tableData.report}`} className="project-links">
                Report
              </a>
              <Link to={`${tableData.web}`} className="project-links">
                Web
              </Link>
              <a href={`${tableData.video}`} className="project-links">
                Video
              </a>
            </div>
          </div>
        </div>
        <div className="project-row">
          <div className="row-item">
            <span className="row-item-title">Dept:</span>{" "}
            <span className="row-item-paragraph">{tableData.department}</span>
          </div>
          <div className="row-item title-item">
            <div className="last-row-item">
              <div className="row-title">
                <span className="row-item-title">Title:</span>{" "}
                <span className="row-item-paragraph">{tableData.title} </span>
              </div>
              <div className="row-projectfilter">
                <div className="row-project-remarks">
                  <div className="project-remarks">
                    <span className="remarks-bold"> Status: </span>
                    <span>{tableData.status}</span>
                  </div>
                  <div className="project-remarks">
                    <span className="remarks-bold"> Remarks: </span>
                    <span>{tableData.remarks}</span>
                  </div>
                </div>
                <div className="projectfilter-container">
                  <div className="projectfilter">
                    <FontAwesomeIcon icon={faProjectDiagram} />
                    <span>{tableData.projectType}</span>
                  </div>
                  <div className="projectfilter">
                    <FontAwesomeIcon icon={faList} />{" "}
                    <span>{tableData.projectCategory}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectTable;

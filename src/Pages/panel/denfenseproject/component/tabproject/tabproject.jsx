import { useContext } from "react";
import { ProjectContext } from "../../../../../context/projectcontext";
import ProjectDetail from "../projectdetail/projectdetail";
const TabProject = ({ status }) => {
  const { project } = useContext(ProjectContext);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const newMidArray = project.filter(
    (item) =>
      item.IsDefense === status &&
      item.date.slice(0, 4) === year.toString() &&
      item.status === "Pending" &&
      item.Student.length === item.count
  );
  return (
    <div className="proposal-list">
      <div className="card-container">
        <ProjectDetail project={newMidArray} status={status} />
      </div>
    </div>
  );
};
export default TabProject;

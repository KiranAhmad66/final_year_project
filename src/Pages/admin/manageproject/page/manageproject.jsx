import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import "./manageproject.scss";
import FormTitle from "../../../../Component/formtiltle/formtitle";
import { useContext } from "react";
import { ProjectContext } from "../../../../context/projectcontext";
import Search from "../../../../Component/search/search";
import { UserContext } from "../../../../context/user";
import Filter from "../../../../Component/filterdropdown/filter";
import { DefenseData } from "../../../../Data/DefenseData";
import ManageProjectTable from "../component/manageprojecttable/manageprojecttable";
import UpdateRequestpProject from "../component/updaterequestproject/updaterequestproject";
const ManageProject = () => {
  const { project } = useContext(ProjectContext);
  const { clickedit, dataRequest } = useContext(UserContext);
  return (
    <div className="manage-project">
      {project.length>0?
        <>
          <div className="manage-project-container">
            <div className="manage-project-content">
              <FormTitle icon={faProjectDiagram} text={"Manage Project"} />
              <Filter filterArray={DefenseData} />

              <Search data={project} type={"Project Table"} />
            </div>
            <ManageProjectTable />
          </div>
          {clickedit && (
            <UpdateRequestpProject text="Project-data" item={dataRequest} />
          )}
        </> : <div>
          Data Not Found
        </div>
      }
    </div>
  );
};
export default ManageProject;

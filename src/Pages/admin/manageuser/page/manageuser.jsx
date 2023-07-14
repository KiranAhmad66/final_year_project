import "./manageuser.scss";
import Filter from "../../../../Component/filterdropdown/filter";
import { RegisterData } from "../../../../Data/Registeruser_Data";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import FormTitle from "../../../../Component/formtiltle/formtitle";
import { useContext } from "react";
import { UserContext } from "../../../../context/user";
import ManageUserTable from "../component/mangeusertable/manageusertable";
import UpdateRequestUser from "../component/updaterequestuser/updaterequestuser";

const ManageUser = () => {
  const { user, clickedit, dataRequest } = useContext(UserContext);

  return (
    <div className="manage-user">
      {user.length > 0 ? (
        <>
          <div className="manage-user-container">
            <div className="manage-user-content">
              <FormTitle icon={faPencil} text={"Manage User"} />
              <Filter filterArray={RegisterData} />
            </div>
            <ManageUserTable />
          </div>
          {clickedit && (
            <UpdateRequestUser text="Users-Data" item={dataRequest} />
          )}
        </>
      ) : (
        <div>Data not Found</div>
      )}
    </div>
  );
};
export default ManageUser;

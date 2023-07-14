import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/admin/dashboard/dashboard";
import RegisterUser from "../Pages/admin/registeruser/registeruser";
import ManageUser from "../Pages/admin/manageuser/page/manageuser";
import ManageIdeas from "../Pages/admin/manageidea/page/manageidea";
import ManageProject from "../Pages/admin/manageproject/page/manageproject";
import UserUiData from "../Data/useruidata";
import UserNavigation from "../Pages/admin/usernavigation/usernavigation";

const Admin = () => {
  const got = require('got');
got.emitter.setMaxListeners(20);
  const adminData = UserUiData.find((item) => item.Role === "Admin");
  return (
    <Routes>
      <Route path="/" element={<UserNavigation item={adminData} />}>
        <Route index element={<Dashboard />} />
        <Route path="RegisterUser" element={<RegisterUser />} strict />
        <Route path="ManageUser" element={<ManageUser />} strict />
        <Route path="ViewAllIdeas" element={<ManageIdeas />} strict />
        <Route path="ViewAllProjects" element={<ManageProject />} strict />
      </Route>
    </Routes>
  );
};
export default Admin;

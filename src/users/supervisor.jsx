import { Route, Routes } from "react-router-dom";
import UserNavigation from "../Pages/admin/usernavigation/usernavigation";
import UserUiData from "../Data/useruidata";
import ViewMidProject from "../Pages/supervisor/Viewmidproject/viewmidproject";
import ViewFinalProject from "../Pages/supervisor/viewfinalproject/viewfinalproject";
import UploadIdea from "../Pages/supervisor/uploadidea/uploadidea";
import UnderSupervision from "../Pages/supervisor/undersupervision/undersupervision";

const Supervisor = () => {
  const supervisorData = UserUiData.find((item) => item.Role === "Supervisor");
  return (
    <Routes>
      <Route path="/" element={<UserNavigation item={supervisorData} />}>
        <Route index element={<UploadIdea />} />
        <Route path="undersupervision" element={<UnderSupervision />} />
        <Route path="viewmidproject" element={<ViewMidProject />} />
        <Route path="viewfinalproject" element={<ViewFinalProject />} />
      </Route>
    </Routes>
  );
};
export default Supervisor;

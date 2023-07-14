import { Route, Routes } from "react-router-dom";
import UserUiData from "../Data/useruidata";
import UserNavigation from "../Pages/admin/usernavigation/usernavigation";
import UploadIdea from "../Pages/supervisor/uploadidea/uploadidea";

const CompanyOwner = () => {
  const CompanyownerData = UserUiData.find(
    (item) => item.Role === "Company Owner"
  );

  return (
    <Routes>
      <Route path="/" element={<UserNavigation item={CompanyownerData} />}>
        <Route index element={<UploadIdea />} />
      </Route>
    </Routes>
  );
};
export default CompanyOwner;

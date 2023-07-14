import { Route, Routes } from "react-router-dom";
import UserNavigation from "../Pages/admin/usernavigation/usernavigation";
import UserUiData from "../Data/useruidata";
import StudentDashboard from "../Pages/student/dashboard/dashboard";
import SubmittedProposal from "../Pages/student/submittedproposal/submittedproposal";
import UploadProject from "../Pages/student/uploadproject/page/uploadproject";
import UploadProposal from "../Pages/student/uploadproposal/page/uploadproposal";
import ViewIdeas from "../Pages/student/viewidea/page/viewidea";
import ViewProject from "../Pages/student/viewproject/page/viewproject";

const Student = () => {
  const studentData = UserUiData.find((item) => item.Role === "Student");
  return (
    <Routes>
      <Route path="/" element={<UserNavigation item={studentData} />}>
        <Route index element={<StudentDashboard />} />
        <Route path="viewideas" element={<ViewIdeas />} />
        <Route path="uploadproposal" element={<UploadProposal />} />
        <Route path="submittedProposal" element={<SubmittedProposal />} />
        <Route path="uploadproject" element={<UploadProject />} />
        <Route path="viewproject" element={<ViewProject />} />
      </Route>
    </Routes>
  );
};
export default Student;

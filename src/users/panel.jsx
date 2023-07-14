import { Route, Routes } from "react-router-dom";
import UserUiData from "../Data/useruidata";
import ViewOldProposal from "../Pages/panel/viewoldproposal/viewoldproposal";
import UserNavigation from "../Pages/admin/usernavigation/usernavigation";
import ViewDefenseProject from "../Pages/panel/denfenseproject/page/defenseproject";
import SetDeadLine from "../Pages/panel/setdeadline/setdeadline";
import ViewProosal from "../Pages/panel/viewproposals/page/viewproposal";
const Panel = () => {
  const PanelData = UserUiData.find((item) => item.Role === "Panel");
  return (
    <Routes>
      <Route path="/" element={<UserNavigation item={PanelData} />}>
        {" "}
        <Route index element={<SetDeadLine />} />
        <Route path="proposals" element={<ViewProosal />} />
        <Route path="viewdefenseproject" element={<ViewDefenseProject />} />
        <Route path="viewoldproposal" element={<ViewOldProposal />} />
      </Route>
    </Routes>
  );
};
export default Panel;

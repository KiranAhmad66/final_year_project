import { Route, Routes } from "react-router-dom";
import ExpandMore from "../Pages/visitoruser/idea/component/ExpandMore/expandmore";
import LearnMore from "../Pages/visitoruser/idea/component/ideaLearnmore/learnmore";
const ExpandMoreRounting = () => {
  return (
    <Routes>
      <Route index element={<ExpandMore />} />
      <Route path=":ideaText" element={<LearnMore />} />
    </Routes>
  );
};
export default ExpandMoreRounting;

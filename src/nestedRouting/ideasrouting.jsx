import { Route, Routes } from "react-router-dom";
import ExpandMoreRounting from "./expandmorerounting";
import IdeaPage from "../Pages/visitoruser/idea/page/ideaspage";
import LearnMore from "../Pages/visitoruser/idea/component/ideaLearnmore/learnmore";

const IdeaRouting = () => {
  return (
    <Routes>
      <Route index element={<IdeaPage />} />
      <Route path=":ideaText" element={<LearnMore />} />
      <Route path="Expand-more/*" element={<ExpandMoreRounting />} />
    </Routes>
  );
};
export default IdeaRouting;

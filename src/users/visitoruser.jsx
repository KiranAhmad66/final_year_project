import { Route, Routes } from "react-router-dom";
import Navigation from "../Pages/visitoruser/navigation/navigation";
import HomePage from "../Pages/visitoruser/home/home";
import IdeaRouting from "../nestedRouting/ideasrouting";
import Projects from "../Pages/visitoruser/project/project";
import TopPick from "../Pages/visitoruser/toppick/toppick";
import Login from "../Pages/visitoruser/login/login";


const VisitorUser = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="ideas/*" element={<IdeaRouting />} />
        <Route path="projects/*" element={<Projects />} />
        <Route path="impact" element={<TopPick />} />
        <Route path="authentication" element={<Login />} />
      </Route>
    </Routes>
  );
};
export default VisitorUser;

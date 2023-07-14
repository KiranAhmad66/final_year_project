import DashboardcarddirectiveData from "../../../Data/Dashboardcarddirective";
import DetailCard from "../../../Component/detailcard/detailcard";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="DashboardPage">
      <div className="DashboardPage-heading">
        <h3>Welcome to the FYP Portal</h3>
      </div>
      <div className="DashboardPage-content">
        <DetailCard array={DashboardcarddirectiveData} />
      </div>
    </div>
  );
};
export default Dashboard;

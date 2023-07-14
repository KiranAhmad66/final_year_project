import React, { useState } from "react";
import "./viewproposal.scss";
import ViewProposalTab from "../component/viewproposaltab/viewproposaltab";

const ViewProosal = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const tabs = ["Pending", "Approved", "Rejected"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab-pane ${activeTab === tab ? "active" : ""}`}
          >
            {tab === "Pending" && <ViewProposalTab status={tab} />}
            {tab === "Approved" && <ViewProposalTab status={tab} />}
            {tab === "Rejected" && <ViewProposalTab status={tab} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProosal;

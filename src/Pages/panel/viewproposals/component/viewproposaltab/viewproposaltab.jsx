import { useContext } from "react";
import "./viewproposaltab.scss";
import { ProposalContext } from "../../../../../context/proposalcontext";
import ProposalDetail from "../proposaldetail/proposaldetail";
const ViewProposalTab = ({ status }) => {
  const { proposal } = useContext(ProposalContext);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const newArray = proposal.filter(
    (proposals) =>
      proposals.status === status &&
      proposals.createdBy.length === proposals.count &&
      proposals.timestamp.slice(0, 4) === year.toString()
  );

  return (
    <div className="proposal-list">
      <div className="card-container">
        <ProposalDetail proposal={newArray} status={status} />
      </div>
    </div>
  );
};

export default ViewProposalTab;

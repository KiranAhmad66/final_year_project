import React, { useContext, useEffect, useState } from "react";
import "./uploadproject.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { ProjectContext } from "../../../../context/projectcontext";
import { ProposalContext } from "../../../../context/proposalcontext";
import { UserContext } from "../../../../context/user";
import DefenseOption from "../component/defenseoption/defenseoption";

const UploadProject = () => {
  const {
    project,
    selectedDefenseOption,
    setSelectedDefenseOption,
    setIsDefenseOptionSelected,
    setProjectRadiofilled,
    projectRadiofilled,
    isDefenseOptionSelected,
  } = useContext(ProjectContext);
  const { proposal } = useContext(ProposalContext);
  const { currentUser } = useContext(UserContext);
  const [optionError, setOptionError] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [proposalError, setProposalError] = useState(false);
  const [proposalFind, setProposalFind] = useState(false);
  const [midProjectError, setmidProjectError] = useState(false);
  const [midSubmitError, setmidSumbitError] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedDefenseOption(event.target.value);
    setOptionError(false);
    setmidProjectError(false);
  };
  useEffect(() => {
    if (proposal.length > 0) {
      if (
        proposal.some(
          (item) =>
            item.createdBy &&
            item.createdBy.find((student) => student.id === currentUser.id) &&
            item.status === "Approved"
        )
      ) {
        setProposalFind(true);
      }
    } else {
      setProposalFind(false);
    }
  }, [proposal, currentUser]);
  const midProjectFind = project.find((item) => {
    return (
      item.IsDefense === "Mid" &&
      item.Student.some((student) => student.id === currentUser.id)
    );
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setmidProjectError(false);
    setOptionError(false);
    setProposalError(false);

    if (selectedDefenseOption === "") {
      setOptionError(true);
    } else {
      if (proposalFind) {
        if (midProjectFind) {
          if (selectedDefenseOption === "midDefense") {
            setmidProjectError(true);
          } else if (
            (selectedDefenseOption === "finalDefense" &&
              midProjectFind.remarks === "unsatisfactory") ||
            midProjectFind.remarks === "Pending"
          ) {
            setmidProjectError(true);
          } else {
            if (selectedDefenseOption === "finalDefense") {
              setIsFormVisible(false);
              setProjectRadiofilled(true);
              setIsDefenseOptionSelected(false);
            } else {
              setIsFormVisible(false);
              setProjectRadiofilled(true);
              setIsDefenseOptionSelected(false);
            }
          }
        } else {
          setIsFormVisible(false);
          setProjectRadiofilled(true);
          setIsDefenseOptionSelected(false);
        }
      } else {
        setProposalError(true);
      }
    }
  };

  return (
    <div className="upload-proposal">
      {isDefenseOptionSelected && (
        <div
          className={`defense-option-form ${isFormVisible ? "" : "hide-form"}`}
        >
          <h2 className="defense-option-form-heading">Select Defense Option</h2>
          <form
            onSubmit={handleSubmit}
            className="defense-option-form-container"
          >
            <div className="defense-option-form-options">
              <div className="defense-option-form-option">
                <input
                  type="radio"
                  id="midDefense"
                  name="defenseOption"
                  value="midDefense"
                  checked={selectedDefenseOption === "midDefense"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="midDefense">Mid Defense</label>
              </div>
              <div className="defense-option-form-option">
                <input
                  type="radio"
                  id="finalDefense"
                  name="defenseOption"
                  value="finalDefense"
                  checked={selectedDefenseOption === "finalDefense"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="finalDefense">Final Defense</label>
              </div>{" "}
            </div>
            <div className="defense-option-form-button-container">
              <button type="submit" className="defense-option-form-button">
                Next{" "}
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="defense-option-form-button-icon"
                />
              </button>
              {optionError && (
                <span className="proposals-form-error">
                  Please select at least one option
                </span>
              )}{" "}
              {proposalError && (
                <span className="proposals-form-error">
                  Please Submit Your Proposal First{" "}
                </span>
              )}{" "}
              {midProjectError && (
                <span className="proposals-form-error">
                  Check Your mid Project Status{" "}
                </span>
              )}{" "}
              {midSubmitError && (
                <span className="proposals-form-error">
                  Submit your mid project{" "}
                </span>
              )}
            </div>
          </form>
        </div>
      )}
      {!isDefenseOptionSelected && <DefenseOption />}
    </div>
  );
};

export default UploadProject;

import "./project.scss";
import Title from "../../../Component/title/title";
import { useContext, useEffect, useState } from "react";
import Filter from "../../../Component/filterdropdown/filter";
import { FilterData } from "../../../Data/filterData";
import Paginate from "../../../Component/pagination/pagination";
import { ProjectContext } from "../../../context/projectcontext";
import NestedDropdown from "../../../Component/nesteddropdown/nesteddropdown";
import ProjectTable from "../../../Component/projecttable/projecttable";
const Projects = () => {
  const { project, filterprojects } = useContext(ProjectContext);
  const [matchesFound, setMatchesFound] = useState(true);
  let data = project;
  if (filterprojects.length > 0) {
    data = data.filter((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const matchesFilters = filterprojects.every((filterproject) => {
        return (
          item.projectType === filterproject.value ||
          item.projectCategory === filterproject.value ||
          item.department === filterproject.value ||
          year.toString() === filterproject.value ||
          filterproject.value === null
        );
      });
      return matchesFilters;
    });
  }
  useEffect(() => {
    setMatchesFound(data.length > 0);
  }, [data]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      paginate(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
      paginate(currentPage + 1);
    }
  };
  const postData = currentPosts.filter(
    (item) => item.IsDefense === "Final" && item.status === "Completed"
  );
  return (
    <div className="project-container">
      <div className="filter-data-container">
        <NestedDropdown filterArray={FilterData} />
        <Filter filterArray={FilterData} />
      </div>

      <div className="project-content">
        <Title text="Projects" />
        <div className="table-content">
          {matchesFound ? (
            postData.map((post) => {
              return <ProjectTable key={post.id} tableData={post} />;
            })
          ) : (
            <div className="no-data">No Data Found</div>
          )}
        </div>
        <div className="project-pagination">
          <Paginate
            key={data.length}
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;

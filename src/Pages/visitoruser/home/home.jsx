import "./home.scss";
import Footer from "../../../Component/footer/footer";
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page--container">
        <div className="home-page--container-right">
          <div className="home-page--container-sides side-1">
            <p className="home-page--container-sides-text">For the Students</p>
          </div>
          <div className="home-page--container-image">
            <div className="home-page--container-sides side-2">
              <p className="home-page--container-sides-text">
                With the Students
              </p>
            </div>

            <div
              className="home-page--container-image-backimg"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.1)),url(./images/homeImg.jpg)",
              }}
            />
          </div>

          <div className="home-page--container-sides side-3">
            <p className="home-page--container-sides-text">
              Through the Students
            </p>
          </div>
        </div>
        <div className="home-page--container-left">
          <p className="home-page--container-left-text">
            Institutions can improve. Cultures can improve. Systems can improve.
            Never all at once, but through a series of strategic leaps that
            build belief , increase confidence, & shape identity ___ setting in
            motion an arc of change that may not have seemed possible
          </p>
        </div>
      </div>
      
    </div>
  );
};
export default HomePage;

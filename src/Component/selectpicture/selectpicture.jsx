import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./selectpicture.scss";
import {
  faClose,
  faEnvelope,
  faIdBadge,
  faPencil,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import { storage, updateData } from "../../utiles/firebase/firebase.utiles";
import Button from "../button/button";

const SelectPicture = () => {
  const { currentUser, setimage } = useContext(UserContext);
  const [img, setimg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [targetWidth, setTargetWidth] = useState(80);
  const [targetHeight, setTargetHeight] = useState(80);
  const [isLoading, setIsLoading] = useState(false); // New loading state

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const image = new Image();
      image.src = reader.result;

      image.onload = () => {
        setTargetWidth(80);
        setTargetHeight(80);
        setimg(reader.result);
        setSelectedFile(file);
      };
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      const image = new Image();
      image.src = currentUser.image;

      image.onload = () => {
        setTargetWidth(image.width);
        setTargetHeight(image.height);
        setimg(currentUser.image);
        setSelectedFile(null);
      };
    }
  };

  const closeEdit = () => {
    setimage(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set isLoading to true when the submit starts

    try {
      let image = currentUser.image;
      if (img) {
        const uploadTask = storage
          .ref(`images/${selectedFile.name}`)
          .put(selectedFile);
        await uploadTask;

        const imageUrl = await uploadTask.snapshot.ref.getDownloadURL();
        image = imageUrl;

        console.log(imageUrl);
      }
      await updateData("Users-Data", {
        id: currentUser.id,
        Name: currentUser.Name || "",
        username: currentUser.username || "",
        password: currentUser.password || "",
        Email: currentUser.Email || "",
        department: currentUser.department || "",
        image: image ? image : "",
        role: currentUser.role || "",
      });
      sessionStorage.setItem(
        "User",
        JSON.stringify({
          id: currentUser.id,
          Name: currentUser.Name || "",
          username: currentUser.username || "",
          password: currentUser.password || "",
          Email: currentUser.Email || "",
          department: currentUser.department || "",
          image: image ? image : "",
          role: currentUser.role || "",
        })
      );
      setimage(false);
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      setIsLoading(false); // Set isLoading to false when the submit is done
    }
  };

  return (
    <div className="selectpicture-container">
      <div className="updated-table-row-close">
        <FontAwesomeIcon icon={faClose} onClick={closeEdit} />
      </div>
      <div className="selectpicture-container-box">
        <div className="selectpicture-container-content">
          <label
            htmlFor="select-img"
            className="selectpicture-container-imageset"
          >
            <FontAwesomeIcon
              icon={faPencil}
              className="selectpicture-container-imgicon"
            />
          </label>
          <input
            type="file"
            accept="jpg"
            id="select-img"
            className="selectpicture-container-image"
            onChange={handleImageUpload}
          />
        </div>
        <img
          src={img ? img : currentUser.image || "/images/empty-profile.png"}
          style={{ width: targetWidth, height: targetHeight }}
          className="selectpicture-container-img"
        />
        <div className="user-detail">
          <div className="profile-information" id="profile-information">
            <div className="profile-information-container">
              <div className="profile-information-list">
                <span className="profile-info-list-item">
                  <FontAwesomeIcon
                    icon={faIdBadge}
                    className="profile-information-icons"
                  />
                </span>
                <span className="profile-info-list-item">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="profile-information-icons"
                  />
                </span>
                <span className="profile-info-list-item">
                  {" "}
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="profile-information-icons"
                  />
                </span>
              </div>

              <div className="profile-information-list">
                <span className="profile-info-list-item">
                  {currentUser.Name}
                </span>
                <span className="profile-info-list-item">
                  {currentUser.username}
                </span>
                <span className="profile-info-list-item">
                  {currentUser.Email}
                </span>
              </div>
            </div>
          </div>

          <Button
            text={isLoading ? "Loading..." : "Change"} // Display "Loading..." when isLoading is true
            onClick={handleSubmit}
            disabled={isLoading} // Disable the button when isLoading is true
          />
        </div>
      </div>
    </div>
  );
};

export default SelectPicture;

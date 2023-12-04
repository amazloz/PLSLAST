import "./ProfilePopup.css";
import Interests from "./Interests";
import { useGetInterestsQuery } from "../../slices/interestsApiSlice";

import { useState } from "react";

const NativeLanguagePopup = ({ closenativelanguagepopup }) => {
  const { data: interests } = useGetInterestsQuery();

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  if (!interests) {
    return <div>Loading...</div>;
  }
  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const handleSaveClick = () => {
    // Use the selectedInterest state as needed (e.g., save it to your backend)
    console.log("Selected Language:", selectedLanguage);
    // Close the popup
    closenativelanguagepopup(false);
  };

  return (
    <div className="popupbg">
      <div className="popupcontainer">
        <button
          className="save-btn"
          onClick={() => closenativelanguagepopup(false)}>
          X
        </button>
        <div className="popupheader">
          <h1>Choose your native language</h1>
        </div>
        <div className="popupbody">
          {interests.map((interest) => (
            <Interests
              key={interest._id}
              interestslist={interest}
              isSelected={selectedLanguage === interest.interest_name}
              onClick={handleLanguageClick}
            />
          ))}
        </div>
        <div className="popupfooter">
          <button className="save-btn" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NativeLanguagePopup;

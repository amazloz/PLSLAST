import "./ProfilePopup.css";
import Languages from "./Languages";
import { useGetLanguagesQuery } from "../../slices/languagesApiSlice";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useUpdateUserMutation } from "../../slices/usersApiSlice";
import { setProfiles } from "../../slices/profileSlice";

const LearningLanguagePopup = ({ closelearninglanguagepopup }) => {
  const dispatch = useDispatch();
  const [updateuser] = useUpdateUserMutation();
  const { data: languages } = useGetLanguagesQuery();
  const { profileInfo } = useSelector((state) => state.profile);

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  useEffect(() => {
    if (profileInfo) {
      setSelectedLanguage(profileInfo?.language);
    }
  }, [profileInfo, profileInfo.language]);

  if (!languages) {
    return <div>Loading...</div>;
  }
  const handleLanguageClick = (languageName) => {
    setSelectedLanguage(languageName);
  };

  const handleSaveClick = async () => {
    try {
      const res = await updateuser({
        id: profileInfo._id,
        learninglanguage: selectedLanguage,
      }).unwrap();
      dispatch(setProfiles(res));
      console.log(selectedLanguage);
      toast.success("Language updated successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    closelearninglanguagepopup(false);
  };

  return (
    <div className="popupbg">
      <div className="popupcontainer">
        <div className="popupheader">
          <h1>Choose your learning language</h1>
        </div>
        <div className="popupbody">
          {languages.map((language) => (
            <Languages
              key={language._id}
              languageslist={language}
              isSelected={selectedLanguage === language.language_name}
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

export default LearningLanguagePopup;

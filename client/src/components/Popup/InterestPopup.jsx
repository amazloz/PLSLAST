import "./ProfilePopup.css";
import Interests from "./Interests";
import { useGetInterestsQuery } from "../../slices/interestsApiSlice";
import { useUpdateUserMutation } from "../../slices/usersApiSlice";
import { setProfiles } from "../../slices/profileSlice";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const InterestPopup = ({ closeinterestpopup }) => {
  const dispatch = useDispatch();
  const [updateuser] = useUpdateUserMutation();
  const { data: interests } = useGetInterestsQuery();
  const { profileInfo } = useSelector((state) => state.profile);

  const [selectedInterest, setSelectedInterest] = useState(null);

  useEffect(() => {
    if (profileInfo) {
      setSelectedInterest(profileInfo?.interest);
    }
  }, [profileInfo, profileInfo.interest]);

  if (!interests) {
    return <div>Loading...</div>;
  }
  const handleInterestClick = (interestName) => {
    setSelectedInterest(interestName);
  };

  const handleSaveClick = async () => {
    try {
      const res = await updateuser({
        id: profileInfo._id,
        interest: selectedInterest,
      }).unwrap();
      dispatch(setProfiles(res));
      console.log(selectedInterest);
      toast.success("Interest updated successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    closeinterestpopup(false);
  };

  return (
    <div className="popupbg">
      <div className="popupcontainer">
        <div className="popupheader">
          <h1>Choose your hobby</h1>
          <button
            className="close-btn"
            onClick={() => closeinterestpopup(false)}>
            X
          </button>
        </div>
        <div className="popupbody">
          {interests.map((interest) => (
            <Interests
              key={interest._id}
              interestslist={interest}
              isSelected={selectedInterest === interest.interest_name}
              onClick={handleInterestClick}
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

export default InterestPopup;

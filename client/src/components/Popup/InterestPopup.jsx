import "./ProfilePopup.css";
import Interests from "./Interests";
import { useGetInterestsQuery } from "../../slices/interestsApiSlice";

const InterestPopup = ({ closeinterestpopup }) => {
  const { data: interests } = useGetInterestsQuery();

  if (!interests) {
    return <div>Loading...</div>;
  }

  return (
    <div className="popupbg">
      <div className="popupcontainer">
        <button className="save-btn" onClick={() => closeinterestpopup(false)}>
          X
        </button>
        <div className="popupheader">
          <h1>Choose your hobby</h1>
        </div>
        <div className="popupbody">
          {interests.map((interest) => (
            <Interests key={interest.id} interestslist={interest} />
          ))}
        </div>
        <div className="popupfooter">
          <button
            className="save-btn"
            onClick={() => closeinterestpopup(false)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestPopup;

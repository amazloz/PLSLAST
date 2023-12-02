import "./ProfilePopup.css";
import Interests from "./Interests";
import { useGetInterestsQuery } from "../../slices/interestsApiSlice";

const InterestPopup = ({ closeinterestpopup }) => {
  const { data: interests, isLoading, error } = useGetInterestsQuery();

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
          {isLoading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <div> {error?.data?.message || error.error} </div>
          ) : (
            <>
              {interests.map((interest) => (
                <Interests interestslist={interest} />
              ))}
            </>
          )}
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useUpdateUserMutation } from "../../slices/usersApiSlice";
import { setProfiles } from "../../slices/profileSlice";
import "./ProfilePopup.css";

const UserInfoPopup = ({ closeuserinfopopup }) => {
  const dispatch = useDispatch();
  const [updateuser] = useUpdateUserMutation();
  const { profileInfo } = useSelector((state) => state.profile);

  const [sname, setSname] = useState();
  const [semail, setSemail] = useState();
  const [sbirthdate, setSbirthdate] = useState();
  const [sgender, setSgender] = useState();

  useEffect(() => {
    if (profileInfo) {
      setSname(profileInfo.name);
      setSemail(profileInfo.email);
      setSbirthdate(profileInfo?.birthdate);
      setSgender(profileInfo.gender);
    }
  }, [
    profileInfo,
    profileInfo.name,
    profileInfo.email,
    profileInfo.birthdate,
    profileInfo.gender,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setSname(value);
        break;
      case "email":
        setSemail(value);
        break;
      case "birthdate":
        setSbirthdate(value);
        break;
      case "gender":
        setSgender(value);
        break;
      default:
        break;
    }
  };

  const handleSaveClick = async () => {
    try {
      const res = await updateuser({
        id: profileInfo._id,
        name: sname,
        email: semail,
        gender: sgender,
        brithdate: sbirthdate,
      }).unwrap();
      dispatch(setProfiles(res));
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
    closeuserinfopopup(false);
  };

  return (
    <div className="popupbg">
      <div className="popupcontainer">
        <div className="popupheader">
          <h1>Edit your personal infos</h1>
          <button
            className="close-btn"
            onClick={() => closeuserinfopopup(false)}>
            X
          </button>
        </div>
        <div className="popupbody">
          <form>
            <input
              type="text"
              placeholder="Username"
              name="name"
              value={sname}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={semail}
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder="Birth date"
              name="birthdate"
              value={sbirthdate}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="male or female"
              name="gender"
              value={sgender}
              onChange={handleChange}
            />
          </form>
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

export default UserInfoPopup;

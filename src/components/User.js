import { RiUserHeartLine } from "react-icons/ri";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";
import { RiPhoneLine } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";

export const User = ({ user }) => {
  return (
    <div className="users p-3">
      <div className="container">
        <div className="card relative" key={user.id}>
          <div className="card-image" >
            <img
              className="profile-img ml-auto mr-auto block absolute"
              alt="ProfileImg"
              src={user.picture?.large}
            />
          </div>

          <div className="info text-justify absolute">
            <h3 className="username flex p-1">
              <RiUserHeartLine className="mr-3" /> {user.name?.title}.{" "}
              {user.name?.first} {user.name?.last}
            </h3>
            <h4 className="email flex p-1">
              <MdOutlineMarkEmailUnread className="mr-3" /> {user.email}
            </h4>
            <p className="add flex p-1">
              <RiUserLocationLine className="mr-3" /> {user.location?.city}.{" "}
              {user.location?.state}
            </p>
            <p className="phone flex p-1">
              <RiPhoneLine className="mr-3" /> {user.phone}
            </p>
            <p className="age flex p-1">
              <FaBirthdayCake className="mr-3" /> {user.dob.age}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

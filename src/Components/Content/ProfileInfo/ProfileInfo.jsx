import React from "react";
import classes from "./Profile.module.css"

const Profile = (props) => {
  return (
    <div>
      <div className={classes.background_user}></div>
      <div className={classes.description_user}>
        <img
          src="https://www.clipartmax.com/png/full/75-755878_nestor-aponte-portrait-of-a-man.png"
          alt="Avatar user"
        />
        <div className={classes.description}>
          Ivan Ivanov <br />
          Date of Birth: 1 january <br />
          City: Moskva <br />
          Work: Sber <br />
        </div>
      </div>
    </div>
  );
};
export default Profile;
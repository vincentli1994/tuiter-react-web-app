import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
  return (
    <div>
      <div className="list-group">
        {links.map((link) =>
          <Link to={`/tuiter/${link}`} className={`list-group-item d-flex align-items-center text-capitalize ${active === link ? "active" : ""}`}>
            {link === "home" && <FontAwesomeIcon icon={faHome} />}
            {link === "explore" && <FontAwesomeIcon icon={faHashtag} />}
            {link === "notifications" && <FontAwesomeIcon icon={faBell} />}
            {link === "messages" && <FontAwesomeIcon icon={faEnvelope} />}
            {link === "bookmarks" && <FontAwesomeIcon icon={faBookmark} />}
            {link === "lists" && <FontAwesomeIcon icon={faList} />}
            {link === "profile" && <FontAwesomeIcon icon={faUser} />}
            {link === "more" && <FontAwesomeIcon icon={faCircleInfo} />}
            <span className="d-none d-lg-none d-xl-block" style={{ marginLeft: '10px' }}>{link}</span>
          </Link>

        )}
        {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
        {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
        {currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}
      </div>
      <button type="button" class="btn btn-primary border border-0 rounded-pill w-100 mt-2">Tuit</button>
    </div>
  );
};
export default NavigationSidebar;
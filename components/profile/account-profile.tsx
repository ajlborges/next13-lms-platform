import React, { useState, useEffect, useRef } from 'react';
import '../../app/globals.css'
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";

const AccountProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);  // Reference to the menu
  const imageRef = useRef<HTMLImageElement>(null); // Reference to the profile image

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) && 
        imageRef.current && !imageRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Profile Menu Component
  const AccountProfileMenu = () => {
    return (
      <div className="profile-menu" ref={menuRef}>
        <div className="profile-header">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQHO0P8YHLEszw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1650719854175?e=1735776000&v=beta&t=lVd7rM76bNqgA3xrEq3XcyMedFa1GLZ6N_HbEXg6CtU"
            alt="AccountProfile"
            className="profile-image"
          />
          <div className="profile-info">
            <div className="profile-name">Chike Egonu</div>
            <div className="profile-username">chikeegonu@gmail.com</div>
          </div>
        </div>
            <button className="AccountProfileIcon"><span> <IoSettingsOutline /> Manage account </span></button>
            <button className="AccountProfileIcon" style={{ width: "192px" }}><span><IoLogOutOutline /> Sign out</span></button>
        </div>
    );
  };

  return (
    <div>
      {/* Image that triggers menu toggle */}
      <img
        src="https://media.licdn.com/dms/image/v2/C4D03AQHO0P8YHLEszw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1650719854175?e=1736380800&v=beta&t=305z1rq3D0xl1xeZ6KlgUy1HrnBnKJjzkrLiiw8vGsg"
        alt="Description of the image"
        className="profile-image"
        ref={imageRef}  // Reference to the image
        onClick={toggleMenu} // Use toggleMenu function to show/hide the menu
        style={{ cursor: 'pointer' }} // Add hand cursor when hovering
      />

      {/* Conditionally render the AccountProfileMenu */}
      {menuOpen && <AccountProfileMenu />}
    </div>
  );
};

export default AccountProfile;
import React from 'react';
import '../../app/globals.css'

function AccountProfileMenu() {
    return (
        <div className="profile-menu">
            <div className="profile-header">
                <img
                    src="https://media.licdn.com/dms/image/v2/C4D03AQHO0P8YHLEszw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1650719854175?e=1735776000&v=beta&t=lVd7rM76bNqgA3xrEq3XcyMedFa1GLZ6N_HbEXg6CtU" // Replace with actual profile image
                    alt="AccountProfile"
                    className="profile-image"
                />
                <div className="profile-info">
                    <div className="profile-name">Chike Egonu</div>
                    <div className="profile-username">chikeegonu@gmail.com</div>
                </div>
            </div>
            <button className="manage-account">Manage account</button>
            <button className="sign-out">Sign out</button>
        </div>
    );
}

export default AccountProfileMenu;

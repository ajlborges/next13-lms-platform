import React from 'react';
import '../../app/globals.css'

interface AccountProfileIconProps {
    onClick: () => void; 
}

const AccountProfileIcon: React.FC<AccountProfileIconProps> = ({ onClick }) => {
    return (
        <div className="profile-icon" onClick={onClick}>
            <img
                src="https://media.licdn.com/dms/image/v2/C4D03AQHO0P8YHLEszw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1650719854175?e=1735776000&v=beta&t=lVd7rM76bNqgA3xrEq3XcyMedFa1GLZ6N_HbEXg6CtU" // Replace with actual profile image
                alt="AccountProfile"
                className="profile-image"
            />
            {console.log('just to test if it works 2')}
        </div>
    );
}

export default AccountProfileIcon;

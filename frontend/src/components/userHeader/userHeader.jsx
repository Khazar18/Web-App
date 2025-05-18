import { useEffect, useState } from "react";
import "./userHeader.css";
import wave from "../../assets/ethereal silky waves.svg";
import placeholderUser from "../../assets/women_avatar.svg";

export function UserHeader() {
  const [userData, setUserData] = useState({
    username: "User-101", // Default username
    profileImage: placeholderUser, // Default profile image
  });

  useEffect(() => {
    // Fetch user data from your API or database
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user"); // Replace with your API endpoint
        const data = await response.json();

        setUserData({
          username: data.username || "User-101", // Use default if no username provided
          profileImage: data.profileImage || placeholderUser, // Use default if no image provided
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        // Use default user data if fetch fails
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-section-container">
      <div className="heroSectionCreatePost">
        <div className="wave-background">
          <img src={wave || "/placeholder.svg"} alt="Wave Background" className="wave-image" />
        </div>
        <div className="user-profile">
          <div className="profile-image">
            <img
              src={userData.profileImage}
              alt="User Profile"
              onError={(e) => {
                // Fallback to placeholder image if the image fails to load
                e.target.src = placeholderUser;
              }}
            />
          </div>
          <h2 className="username">{userData.username}</h2>
        </div>
      </div>
    </div>
  );
}

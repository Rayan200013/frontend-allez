import React from "react";
import "../css/TeamMember.css";

const TeamMemberCard = ({ name, role, imgSrc, description }) => {
  return (
    <div className="team-member-card">
      <img src={imgSrc} alt={`${name} - ${role}`} />
      <div className="team-member-details">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;

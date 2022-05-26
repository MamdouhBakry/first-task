import React from "react";
import "./ProjectCard.css";
import ThreeDots from "../../assets/svg/three-dots.svg";
import menueRectange from "../../assets/svg/menu-rectangle.svg";
function ProjectCard(props) {
  return (
    <div className="col-4 project-card">
      <div className="card-header">
        <span className="card-title">
          <h3>{props.title}</h3>
          <img src={ThreeDots} alt="three dots svg" />
        </span>
      </div>
      <div className="card-body">{props.projectDescription}</div>
      <div className="card-footer">
        <span className="users">
          <i className="pi pi-users"></i>
          <p> {props.users} اعضاء</p>
        </span>
        <span className="modifications">
          <i class="fa fa-bug" aria-hidden="true"></i>
          تعديلات {props.modifications}
        </span>
        <div className="action">فعال</div>
      </div>
    </div>
  );
}

export default ProjectCard;

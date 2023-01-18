import React from "react";
import { authors } from "../../../assets/data/DummyData";
import Button from "../../UI/button/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import download from "../../../assets/profileImages/download.png";

import "./work.css";
function Work(props) {
  const author = authors.findIndex((author) => author.id === props.author);
  const authorInfo = authors[author];
  const handleClick = () => {
    console.log("Clicked read more");
  };
  return (
    <div className="work-container">
      <div className="work-wrapper">
        <div className="section-work image-section">
          <img src={download} alt="profile" />
          <h4>{`${authorInfo.username}`}</h4>
        </div>
        <div className="section-work work-section">
          <h3>{props.title}</h3>
          <p>{props.body}</p>
        </div>
        <div className="section-work last-section">
          <Button className="btn-primary" onClick={handleClick}>
            Read More
          </Button>
        </div>
      </div>
      <div className="like-section">
        <Button className="btn-outline like" onClick={handleClick}>
          <ThumbUpOffAltIcon />
        </Button>
      </div>
    </div>
  );
}

export default Work;

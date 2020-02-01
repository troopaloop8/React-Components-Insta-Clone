import React from 'react';

import "./Posts.css";

const LikeSection = props => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper buffer">
        <i className="far fa-heart" onClick={props.countLikes} />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      <strong>{`${props.likes} likes`}</strong>
       </p>
</div>
  )
};

export default LikeSection;

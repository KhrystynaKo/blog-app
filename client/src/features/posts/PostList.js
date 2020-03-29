import React from "react";

import Button from "../../components/Button";
import Favorite from "../favorite/Favorite";

const PostList = () => {
  return (
    <div
      className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
      data-uk-grid
    >
      <div className="uk-card-media-left uk-cover-container">
        <img src="https://picsum.photos/600/400" alt="" data-uk-cover />
        <canvas width={600} height={400} />
      </div>
      <div>
        <div className="uk-card-body">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            Title <Favorite />
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button href="/" color="text">
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostList;

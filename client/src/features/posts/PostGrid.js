import React from "react"
import { Link } from "react-router-dom"

import Button from "../../components/Button"
import Favorite from "../favorite/Favorite"

const PostGrid = ({ post }) => {
  return (
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
      <div className="uk-card-header">
        <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
          {post.title} <Favorite id={post.id} title={post.title} type="post" />
        </h3>
      </div>
      <div className="uk-card-body">
        <p>{post.body}</p>
      </div>
      <div className="uk-card-footer">
        <Link
          to={`/post/${post.id}`}
          href="post.html"
          className="uk-button uk-button-text"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default PostGrid

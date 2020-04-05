import React from "react"

import CommentsList from "./CommentsList"
import CommentForm from "./CommentForm"

const Comments = ({ id, comments, setComments }) => {
  return (
    <div>
      <h3 className="uk-margin-remove-top">Comments:</h3>
      <CommentsList comments={comments} />

      <CommentForm id={id} comments={comments} setComments={setComments} />
    </div>
  )
}

export default Comments

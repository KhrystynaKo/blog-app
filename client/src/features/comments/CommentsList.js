import React from "react"

import Comment from "./Comment"

const CommentsList = ({ comments }) => {
  return (
    <div className="uk-comments">
      <hr />
      {comments.map((commentItem) => (
        <Comment
          key={commentItem.id}
          author={commentItem.name}
          email={commentItem.email}
          commentBody={commentItem.body}
        />
      ))}
    </div>
  )
}

export default CommentsList

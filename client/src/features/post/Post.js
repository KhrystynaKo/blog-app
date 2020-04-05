import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Comments from "../comments/Comments"

const Post = () => {
  let { id } = useParams()
  const [options, setOptions] = useState({
    _embed: "comments",
    _expand: "user",
  })
  const { data } = useFetch(`/posts/${id}`, options)
  const [comments, setComments] = useState([])

  useEffect(() => {
    data && setComments(data.comments)
  }, [data])
  data && console.log(data.comments)
  console.log(comments)
  return (
    <>
      <h1 className="uk-heading-bullet uk-margin-medium-bottom">
        {data && <span>{data.title}</span>}
        {data && (
          <a className="uk-text-small" href="#">
            {data.user.name}
          </a>
        )}
      </h1>
      <div className="uk-article uk-dropcap uk-margin-large-bottom">
        <div className="uk-article uk-dropcap uk-margin-large-bottom">
          {data && <p>{data.body}</p>}
        </div>
      </div>
      <hr />
      <Comments id={id} comments={comments} setComments={setComments} />
    </>
  )
}

export default Post

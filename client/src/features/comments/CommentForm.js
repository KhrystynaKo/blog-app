import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Must enter a name"),
  email: Yup.string()
    .email("Must be a valid email adress")
    .required("Must enter a email"),
  comment: Yup.string().min(2, "Too Short!").required("Must enter a name"),
})

const CommentForm = ({ id, comments, setComments }) => {
  return (
    <Formik
      initialValues={{
        postId: "",
        id: "",
        name: "",
        email: "",
        comment: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            postId: +id,
            id: Date.now(),
            name: values.name,
            email: values.email,
            body: values.comment,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((newComment) => {
            resetForm()
            setComments([...comments, newComment])
          })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
      }) => (
        <Form
          onSubmit={handleSubmit}
          action="#"
          className="uk-comment-form uk-margin-medium-top"
        >
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Add Comment</legend>
            <div className="uk-margin">
              <Field
                className={`uk-input ${errors.name ? "uk-form-danger" : ""}`}
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div className="uk-margin">
              <Field
                className={`uk-input ${errors.email ? "uk-form-danger" : ""}`}
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className="uk-margin">
              <Field
                // className='uk-textarea'
                className={`uk-textarea ${
                  errors.comment ? "uk-form-danger" : ""
                }`}
                rows={5}
                placeholder="Comment"
                name="comment"
                as="textarea"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
              />
              {errors.comment && touched.comment ? (
                <div>{errors.comment}</div>
              ) : null}
            </div>
            <div className="uk-margin">
              <button
                disabled={!isValid}
                className="uk-button uk-button-primary"
                type="submit"
              >
                Post Comment
              </button>
            </div>
          </fieldset>
        </Form>
      )}
    </Formik>
  )
}

export default CommentForm

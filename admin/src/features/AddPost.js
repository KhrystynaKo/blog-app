import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { blue } from "@ant-design/colors";

const AddPost = ({ data, setData }) => {
  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Must enter a name"),
    body: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Must enter a description"),
    categoryId: Yup.string().required("Must be selected one of the option"),
  });

  console.log(data);
  return (
    <div className='site-card-wrapper'>
      <Formik
        initialValues={{
          id: "",
          title: "",
          body: "",
          categoryId: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          fetch("http://localhost:3000/posts", {
            method: "POST",
            body: JSON.stringify({
              userId: Math.floor(1 + Math.random() * (5 + 1 - 1)),
              id: Date.now(),
              title: values.title,
              body: values.body,
              categoryId: values.categoryId,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((newData) => {
              resetForm();
              setData([...data, newData]);
            });
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
            action='#'
            class='uk-form-horizontal uk-margin-large'
          >
            <h1 className='uk-heading-divider uk-align-center'>Add Comment</h1>
            <fieldset className='uk-fieldset'>
              <div className='uk-margin'>
                <label class='uk-form-label' for='form-tirle'>
                  Add Title
                </label>
                <div class='uk-form-controls'>
                  <Field
                    id='form-title'
                    className={`uk-input ${
                      errors.title ? "uk-form-danger" : ""
                    }`}
                    name='title'
                    placeholder='title'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  {errors.title && touched.title ? (
                    <div>{errors.title}</div>
                  ) : null}
                </div>
              </div>
              <div className='uk-margin'>
                <label class='uk-form-label' for='form-description'>
                  Add description
                </label>
                <div class='uk-form-controls'>
                  <Field
                    id='form-description'
                    className={`uk-textarea ${
                      errors.body ? "uk-form-danger" : ""
                    }`}
                    rows={5}
                    placeholder='description'
                    name='body'
                    as='textarea'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body}
                  />
                  {errors.body && touched.body ? (
                    <div>{errors.body}</div>
                  ) : null}
                </div>
              </div>
              <label class='uk-form-label' for='form-stacked-select'>
                Choose post category
              </label>
              <div class='uk-form-controls'>
                <Field
                  id='form-stacked-select'
                  className={`uk-select ${
                    errors.categoryId ? "uk-form-danger" : ""
                  }`}
                  name='categoryId'
                  as='select'
                >
                  <option value='1'>some category 1</option>
                  <option value='2'>some category 2</option>
                  <option value='3'>some category 3</option>
                  <option value='4'>some category 4</option>
                </Field>
                {errors.categoryId && touched.categoryId ? (
                  <div>{errors.categoryId}</div>
                ) : null}
              </div>
              <div className='uk-margin'>
                <button
                  disabled={!isValid}
                  className='uk-button uk-button-primary uk-align-center'
                  type='submit'
                >
                  Add Post
                </button>
              </div>
            </fieldset>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default AddPost;

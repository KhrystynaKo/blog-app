import React, { useState, useEffect, useReducer } from "react";

const initialState = {
  loader: false,
  error: null,
};

const API_URL = "http://localhost:3000";

const reducer = (state, action) => {
  switch (action.type) {
    case "init":
      return {
        loader: true,
        error: null,
      };
    case "success":
      return {
        loader: false,
        error: null,
      };
    case "error":
      return {
        loader: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const useFetch = (pathname) => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "init" });
    fetch(`${API_URL}${pathname}`)
      .then((response) => {
        return response.json();
      })
      .then((posts) => {
        setData(posts);
        dispatch({ type: "success" });
      })
      .catch((error) => dispatch({ type: "error", payload: error }));
  }, [pathname]);

  return { data, setData };
};

export default useFetch;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import PostForm from "./features/PostForm";
import Categories from "./features/Categories";

import MainLayout from "./components/MainLayout";
import AddPost from "./features/AddPost";

import "antd/dist/antd.css";
import "./index.css";

function App() {
  const { data, setData } = useFetch("/posts");
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path='/'>
            <Categories />
          </Route>
          <Route path='/postform'>
            <PostForm data={data} setData={setData} />
          </Route>
          <Route path='/addpost'>
            <AddPost data={data} setData={setData} />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}
export default App;

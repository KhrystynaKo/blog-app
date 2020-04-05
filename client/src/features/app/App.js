import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Layout from "../../components/Layout"
import Posts from "../posts/Posts"
import Post from "../post/Post"

import FavoritesProvider from "../favorite/FavoritesProvider"

const App = () => {
  return (
    <Router>
      <FavoritesProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route path="/post/:id">
              <Post />
            </Route>
          </Switch>
        </Layout>
      </FavoritesProvider>
    </Router>
  )
}

export default App

import FirstRow from "./1st-row"
import SecondRow from "./2nd-row"
import Pagination from "./pagination"
import Post from "./post"
// Setup router
import {Route, Switch} from "react-router"

export default function Blog () {
  return (
    <div className="blog">
      <Switch>
        <Route exact path="/blog">
          <FirstRow />
          <SecondRow />
          <Pagination />
        </Route>

        <Route path={`/blog/:post`}>
          <Post />
        </Route>
      </Switch>
    </div>
  )
}
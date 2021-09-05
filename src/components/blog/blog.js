import FirstRow from "./1st-row"
import SecondRow from "./2nd-row"
import Pagination from "./pagination"

export default function Blog () {
  return (
    <div className="blog">
      <FirstRow />
      <SecondRow />
      <Pagination />
    </div>
  )
}
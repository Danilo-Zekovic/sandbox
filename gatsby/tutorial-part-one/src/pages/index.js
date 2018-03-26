import React from "react"
import Link from "gatsby-link";

export default () => <div style={{ color: `tomato` }}>
  <h1>Hello Serbia!</h1>
  <p>What a world.</p>
  <img src="https://source.unsplash.com/random/400x200" alt="" />
  <br />
  <div>
    <Link to="/page-2/">Link 2</Link>
  </div>
  <div>
    <Link to="/page-3/">Link 3</Link>
  </div>
  <div>
      <Link to="/counter/">Counter</Link>
    </div>
</div>

import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/footer.module.css"

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <p>
          <Link to="https://gatsby.ghost.org/">Ghost & Gatsby</Link> © 2021 —
          Published with
          <Link to="https://ghost.org/"> Ghost</Link>
        </p>
      </div>
      <div className={styles.right}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/blog">
          <p>Blog</p>
        </Link>
        <Link to="/author/Ghost">
          <p>Author</p>
        </Link>
        <Link to="https://ghost.org/help/">
          <p>Help</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer

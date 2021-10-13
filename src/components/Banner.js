import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import * as styles from "../styles/banner.module.css"

function Banner({ type }) {
  const data = useStaticQuery(graphql`
    query BannerQuery {
      site {
        siteMetadata {
          title
          bannerTitle
          bannerSubtitle
        }
      }
    }
  `)

  const { title, bannerTitle, bannerSubtitle } = data.site.siteMetadata
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      {/* title and social media links */}
      <div className={styles.links}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.social}>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Feedly</p>
        </div>
      </div>
      {/* main part */}
      <div className={`${type === "banner" ? styles.middle : styles.hide}`}>
        <h1>{bannerTitle}</h1>
        <h3>{bannerSubtitle}</h3>
      </div>
      {/* page links */}
      <div className={styles.links}>
        <div className={styles.leftLinks}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/author/Ghost">Author</Link>
          <Link to="https://ghost.org/help/">Help</Link>
        </div>
        <div className={styles.about}>
          <Link to="/blog/about">About</Link>
        </div>
      </div>
    </div>
  )
}

export default Banner

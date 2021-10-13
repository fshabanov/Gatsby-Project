import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/card.module.css"
import { Avatar } from "@material-ui/core"
import { Link } from "gatsby"

function Card({ blog }) {
  const { title, subtitle, author, category, image, slug } = blog.frontmatter

  return (
    <div>
      <Link to={`/blog/${slug}`} className={styles.link}>
        <GatsbyImage
          image={getImage(image.childImageSharp.gatsbyImageData)}
          // className={styles.image}
          alt={title}
          loading="lazy"
        />
        <p className={styles.category}>{category}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </Link>
      <div className={styles.footer}>
        <div className={styles.author}>
          <Avatar>{author[0].toUpperCase()}</Avatar>
          <p>{author}</p>
        </div>
        <p>{blog.timeToRead} minutes read</p>
      </div>
    </div>
  )
}

export default Card

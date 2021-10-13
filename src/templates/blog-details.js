import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/blogDetails.module.css"

function BlogDetails({ data }) {
  const { html, timeToRead } = data.markdownRemark
  const { title, author, image } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <GatsbyImage
            image={getImage(image.childImageSharp.gatsbyImageData)}
            alt={title}
          />
        </div>
        <div className={styles.title}>
          <div>
            <h1>{title}</h1>
            <span>by {author}</span>
          </div>
          <p>{timeToRead} minutes read</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className={styles.body}
        />
      </div>
    </Layout>
  )
}

export default BlogDetails

export const query = graphql`
  query BlogDetails($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        author
        category
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

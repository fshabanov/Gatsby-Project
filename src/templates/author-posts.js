import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import AllCards from "../components/AllCards"

function AuthorPosts({ data }) {
  const blogs = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <AllCards blogs={blogs} />
    </Layout>
  )
}

export default AuthorPosts

export const query = graphql`
  query AuthorPosts($author: String!) {
    allMarkdownRemark(filter: { frontmatter: { author: { eq: $author } } }) {
      nodes {
        timeToRead
        id
        frontmatter {
          title
          subtitle
          author
          category
          slug
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

import { graphql } from "gatsby"
import React from "react"
import AllCards from "../../components/AllCards"
import Layout from "../../components/Layout"

function Blog({ data }) {
  const blogs = data.allMarkdownRemark.nodes
  return (
    <div>
      <Layout>
        <AllCards blogs={blogs} />
      </Layout>
    </div>
  )
}

export default Blog

export const query = graphql`
  query BlogData {
    allMarkdownRemark {
      nodes {
        id
        html
        frontmatter {
          title
          subtitle
          author
          category
          slug
          image {
            childImageSharp {
              gatsbyImageData(width: 350)
            }
          }
        }
        timeToRead
      }
    }
  }
`

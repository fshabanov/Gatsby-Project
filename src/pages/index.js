import { graphql, } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/globals.css"
import AllCards from "../components/AllCards"

export default function Home({ data }) {
  const blogs = data.allMarkdownRemark.nodes;
  return (
    <div>
      <Layout>
        <AllCards blogs={blogs} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query BlogsData {
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

import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import Pagination from "../components/Pagination"

const IndexPage = () => {
  const postPerPage = 6
  let numberOfPages
  return (
    <Layout tweaks="mainContent">
      <SEO title="Home" />

      <StaticQuery
        query={indexQuery}
        render={data => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postPerPage
          )
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  description={node.frontmatter.description}
                  body={node.html}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                ></Post>
              ))}
              <Pagination
                currentPage={1}
                numberOfPages={numberOfPages}
              ></Pagination>
            </div>
          )
        }}
      ></StaticQuery>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 8
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "MMM DD YYYY")
            description
            title
            image {
              childImageSharp {
                fluid(maxWidth: 640) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage

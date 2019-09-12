import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import SideBar from "../components/SideBar"

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} منشور${
    totalCount === 1 ? "" : "ات"
  } متعلقة ب "${tag}"`

  return (
    <Layout>
      <SEO title={pageHeader} />
      <h1 dir="rtl" className="text-center mb-4 mt-4">
        {pageHeader}
      </h1>
      <Row>
        <Col md="9">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post
              key={node.id}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              body={node.excerpt}
              tags={node.frontmatter.tags}
              fluid={node.frontmatter.image.childImageSharp.fluid}
            />
          ))}
        </Col>
        <Col md="3" className="mt-4 mb-4">
          <SideBar></SideBar>
        </Col>
      </Row>
    </Layout>
  )
}
export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 371) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default tagPosts

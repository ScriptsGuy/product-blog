import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import SideBar from "../components/SideBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <Col md="9">
        <StaticQuery
          query={indexQuery}
          render={data => {
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
              </div>
            )
          }}
        ></StaticQuery>
      </Col>
      <Col md="3" className="mt-4 mb-4">
        <SideBar></SideBar>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "MMM Do YYYY")
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

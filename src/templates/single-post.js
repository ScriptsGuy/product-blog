import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SideBar from "../components/SideBar"
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"
import { Row, Col, Card, CardSubtitle, Badge, CardBody } from "reactstrap"

export default function SinglePost({ data }) {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title}></SEO>
      <h1 dir="rtl" className="text-center mb-4 mt-4">
        {post.title}
      </h1>
      <Row>
        <Col md="9" className="pl-0 pr-0 mt-4 mb-4">
          <Card dir="rtl" style={{ textAlign: "right" }} className="   rounded">
            <Img
              className="card-image-top"
              fluid={post.image.childImageSharp.fluid}
            ></Img>
            <CardBody>
              <CardSubtitle
                className="mb-4"
                dir="rtl"
                style={{ textAlign: "right" }}
              >
                <span className="text-info">{post.date}</span> by{" "}
                <span className="text-info">{post.author}</span>
              </CardSubtitle>
              <div
                dir="rtl"
                style={{ textAlign: "right", fontSize: 20 }}
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              ></div>
              <ul
                style={{
                  padding: 0,
                  display: "inline-flex",
                  listStyle: "none",
                }}
              >
                {post.tags.map(tag => (
                  <li
                    style={{
                      marginRight: 10,
                      fontSize: 20,
                    }}
                    key={tag}
                  >
                    <Link to={`/tag/${slugify(tag)}`}>
                      <Badge color="primary">{tag}#</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="mt-4 mb-4">
          <SideBar></SideBar>
        </Col>
      </Row>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

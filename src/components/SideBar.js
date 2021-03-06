import React, { Component } from "react"
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <Card className="shadow-sm rounded">
          <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
              newsletter
            </CardTitle>
            <Form
              name="Contact Form"
              method="POST"
              data-netlify="true"
              className="text-center"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your emial adress"
                ></Input>
              </FormGroup>
              <button
                type="submit"
                className="btn btn btn-outline-success text-uppercase"
              >
                subscribe
              </button>
            </Form>
          </CardBody>
        </Card>
        <Card className="shadow-sm mt-3  rounded">
          <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
              advertisement
            </CardTitle>
            <img
              src="https://via.placeholder.com/300.png/09f/fff"
              alt="advert"
              style={{ width: "100%" }}
            />
          </CardBody>{" "}
        </Card>
        <Card className=" shadow-sm mt-3  rounded" id="recentPosts">
          <CardBody>
            <CardTitle className="text-center text-uppercase mb-3">
              اخر المنشورات
            </CardTitle>
            <StaticQuery
              query={sidebarQuery}
              render={data => (
                <div style={{ textAlign: "right", direction: "rtl" }}>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <li
                      style={{
                        listStyle: "none",
                      }}
                      key={node.id}
                    >
                      <Link to={node.fields.slug}>
                        <h6>{node.frontmatter.title}</h6>
                      </Link>
                      <hr
                        style={{
                          width: "70%",
                          marginBottom: 5,
                          marginTop: 5,
                          height: 1,
                        }}
                      />
                    </li>
                  ))}
                </div>
              )}
            ></StaticQuery>
          </CardBody>
        </Card>
      </div>
    )
  }
}

const sidebarQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 8
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMM Do YYYY")
            description
            title
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

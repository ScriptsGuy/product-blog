import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { slugify } from "../util/utilityFunctions"
import {
  Badge,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap"

export default function Post({
  title,
  author,
  description,
  slug,
  date,
  fluid,
  tags,
}) {
  return (
    <div className="mt-4 mb-4 ">
      <Card
        dir="rtl"
        style={{ textAlign: "right" }}
        className="shadow p-3  rounded"
      >
        <Link to={slug}>
          {" "}
          <Img className="card-image-top" fluid={fluid}></Img>
        </Link>
        <CardBody>
          <CardTitle>
            <h4>
              <Link to={slug}>{title}</Link>
            </h4>
          </CardTitle>
          <CardSubtitle>
            <span className="text-info">{date}</span> من قبل{" "}
            <span className="text-info">{author}</span>
          </CardSubtitle>
          <CardText>{description}</CardText>
          <ul
            style={{
              padding: 0,
              display: "inline-flex",
              listStyle: "none",
              marginTop: 10,
            }}
          >
            {tags.map(tag => (
              <li
                key={tag}
                style={{
                  marginRight: 10,
                  fontSize: 20,
                }}
              >
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary">{tag}#</Badge>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to={slug}
            className="readMore btn btn-outline-primary float-left"
          >
            Read more
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

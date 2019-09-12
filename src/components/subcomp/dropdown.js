import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, StaticQuery } from "gatsby"
import { slugify } from "../../util/utilityFunctions"
import { Badge } from "reactstrap"

import _ from "lodash"

library.add(faChevronDown)

export default function dropdown() {
  return (
    <div className="dropdown">
      <FontAwesomeIcon className="dropbtn" color="white" icon={faChevronDown} />
      <StaticQuery
        query={tagQuery}
        render={data => {
          const posts = data.allMarkdownRemark.edges

          // Get all tags
          let tags = []
          _.each(posts, edge => {
            if (_.get(edge, "node.frontmatter.tags")) {
              tags = tags.concat(edge.node.frontmatter.tags)
            }
          })

          let tagPostCounts = {} // { tutorial: 2, design: 1}
          tags.forEach(tag => {
            // Or 0 cause it might not exist yet
            tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
          })

          // Remove duplicates
          tags = _.uniq(tags)
          return (
            <div className="dropdown-content">
              {tags.map(tag => (
                <a href={`/tag/${slugify(tag)}`}>
                  {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>{" "}
                </a>
              ))}
            </div>
          )
        }}
      ></StaticQuery>
    </div>
  )
}

const tagQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, faHeart)

export default function footer() {
  return (
    <div className="pt-3" style={{ backgroundColor: "white" }}>
      <h4 className="text-center">Algerian Scripter</h4>
      <p className="text-center">Follow me on social media</p>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
        }}
        className="mb-0 pb-3"
      >
        <li className="mr-3">
          <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
            <FontAwesomeIcon size="2x" icon={["fab", "facebook-f"]} />
          </a>
        </li>
        <li className="mr-3">
          <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
            <FontAwesomeIcon size="2x" icon={["fab", "twitter"]} />
          </a>
        </li>
        <li className="mr-3">
          <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
            <FontAwesomeIcon size="2x" icon={["fab", "linkedin-in"]} />
          </a>
        </li>
        <li className="mr-3">
          <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
            <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
          </a>
        </li>
      </ul>
      <div className="text-center mb-2">
        © {new Date().getFullYear()}, Built with
        {` `}
        <span>
          <FontAwesomeIcon color="red" icon={faHeart} />
          {` `}
          love
        </span>
      </div>
    </div>
  )
}

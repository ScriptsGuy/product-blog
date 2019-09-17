import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, faHeart, faCoffee)

export default function footer() {
  return (
    <div className="pt-3 footer" style={{ backgroundColor: "white" }}>
      <h3 className="text-center">Scripts</h3>
      <p className="text-center">Follow me on social media</p>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
        }}
        className="footerlogos mb-0 pb-3"
      >
        <li className="mr-3 icon">
          <a
            className=" icon"
            href="https://www.facebook.com/Scripts7/?ref=aymt_homepage_panel&eid=ARDHh-j0TwGZf4TBWdXkfZ3p7sTaXVzyEJifP2N2X9gbXkxPAab7vFfvNzQyC-E9-DuQMq-owvQatQ8C"
          >
            <FontAwesomeIcon size="2x" icon={["fab", "facebook-f"]} />
          </a>
        </li>
        <li className="mr-3 icon">
          <a className=" icon" href="https://twitter.com/Salah75082802">
            <FontAwesomeIcon size="2x" icon={["fab", "twitter"]} />
          </a>
        </li>
        <li className="mr-3 icon">
          <a
            className=" icon"
            href="https://www.linkedin.com/in/salah-berriani-26677318a/"
          >
            <FontAwesomeIcon size="2x" icon={["fab", "linkedin-in"]} />
          </a>
        </li>
        <li className="mr-3 icon">
          <a className=" icon" href="https://github.com/SalahEddinBerriani">
            <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
          </a>
        </li>
      </ul>
      <div className="text-center pb-2">
        © {new Date().getFullYear()}, Built with
        {` `}
        <span>
          <FontAwesomeIcon color="red" icon={faHeart} />
          {` `}
          love and
          {` `}
          <FontAwesomeIcon color="brown" icon={faCoffee} />
        </span>
      </div>
    </div>
  )
}

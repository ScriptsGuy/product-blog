import React, { Component } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default class darkToggler extends Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label style={{ color: "white", marginTop: 8, marginLeft: 350 }}>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            night mode
          </label>
        )}
      </ThemeToggler>
    )
  }
}

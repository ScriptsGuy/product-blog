import React, { Component } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default class darkToggler extends Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label style={{ color: "white", marginLeft: 10, marginBottom: 0 }}>
            <input
              style={{ marginTop: 10 }}
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
          </label>
        )}
      </ThemeToggler>
    )
  }
}

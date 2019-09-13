import React, { Component } from "react"
import { topFunction } from "../../util/scrolltotop"

export default class ScrollButton extends Component {
  componentDidMount() {
    //Get the button
    const mybutton = document.getElementById("myBtn")

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      scrollFunction()
    }

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block"
      } else {
        mybutton.style.display = "none"
      }
    }

    // When the user clicks on the button, scroll to the top of the document
  }

  render() {
    return (
      <div>
        <button onClick={topFunction} id="myBtn">
          top
        </button>
      </div>
    )
  }
}

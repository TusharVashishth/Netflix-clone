import React, { useEffect, useState } from "react"
import Logo from "../assets/netflix.png"
import Avatar from "../assets/avatar.png"
import { Link } from "react-router-dom"
import "../css/Nav.css"
function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })

    return () => {
      window.removeEventListener("scroll")
    }
  }, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to="/">
        <img src={Logo} alt="logo" className="nav__logo" />
      </Link>
      <img src={Avatar} alt="avatar" className="nav__avatar" />
    </div>
  )
}

export default Nav

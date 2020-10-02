import React from "react"
import Insta from "../assets/instagram.png"
import Linkedin from "../assets/linkedin.png"
import Github from "../assets/github1.png"
import "../css/Footer.css"
function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <p>Developed by Tushar Vashishth with ❤</p>
        <p>Follow me on</p>
      </div>
      <div className="footer__links">
        <a href="https://www.instagram.com/tushar.vashishth/">
          <img src={Insta} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/tushar-vashishth-b15998172/">
          <img src={Linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/TusharVashishth">
          <img src={Github} alt="github" />
        </a>
      </div>
    </div>
  )
}

export default Footer

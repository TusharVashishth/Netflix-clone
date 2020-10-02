import React, { useEffect, useState } from "react"
import axios from "../utils/setAxios"
import requests from "../utils/requests"
import "../css/Banner.css"
import { truncateStr } from "../utils/truncateStr"
import { useHistory } from "react-router-dom"
const Banner = () => {
  const [poster, setPoster] = useState([])
  const history = useHistory()
  useEffect(() => {
    const getPosters = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setPoster(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }

    getPosters()
  }, [])

  const detailPage = () => {
    history.push({
      pathname: "/detail",
      state: poster,
    })
  }
  return (
    <header
      className="banner"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${poster?.backdrop_path}")`,
        backgroundSize: "cover",
        position: "relative",
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {poster?.name || poster?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={detailPage}>
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>

        <div className="banner__description">
          {truncateStr(poster?.overview, 200)}
        </div>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  )
}

export default Banner

import React, { useState, Fragment } from "react"
import { useLocation } from "react-router-dom"
import { truncateStr } from "../utils/truncateStr"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const Detail = () => {
  const location = useLocation()
  const [trailerId, setTrailerId] = useState("")
  const [notfound, setNotFound] = useState(false)
  console.log(location)
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const getMovieTrailer = () => {
    if (trailerId) {
      setTrailerId("")
    } else {
      movieTrailer(
        location.state?.name ||
          location.state?.original_name ||
          location.state?.original_title
      )
        .then((url) => {
          console.log(url)
          const urlParam = new URLSearchParams(new URL(url).search)
          setTrailerId(urlParam.get("v"))
          setNotFound(false)
        })
        .catch((err) => {
          console.log(err)
          setNotFound(true)
        })
    }
  }
  return (
    <Fragment>
      <header
        className="banner__detail"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${location.state?.backdrop_path}")`,
          backgroundSize: "cover",
          position: "relative",
        }}>
        <div className="banner__contents">
          <h1 className="banner__title">
            {location.state?.name ||
              location.state?.original_name ||
              location.state?.original_title}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button" onClick={getMovieTrailer}>
              Watch Trailer
            </button>
          </div>

          <div className="banner__description">
            {truncateStr(location.state?.overview, 250)}
          </div>
        </div>
        <div className="banner__fadeBottom" />
      </header>
      {trailerId && <Youtube videoId={trailerId} opts={opts} />}
      {notfound && (
        <div className="notfound">
          <h3 className="notfound__text">
            Video not found <span role="img">😌</span>
          </h3>
        </div>
      )}
    </Fragment>
  )
}

export default Detail

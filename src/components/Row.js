import React, { useState, useEffect } from "react"
import axios from "../utils/setAxios"
import "../css/Row.css"
import { Link } from "react-router-dom"
import NetflixLoading from "../assets/netflix_Loading.jpg"
const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }

    fetchData()
  }, [fetchUrl])

  const displayPosters = () => {
    let displayMovies
    if (movies.length > 0) {
      displayMovies = movies.map((movie) => {
        if (movie.original_title || movie.name) {
          return (
            <Link
              to={{
                pathname: "/detail",
                state: movie,
              }}
              key={movie.id}>
              <img
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
                className="row__poster"
              />
            </Link>
          )
        }
      })
    } else {
      displayMovies = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
        return (
          <img
            src={NetflixLoading}
            className="row__poster"
            key={item}
            alt="loadingImg"
          />
        )
      })
    }

    return displayMovies
  }
  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">{displayPosters()}</div>
    </div>
  )
}

export default Row

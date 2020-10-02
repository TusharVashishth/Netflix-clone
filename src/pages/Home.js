import React, { Fragment } from "react"
import Row from "../components/Row"
import requests from "../utils/requests"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Bollywood" fetchUrl={requests.fetchTrendingBollywood} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentraries" fetchUrl={requests.fetchDocumentraies} />
      <Footer />
    </Fragment>
  )
}

export default Home

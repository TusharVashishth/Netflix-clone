const API_KEY = "Use your tmdb api and you are ready to go"

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=hi-IN&region=IN&with_original_language=hi`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentraies: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
  fetchTrendingBollywood: `/discover/movie?api_key=${API_KEY}&language=hi-IN&region=IN&primary_release_year=2019&with_original_language=hi`,
}

export default requests

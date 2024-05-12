import axios from 'axios';

// const movieApiToken = 'SE6GF43-RV2473Z-QR19TQH-YTFZ378'
// const movieApiToken = 'VH7CSXR-N15MFZG-JX04631-64VRXXB'
const movieApiToken = 'VD7ST12-3KQMENT-P836VBP-AQA04GY'
// const movieApiToken = "WKE87JD-4D441GJ-MPRMZ0Q-6DC5G21"
const movieApiUrl = 'https://api.kinopoisk.dev/v1.4/';


const movieApi = axios.create({
  baseURL: movieApiUrl,
  headers: {accept:'application/json', 'X-API-KEY': movieApiToken},
});


export const getMoviesAPI = async (type = 'movie', page = 1, limit = 10, sortedParams = {}) => {
  const selectFields = ['id', 'name', 'description', 'shortDescription', 'slogan', 'type', 'year', 'rating', 'poster', 'genres']
  const notNullFields = ['id', 'name', 'description', 'shortDescription', 'slogan', 'type', 'year', 'rating.kp', 'poster.url', 'genres.name']
  const moviesLimit = limit > 250 ? 250 : limit

  let queryUrl = `?type=${type}`
  queryUrl += `&page=${page}`
  queryUrl += `&limit=${moviesLimit}`
  queryUrl += sortedParams['genres'] ? `&genres.name=${sortedParams['genres']}` : ''
  queryUrl += sortedParams['sort'] ? `&sortField=${sortedParams['sort']}` : ''
  queryUrl += sortedParams['sort'] ? `&sortType=${sortedParams['sortType'] ? '1' : '-1'}` : ''
  selectFields.map(f=>queryUrl+=`&selectFields=${f}`)
  notNullFields.map(f=>queryUrl+=`&notNullFields=${f}`)

  const movieData = await movieApi
    .get("movie" + queryUrl, {})
    .catch(error => console.error("api error -", error.response.data.message))
  console.warn("request, url -", movieData.request.responseURL)
  return movieData.data
}
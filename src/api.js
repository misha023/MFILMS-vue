import axios from 'axios';

const movieApiToken = 'SE6GF43-RV2473Z-QR19TQH-YTFZ378'
const movieApiUrl = 'https://api.kinopoisk.dev/v1.4/';


const movieApi = axios.create({
  baseURL: movieApiUrl,
  headers: {accept:'application/json', 'X-API-KEY': movieApiToken},
});

export const getMoviesAPI = async (page = 1) => {
  const selectedFields = ['id', 'name', 'description', 'shortDescription', 'slogan', 'type', 'year', 'rating', 'poster']
  const selectedFieldsParam = selectedFields.map(field => `&selectFields=${field}`).join('')
  const movieData = await movieApi.get(`movie?${selectedFieldsParam}`, {
    params: {
      page: page,
      limit: 5,
      type: 'movie'
    }
  }).catch(error => {
    console.log("getMoviesApi error -", error)
  })
  return movieData.data
}